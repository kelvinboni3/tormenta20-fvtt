/**
 * Camada homebrew do sistema Tormenta20.
 *
 * Este arquivo e carregado DEPOIS de tormenta20.mjs (ver "esmodules" em system.json).
 * Toda customizacao de mecanica vive aqui, para que tormenta20.mjs - que e um
 * bundle gerado - permaneca intocado e continue substituivel por uma versao nova.
 *
 * Regras da casa:
 *  - Estender CONFIG.T20 no hook "init", antes dos DataModels lerem os choices.
 *  - Nunca inventar campos soltos em system.*: os DataModels sao estritos e
 *    descartam chaves desconhecidas ao salvar. Use flags (ver helpers abaixo).
 */

const NS = "tormenta20-homebrew";

/* -------------------------------------------- */
/*  Flags: onde dados customizados podem morar   */
/* -------------------------------------------- */

/**
 * Escopo das flags.
 *
 * Precisa ser "tormenta20": Document#getFlag valida o escopo e so aceita
 * "core", o id do sistema ativo ou o id de um MODULO ativo. Um escopo proprio
 * como "tormenta20-homebrew" faz o getFlag lancar
 * `Flag scope ... is not valid or not currently active`, porque nao existe
 * modulo com esse id - este codigo faz parte do sistema, nao de um modulo.
 * Tudo fica aninhado sob a chave "homebrew" para nao colidir com as flags que
 * o proprio sistema grava.
 */
const SCOPE = "tormenta20";
const PREFIXO = "homebrew";

/**
 * Le um dado homebrew de um documento.
 * @param {Document} doc    Ator ou item.
 * @param {string} key      Chave dentro do namespace homebrew.
 * @param {*} [fallback]    Valor devolvido quando a flag nao existe.
 * @returns {*}
 */
export function getHB(doc, key, fallback = null) {
	return doc?.getFlag(SCOPE, `${PREFIXO}.${key}`) ?? fallback;
}

/**
 * Grava um dado homebrew em um documento. Persiste porque flags nao passam
 * pela validacao do DataModel.
 * @param {Document} doc    Ator ou item.
 * @param {string} key      Chave dentro do namespace homebrew.
 * @param {*} value         Valor a gravar.
 * @returns {Promise<Document>}
 */
export function setHB(doc, key, value) {
	return doc.setFlag(SCOPE, `${PREFIXO}.${key}`, value);
}

/* -------------------------------------------- */
/*  Reparo: atributo das pericias                */
/* -------------------------------------------- */

/**
 * Devolve ao campo `atributo` de cada pericia o valor de referencia do sistema.
 *
 * Existem fichas em que as 34 pericias ficam gravadas com "for", fazendo toda
 * rolagem usar Forca. A referencia correta e CONFIG.T20.pericias[chave].abl -
 * repare que a chave no CONFIG e `abl`, e no ator e `atributo`. O proprio
 * sistema traz uma migracao para isso (tormenta20.mjs:19077), o que sugere ser
 * um defeito conhecido dele; esta funcao aplica o mesmo conserto sob demanda.
 *
 * Atencao: e uma reposicao ao padrao. Se o jogador tiver trocado o atributo de
 * alguma pericia de proposito, essa troca tambem sera desfeita. Use so quando a
 * ficha estiver claramente errada.
 *
 * @param {Actor} actor
 * @returns {Promise<string[]>}  Chaves das pericias corrigidas.
 */
export async function repararPericias(actor) {
	const pericias = actor?.system?.pericias;
	if (!pericias) return [];
	const alteracoes = {};
	const corrigidas = [];
	for (const [chave, pericia] of Object.entries(pericias)) {
		const padrao = CONFIG.T20.pericias?.[chave]?.abl;
		if (!padrao || pericia.atributo === padrao) continue;
		alteracoes[`system.pericias.${chave}.atributo`] = padrao;
		corrigidas.push(`${chave}: ${pericia.atributo} -> ${padrao}`);
	}
	// A opcao marca esta escrita como intencional, para o guarda abaixo deixar
	// passar - ele bloqueia justamente alteracoes em massa como esta.
	if (corrigidas.length) await actor.update(alteracoes, { [PREFIXO]: { reparo: true } });
	return corrigidas;
}

/**
 * Repara as pericias de todos os atores do mundo de uma vez, incluindo os
 * tokens nao vinculados das cenas - eles guardam uma copia propria dos dados do
 * ator e nao sao alcancados por game.actors.
 *
 * O guarda de preUpdateActor impede que a ficha estrague de novo, mas nao
 * desfaz o que ja estava gravado; e para isso que esta funcao serve.
 *
 * @returns {Promise<object>}  Resumo do que foi corrigido, por ator.
 */
export async function repararTudo() {
	const resumo = {};
	for (const actor of game.actors) {
		const n = await repararPericias(actor);
		if (n.length) resumo[actor.name] = n.length;
	}
	for (const scene of game.scenes) {
		for (const token of scene.tokens) {
			if (token.actorLink || !token.actor) continue;
			const n = await repararPericias(token.actor);
			if (n.length) resumo[`[token] ${scene.name} / ${token.name}`] = n.length;
		}
	}
	const total = Object.values(resumo).reduce((s, n) => s + n, 0);
	console.log(`${NS} | pericias reparadas: ${total} em ${Object.keys(resumo).length} atores`, resumo);
	ui.notifications?.info(
		total
			? `Perícias reparadas: ${total} em ${Object.keys(resumo).length} ficha(s).`
			: "Nenhuma perícia precisava de reparo."
	);
	return resumo;
}

/**
 * A partir de quantas pericias fora do padrao uma ficha e considerada
 * corrompida. Trocar uma ou duas de proposito e legitimo; dez ou mais so
 * acontece pelo bug da ficha, que joga tudo em "for".
 */
const LIMITE_DETECCAO = 10;

/**
 * Quantas pericias de um ator estao fora do padrao do sistema.
 * @param {Actor} actor
 * @returns {number}
 */
function periciasSuspeitas(actor) {
	const pericias = actor?.system?.pericias;
	if (!pericias) return 0;
	let n = 0;
	for (const [chave, pericia] of Object.entries(pericias)) {
		const padrao = CONFIG.T20.pericias?.[chave]?.abl;
		if (padrao && pericia.atributo !== padrao) n++;
	}
	return n;
}

/**
 * Lista os atores do mundo que parecem ter sido atingidos pelo bug.
 * @returns {Actor[]}
 */
function atoresCorrompidos() {
	return game.actors.filter((a) => a.system?.pericias && periciasSuspeitas(a) >= LIMITE_DETECCAO);
}

/**
 * Pergunta ao mestre se quer consertar, e conserta. Pensado para quem nao vai
 * abrir o console: aparece sozinho ao entrar no mundo e resolve num clique.
 * @param {boolean} [silencioso]  Nao avisa quando nao ha nada a corrigir.
 */
export async function oferecerReparo(silencioso = false) {
	const atingidos = atoresCorrompidos();
	if (!atingidos.length) {
		if (!silencioso) ui.notifications?.info("Nenhuma ficha com perícias corrompidas.");
		return;
	}
	const lista = atingidos
		.slice(0, 10)
		.map((a) => `<li>${foundry.utils.escapeHTML(a.name)}</li>`)
		.join("");
	const resto = atingidos.length > 10 ? `<p>...e mais ${atingidos.length - 10}.</p>` : "";
	const conteudo = `
		<p><strong>${atingidos.length} ficha(s)</strong> estão com as perícias usando o atributo errado
		(quase todas em Força). Isso vem de uma falha da ficha do sistema ao editar em modo de edição,
		e faz as rolagens de perícia saírem erradas.</p>
		<ul>${lista}</ul>${resto}
		<p>Posso repor os atributos padrão de cada perícia. Se você tiver trocado o atributo de alguma
		perícia de propósito, essa troca também será desfeita.</p>`;

	// O conserto e feito no proprio callback do botao, e nao a partir do valor
	// devolvido pelo dialogo: assim nao depende de como cada versao do Foundry
	// resolve esse retorno.
	await foundry.applications.api.DialogV2.wait({
		window: { title: "Tormenta20 — Perícias com atributo errado" },
		content: conteudo,
		buttons: [
			{ action: "corrigir", label: "Corrigir agora", icon: "fas fa-wrench", default: true, callback: () => repararTudo() },
			{ action: "depois", label: "Agora não", icon: "fas fa-times" }
		],
		rejectClose: false
	});
}

// Avisa o mestre ao entrar no mundo, sem incomodar quando esta tudo certo.
Hooks.once("ready", () => {
	if (!game.user.isGM) return;
	setTimeout(() => oferecerReparo(true), 3000);
});

// Botao permanente na barra lateral de Atores, para quem dispensou o aviso ou
// so notou o problema depois.
Hooks.on("renderActorDirectory", (app, html) => {
	const raiz = html instanceof HTMLElement ? html : html?.[0];
	if (!raiz || !game.user.isGM || raiz.querySelector(".hb-reparar-pericias")) return;
	const alvo = raiz.querySelector(".directory-footer") ?? raiz.querySelector(".directory-header");
	if (!alvo) return;

	const botao = document.createElement("button");
	botao.type = "button";
	botao.className = "hb-reparar-pericias";
	botao.innerHTML = `<i class="fas fa-wrench"></i> Corrigir perícias`;
	botao.addEventListener("click", () => oferecerReparo());
	alvo.append(botao);
});

/**
 * Quantas pericias alteradas de uma vez ja indicam corrupcao, e nao edicao.
 * Trocar o atributo de uma pericia e uma decisao pontual; ninguem troca cinco
 * na mesma acao.
 */
const LIMITE_PERICIAS_EM_MASSA = 5;

/**
 * Impede a ficha de gravar o atributo errado em massa.
 *
 * A ficha de personagem em modo de edicao renderiza um <select> por pericia
 * (templates/actor/parts/lists/list-skills.hbs). Em algum re-render esses
 * selects perdem o valor e voltam ao primeiro do CONFIG - "for". A partir dai
 * qualquer alteracao na ficha, mesmo mudar um atributo, envia o formulario
 * inteiro e grava Forca em cerca de 20 das 34 pericias, o que estraga TODAS as
 * rolagens de pericia.
 *
 * Reproduzido em ator sem nenhum item, entao e defeito do sistema e nao desta
 * camada. Como o tormenta20.mjs e um bundle gerado, consertar la seria perdido
 * na proxima atualizacao; aqui a escrita ruim e apenas descartada.
 */
Hooks.on("preUpdateActor", (actor, changed, options) => {
	if (options?.[PREFIXO]?.reparo) return;
	const plano = foundry.utils.flattenObject(changed ?? {});
	const suspeitas = Object.keys(plano).filter((k) => /^system\.pericias\.[^.]+\.atributo$/.test(k));
	if (suspeitas.length < LIMITE_PERICIAS_EM_MASSA) return;

	// Mantem apenas o que realmente muda em relacao ao padrao do sistema, que e
	// nenhuma coisa numa gravacao vinda do bug: todas viriam como "for".
	let descartadas = 0;
	for (const chave of suspeitas) {
		const pericia = chave.split(".")[2];
		const padrao = CONFIG.T20.pericias?.[pericia]?.abl;
		if (!padrao || plano[chave] === padrao) continue;
		foundry.utils.setProperty(changed, chave, padrao);
		descartadas++;
	}
	if (descartadas) {
		console.warn(`${NS} | ${descartadas} pericias seriam gravadas com o atributo errado pela ficha; corrigido`);
	}
});

/* -------------------------------------------- */
/*  PV das classes homebrew                      */
/* -------------------------------------------- */

const CLASSE_VIDENTE = "Vidente Carmesim de Rusivald";
const CLASSE_TREINADOR = "Treinador";
const CLASSE_SUMIE = "Artífice do Sumiê";

/**
 * Ajuste de PV de cada classe homebrew, em pontos, conforme ela esteja ou nao
 * marcada como "Classe Inicial" na ficha.
 *
 * O sistema soma `pvPorNivel` por nivel e acrescenta CON sozinho; com a caixa
 * marcada, o nivel 1 vale 4 x pvPorNivel. Para uma classe cujo alvo e
 * "P1 + CON no nivel 1, depois p + CON por nivel", o total dos N niveis fica:
 *
 *   inicial marcada    -> 4p + p(N-1) + N*CON = pN + 3p + N*CON
 *   inicial desmarcada ->        p*N  + N*CON = pN      + N*CON
 *   alvo               -> P1 + CON + (N-1)(p+CON) = pN + (P1 - p) + N*CON
 *
 * Logo o ajuste e sempre uma constante, valida em todos os niveis:
 *
 *   marcada    -> P1 - 4p
 *   desmarcada -> P1 - p
 *
 * | Classe   | P1 | p | marcada | desmarcada |
 * | -------- | -- | - | ------- | ---------- |
 * | Vidente  | 16 | 5 |      -4 |        +11 |
 * | Treinador| 12 | 3 |       0 |         +9 |
 * | Sumie    | 14 | 4 |      -2 |        +10 |
 *
 * O Treinador cai em zero com a caixa marcada porque seu PV inicial (12) e
 * exatamente 4 x pvPorNivel. Nesse caso nenhum efeito e criado.
 *
 * Atencao: as duas contas assumem que a classe e a unica do personagem. Num
 * multiclasse legitimo, uma classe secundaria ja sai correta sem ajuste, e o
 * valor "desmarcada" a deixaria com PV a mais. E a mesma premissa que o
 * ajuste do Vidente ja carregava.
 */
const AJUSTE_PV = {
	[CLASSE_VIDENTE]: { inicial: -4, naoInicial: 11, efeito: "Vitalidade do Vidente" },
	[CLASSE_TREINADOR]: { inicial: 0, naoInicial: 9, efeito: "Vitalidade do Treinador" },
	[CLASSE_SUMIE]: { inicial: -2, naoInicial: 10, efeito: "Vitalidade do Artífice" }
};

/**
 * Mantem os efeitos de PV das classes homebrew coerentes com o estado da caixa
 * "Classe Inicial". Nao podem ser efeitos estaticos no item de classe porque o
 * valor correto muda conforme essa caixa, que o jogador controla na ficha.
 *
 * Um efeito por classe, identificado pela flag `pv` com o nome dela, para que
 * um multiclasse entre duas classes homebrew nao misture os dois ajustes.
 * @param {Actor} actor
 */
export function sincronizarPV(actor) {
	if (!actor?.isOwner || actor.pack) return Promise.resolve();
	// `attributes.pv.bonus` so existe no ator "character" (tormenta20.mjs:16221);
	// nos demais tipos o efeito nao teria onde aterrissar.
	if (actor.type !== "character") return Promise.resolve();
	// Mesma fila da fadiga: dois gatilhos (hook de item e render da ficha) podem
	// chamar isto ao mesmo tempo, e sem serializar ambos veem "nao existe
	// efeito" e criam um cada, aplicando o ajuste em dobro.
	return enfileirar(actor, async () => {
		// Ajuste 0 nao gera efeito nenhum - e o caso do Treinador com a caixa
		// "Classe Inicial" marcada, em que o sistema ja acerta o total sozinho.
		const desejados = new Map();
		for (const item of actor.itemTypes?.classe ?? []) {
			const regra = AJUSTE_PV[item.name];
			if (!regra) continue;
			const ajuste = item.system.inicial ? regra.inicial : regra.naoInicial;
			if (ajuste) desejados.set(item.name, { ajuste, efeito: regra.efeito });
		}

		// Busca TODOS, nao apenas o primeiro: se alguma duplicata escapou, ela e
		// removida aqui em vez de continuar somando.
		const existentes = actor.effects.filter((e) => e.getFlag(SCOPE, `${PREFIXO}.pv`));

		// Sem isto o hook de render viraria um laco de escrita.
		const conferem =
			existentes.length === desejados.size &&
			existentes.every((e) => {
				const marca = e.getFlag(SCOPE, `${PREFIXO}.pv`);
				// Versoes anteriores gravavam apenas `pv: true`, quando so existia a
				// classe Vidente. Fichas antigas ainda trazem esse formato.
				const nome = marca === true ? CLASSE_VIDENTE : marca;
				return Number(e.changes[0]?.value) === desejados.get(nome)?.ajuste;
			});
		if (conferem) return;

		if (existentes.length) {
			await actor.deleteEmbeddedDocuments(
				"ActiveEffect",
				existentes.map((e) => e.id)
			);
		}
		if (!desejados.size) return;

		await actor.createEmbeddedDocuments(
			"ActiveEffect",
			[...desejados].map(([nome, { ajuste, efeito }]) => ({
				name: `${efeito} (${ajuste > 0 ? "+" : ""}${ajuste} PV)`,
				img: "icons/magic/life/heart-cross-strong-blue.webp",
				origin: actor.uuid,
				disabled: false,
				changes: [
					{
						key: "system.attributes.pv.bonus.total",
						mode: CONST.ACTIVE_EFFECT_MODES.ADD,
						value: String(ajuste),
						priority: 20
					}
				],
				flags: { [SCOPE]: { [PREFIXO]: { pv: nome } } }
			}))
		);
	});
}

for (const hook of ["createItem", "updateItem", "deleteItem"]) {
	Hooks.on(hook, (item) => {
		if (item?.parent?.documentName !== "Actor" || item.type !== "classe") return;
		if (!(item.name in AJUSTE_PV)) return;
		sincronizarPV(item.parent);
	});
}

// Rede de seguranca: os hooks de item nao sao confiaveis aqui. Ao desmarcar
// "Classe Inicial" num personagem de classe unica, ItemT20._onUpdate
// (tormenta20.mjs:6732) tenta promover outra classe, nao acha nenhuma e lanca
// TypeError - o que aborta a cadeia ANTES do Foundry disparar "updateItem".
// Sincronizar tambem ao abrir a ficha garante que o ajuste se corrija sozinho.
// sincronizarPV so escreve quando o valor muda, entao isso nao vira um laco de
// render.
Hooks.on("renderActorSheet", (app) => sincronizarPV(app.actor));

/* -------------------------------------------- */
/*  Fadiga da Visao                              */
/* -------------------------------------------- */

const EFEITO_FADIGA = "Fadiga da Visao";
const FADIGA_MAX = 11;

/**
 * Limiares da Fadiga da Visao, do pior para o melhor. Vale apenas o mais alto
 * alcancado: -2 em tudo ja engloba o -1 em mentais, entao os dois nunca somam.
 *
 * As chaves de `changes` sao as que o proprio sistema documenta em
 * tormenta20.mjs (lista de presets de ActiveEffect). Todas sao ArrayField de
 * String, entao o modo ADD empurra a formula no array e ela entra na rolagem -
 * o mesmo mecanismo das condicoes nativas como Debilitado.
 */
const LIMIARES = [
	{ min: 11, rotulo: "Exausto", condicao: "exausto", changes: [] },
	{ min: 9, rotulo: "Confuso", condicao: "confuso", changes: [] },
	{
		min: 6,
		rotulo: "-2 em testes gerais",
		changes: [
			["system.modificadores.atributos.geral", "-2"],
			["system.modificadores.pericias.geral", "-2"]
		]
	},
	{
		min: 4,
		rotulo: "-1 em testes mentais",
		changes: [
			["system.modificadores.atributos.mentais", "-1"],
			["system.modificadores.pericias.atr.int", "-1"],
			["system.modificadores.pericias.atr.sab", "-1"],
			["system.modificadores.pericias.atr.car", "-1"]
		]
	}
];

/**
 * O ator tem a classe Vidente Carmesim de Rusivald?
 * @param {Actor} actor
 * @returns {boolean}
 */
function ehVidente(actor) {
	return actor?.itemTypes?.classe?.some((i) => i.name === CLASSE_VIDENTE) ?? false;
}

/**
 * Limiar em vigor para um valor de fadiga, ou null se abaixo do primeiro.
 * @param {number} fadiga
 * @returns {object|null}
 */
function limiarAtual(fadiga) {
	return LIMIARES.find((l) => fadiga >= l.min) ?? null;
}

/**
 * Valor atual da Fadiga da Visao.
 * @param {Actor} actor
 * @returns {number}
 */
export function getFadiga(actor) {
	return Number(getHB(actor, "fadigaVisao", 0)) || 0;
}

/**
 * Liga ou desliga uma condicao nativa do sistema (Confuso, Exausto...).
 *
 * Nao usamos Actor#toggleStatusEffect nem ActiveEffect.fromStatusEffect: os
 * dois fazem CONFIG.statusEffects[id], e o sistema substitui o Proxy do core
 * por um array simples (Object.values(T20Conditions)), no qual o acesso por
 * chave devolve undefined e as duas APIs lancam erro. CONFIG.T20.conditions e
 * um objeto indexado por id de verdade - e a via que o proprio sistema usa.
 * @param {Actor} actor
 * @param {string} id      Id da condicao, ex.: "exausto".
 * @param {boolean} ativo
 */
async function aplicarCondicao(actor, id, ativo) {
	const existente = actor.effects.find((e) => e.statuses.has(id));
	if (!ativo) {
		if (existente) await existente.delete();
		return;
	}
	if (existente) return;

	const base = CONFIG.T20?.conditions?.[id] ?? CONFIG.conditions?.[id];
	if (!base) {
		console.warn(`${NS} | condicao desconhecida: ${id}`);
		return;
	}
	// T20Conditions ainda usa a chave "icon" (pre-v12); o documento espera "img".
	const { id: _ignorado, icon, ...dados } = foundry.utils.deepClone(base);
	await actor.createEmbeddedDocuments("ActiveEffect", [
		{
			...dados,
			img: dados.img ?? icon,
			statuses: Array.from(new Set([id, ...(dados.statuses ?? [])]))
		}
	]);
}

/**
 * Reconstroi o ActiveEffect que traduz a fadiga em penalidade, e sincroniza as
 * condicoes nativas (Confuso, Exausto).
 *
 * O efeito e recriado do zero a cada mudanca em vez de editado: e mais barato
 * que reconciliar changes e garante que o nome sempre mostre o valor correto.
 * @param {Actor} actor
 */
async function sincronizarEfeito(actor) {
	const fadiga = getFadiga(actor);
	const limiar = limiarAtual(fadiga);

	const existente = actor.effects.find((e) => e.getFlag(SCOPE, `${PREFIXO}.fadiga`));
	if (existente) await existente.delete();

	if (limiar) {
		await actor.createEmbeddedDocuments("ActiveEffect", [
			{
				name: `${EFEITO_FADIGA} (${fadiga}) - ${limiar.rotulo}`,
				// Icone de Fatigado do proprio sistema: e o vocabulario visual que
				// a mesa ja reconhece para cansaco.
				img: "systems/tormenta20/icons/conditions/fatigado.svg",
				origin: actor.uuid,
				disabled: false,
				changes: limiar.changes.map(([key, value]) => ({
					key,
					mode: CONST.ACTIVE_EFFECT_MODES.ADD,
					value,
					priority: 20
				})),
				flags: { [SCOPE]: { [PREFIXO]: { fadiga: true } } }
			}
		]);
	}

	// Condicoes nativas. So mexemos nas que nos mesmos aplicamos, para nunca
	// remover um Exausto que o mestre tenha posto por outro motivo.
	const nossas = getHB(actor, "condicoesFadiga", []) ?? [];
	const desejada = limiar?.condicao ? [limiar.condicao] : [];
	for (const id of nossas) {
		if (!desejada.includes(id)) await aplicarCondicao(actor, id, false);
	}
	for (const id of desejada) {
		if (!nossas.includes(id)) await aplicarCondicao(actor, id, true);
	}
	await setHB(actor, "condicoesFadiga", desejada);
}

/**
 * Fila de escrita por ator.
 *
 * Alterar a fadiga e um ciclo ler-modificar-gravar que dispara varias operacoes
 * assincronas em documentos (gravar a flag, apagar o efeito antigo, criar o
 * novo). Sem serializar, duas alteracoes proximas - duas rodadas passando
 * rapido, ou cliques repetidos no botao - leem o mesmo valor inicial e uma
 * sobrescreve a outra, perdendo um incremento.
 * @type {Map<string, Promise>}
 */
const filaPorAtor = new Map();

/**
 * Executa `tarefa` depois de tudo que ja estava na fila daquele ator.
 * @param {Actor} actor
 * @param {() => Promise<void>} tarefa
 * @returns {Promise<void>}
 */
function enfileirar(actor, tarefa) {
	const anterior = filaPorAtor.get(actor.id) ?? Promise.resolve();
	const proxima = anterior.then(tarefa, tarefa);
	filaPorAtor.set(
		actor.id,
		proxima.catch((e) => console.error(`${NS} | falha ao atualizar a fadiga`, e))
	);
	return proxima;
}

/**
 * Nucleo da gravacao, SEM fila. So pode ser chamado de dentro de uma tarefa ja
 * enfileirada - chamar enfileirar() daqui travaria a fila esperando por si.
 * @param {Actor} actor
 * @param {number} valor
 */
async function aplicarFadiga(actor, valor) {
	const novo = Math.clamp(Math.round(Number(valor) || 0), 0, FADIGA_MAX);
	if (novo === getFadiga(actor)) return;
	await setHB(actor, "fadigaVisao", novo);
	if (novo === 0) await setHB(actor, "rodadasOlhos", 0);
	await sincronizarEfeito(actor);
}

/**
 * Define a Fadiga da Visao, respeitando os limites, e ressincroniza os efeitos.
 * @param {Actor} actor
 * @param {number} valor
 */
export function definirFadiga(actor, valor) {
	return enfileirar(actor, () => aplicarFadiga(actor, valor));
}

/**
 * Soma (ou subtrai) pontos de Fadiga da Visao.
 *
 * A leitura do valor atual acontece dentro da fila, e nao no momento da
 * chamada, para que dois ajustes seguidos somem em vez de se sobrescrever.
 * @param {Actor} actor
 * @param {number} delta
 */
export function ajustarFadiga(actor, delta) {
	return enfileirar(actor, () => aplicarFadiga(actor, getFadiga(actor) + delta));
}

/**
 * Liga ou desliga os Olhos do Julgamento. Desligar nao alivia a fadiga ja
 * acumulada - ela so zera no descanso -, apenas para de acumular.
 * @param {Actor} actor
 * @param {boolean} [ativo]  Ausente inverte o estado atual.
 */
export async function alternarOlhos(actor, ativo) {
	const novo = ativo ?? !getHB(actor, "olhosAtivos", false);
	await setHB(actor, "olhosAtivos", novo);
	if (!novo) await setHB(actor, "rodadasOlhos", 0);
	await sincronizarOlhos(actor);
}

const EFEITO_OLHOS = "Olhos do Julgamento";

/**
 * Bonus concedidos enquanto os Olhos do Julgamento estao ativos.
 *
 * `pericias.<chave>.outros` e o campo de bonus avulso de uma pericia
 * (tormenta20.mjs:9264); `defesa.atributo` troca o atributo que entra na
 * Defesa (tormenta20.mjs:9044) e por isso usa OVERRIDE, nao ADD.
 *
 * O que o poder faz e nao esta aqui - detectar ilusoes, presencas espirituais
 * e intencoes hostis, ignorar camuflagem leve - nao tem numero no sistema e
 * continua sendo leitura de mesa.
 */
const MUDANCAS_OLHOS = [
	["system.pericias.perc.outros", CONST.ACTIVE_EFFECT_MODES.ADD, "2"],
	["system.pericias.intu.outros", CONST.ACTIVE_EFFECT_MODES.ADD, "2"],
	["system.pericias.refl.outros", CONST.ACTIVE_EFFECT_MODES.ADD, "2"],
	["system.attributes.defesa.atributo", CONST.ACTIVE_EFFECT_MODES.OVERRIDE, "sab"]
];

/**
 * Cria ou remove o efeito dos Olhos do Julgamento conforme o estado do botao.
 * @param {Actor} actor
 */
export function sincronizarOlhos(actor) {
	if (!actor?.isOwner || actor.pack) return Promise.resolve();
	return enfileirar(actor, async () => {
		const deveEstar = ehVidente(actor) && getHB(actor, "olhosAtivos", false);
		const existentes = actor.effects.filter((e) => e.getFlag(SCOPE, `${PREFIXO}.olhos`));

		if (deveEstar && existentes.length === 1) return;
		if (existentes.length) {
			await actor.deleteEmbeddedDocuments(
				"ActiveEffect",
				existentes.map((e) => e.id)
			);
		}
		if (!deveEstar) return;

		await actor.createEmbeddedDocuments("ActiveEffect", [
			{
				name: EFEITO_OLHOS,
				// O mesmo icone do poder, para o efeito ativo ser reconhecido de
				// imediato como "os Olhos estao ligados".
				img: "icons/magic/perception/eye-ringed-glow-angry-large-red.webp",
				origin: actor.uuid,
				disabled: false,
				changes: MUDANCAS_OLHOS.map(([key, mode, value]) => ({ key, mode, value, priority: 20 })),
				flags: { [SCOPE]: { [PREFIXO]: { olhos: true } } }
			}
		]);
	});
}

/* -------------------------------------------- */
/*  Acumulo automatico por rodada                */
/* -------------------------------------------- */

/**
 * Folego do Predador (nivel 9) faz a fadiga subir a cada 2 rodadas em vez de a
 * cada rodada.
 * @param {Actor} actor
 * @returns {boolean}
 */
function temFolegoDoPredador(actor) {
	return actor.items.some((i) => i.type === "poder" && i.name.startsWith("Folego do Predador"));
}

Hooks.on("updateCombat", async (combat, changed) => {
	if (!("round" in changed)) return;
	// Só um cliente pode escrever, senao cada jogador conectado incrementaria.
	if (!game.users.activeGM?.isSelf) return;

	for (const combatant of combat.combatants) {
		const actor = combatant.actor;
		if (!actor || !ehVidente(actor)) continue;
		if (!getHB(actor, "olhosAtivos", false)) continue;

		// Contagem de rodadas e incremento vao na mesma tarefa da fila: sao um
		// unico ler-modificar-gravar e nao podem ser intercalados por outro.
		enfileirar(actor, async () => {
			const rodadas = Number(getHB(actor, "rodadasOlhos", 0)) + 1;
			await setHB(actor, "rodadasOlhos", rodadas);
			if (temFolegoDoPredador(actor) && rodadas % 2 !== 0) return;
			await aplicarFadiga(actor, getFadiga(actor) + 1);
		});
	}
});

/* -------------------------------------------- */
/*  Descanso zera a fadiga                       */
/* -------------------------------------------- */

Hooks.once("setup", () => {
	const proto = CONFIG.Actor.documentClass.prototype;
	const original = proto.descanso;
	if (typeof original !== "function") {
		console.warn(`${NS} | Actor#descanso nao encontrado; a fadiga nao vai zerar sozinha`);
		return;
	}
	// Envolve em vez de reescrever: se o sistema mudar o descanso, o
	// comportamento novo continua valendo e so acrescentamos o reset.
	proto.descanso = async function (...args) {
		const resultado = await original.apply(this, args);
		if (ehVidente(this) && getFadiga(this) > 0) await definirFadiga(this, 0);
		return resultado;
	};
});

/* -------------------------------------------- */
/*  Barra na ficha                               */
/* -------------------------------------------- */

Hooks.on("renderActorSheet", (app, html) => {
	const actor = app.actor;
	if (!ehVidente(actor)) return;

	const raiz = html instanceof HTMLElement ? html : html?.[0];
	const mana = raiz?.querySelector("li.attribute.mana");
	if (!mana || mana.parentElement.querySelector(".hb-fadiga")) return;

	const fadiga = getFadiga(actor);
	const limiar = limiarAtual(fadiga);
	const olhos = getHB(actor, "olhosAtivos", false);

	const li = document.createElement("li");
	li.className = `attribute hb-fadiga flexcol${limiar ? " hb-fadiga--ativa" : ""}`;
	li.innerHTML = `
		<h4 class="attribute-name box-title">Fadiga da Visão</h4>
		<div class="attribute-value multiple flexrow">
			<button type="button" class="hb-fadiga-menos" data-tooltip="-1 de Fadiga">−</button>
			<span class="hb-fadiga-valor">${fadiga}</span>
			<span class="sep">/</span>
			<span class="hb-fadiga-max">${FADIGA_MAX}</span>
			<button type="button" class="hb-fadiga-mais" data-tooltip="+1 de Fadiga">+</button>
		</div>
		<footer class="attribute-footer">
			<button type="button" class="hb-olhos${olhos ? " hb-olhos--ativo" : ""}">
				${olhos ? "Olhos ativos" : "Olhos desligados"}
			</button>
		</footer>
		${limiar ? `<div class="hb-fadiga-limiar">${limiar.rotulo}</div>` : ""}
	`;
	mana.after(li);

	if (!app.isEditable) {
		li.querySelectorAll("button").forEach((b) => (b.disabled = true));
		return;
	}
	li.querySelector(".hb-fadiga-menos").addEventListener("click", () => ajustarFadiga(actor, -1));
	li.querySelector(".hb-fadiga-mais").addEventListener("click", () => ajustarFadiga(actor, 1));
	li.querySelector(".hb-olhos").addEventListener("click", () => alternarOlhos(actor));
});

/* -------------------------------------------- */
/*  Melhor Amigo do Treinador                    */
/* -------------------------------------------- */

/**
 * O melhor amigo e um ator "simple" (Personagem do Mestre) proprio, ligado ao
 * ator do treinador. Quase tudo na ficha dele deriva do nivel do treinador, e
 * por isso e recalculado aqui em vez de digitado.
 *
 * Por que nao um efeito estatico no item: o ator "simple" nao tem nivel. O
 * sistema apaga `attributes.nivel`, `treino` e `cd` do schema quando o tipo e
 * "simple" (tormenta20.mjs:16256), de modo que `@nivel` vale 1 e `@meionivel`
 * vale 0 em qualquer formula avaliada na ficha do bicho. Toda conta que dependa
 * do nivel precisa sair daqui ja resolvida em numero.
 *
 * Consequencia pratica: `preparePVPM` (tormenta20.mjs:16911) desiste logo no
 * inicio quando nao ha nivel, entao o PV maximo do bicho nao e calculado pelo
 * sistema e pode ser gravado direto.
 */

const SUBTIPO_TRUQUE = "Truques do Melhor Amigo";
const EFEITO_AMIGO = "Vínculo com o Treinador";


/** Itens sao identificados por prefixo porque o nome no compendio traz sufixo
 *  ("(Poder de Treinador)", "(Truque)") que o jogador pode renomear. */
function poderesDeTreinador(treinador, prefixo) {
	return (treinador?.items ?? []).filter(
		(i) => i.type === "poder" && i.system?.subtipo === CLASSE_TREINADOR && i.name.startsWith(prefixo)
	);
}

function temTruque(bicho, prefixo) {
	return (bicho?.items ?? []).some((i) => i.system?.subtipo === SUBTIPO_TRUQUE && i.name.startsWith(prefixo));
}

/** O ator esta marcado como melhor amigo? So atores "simple" podem estar. */
export function ehMelhorAmigo(actor) {
	return actor?.type === "simple" && getHB(actor, "melhorAmigo.ativo", false) === true;
}

/** Atores que podem ser donos: ficha de jogador com a classe Treinador. */
function treinadoresDisponiveis() {
	return game.actors.filter(
		(a) => a.type === "character" && a.itemTypes.classe?.some((i) => i.name === CLASSE_TREINADOR)
	);
}

function treinadorDe(bicho) {
	const id = getHB(bicho, "melhorAmigo.treinador");
	return id ? (game.actors.get(id) ?? null) : null;
}

/**
 * Tudo que a ficha do bicho deriva do treinador. Funcao pura: nao grava nada,
 * para poder ser usada tanto pelo calculo quanto pela exibicao.
 * @param {Actor} bicho
 * @returns {object|null}  null quando nao ha treinador vinculado.
 */
export function estadoMelhorAmigo(bicho) {
	const treinador = treinadorDe(bicho);
	if (!treinador) return null;

	const classe = treinador.itemTypes.classe?.find((i) => i.name === CLASSE_TREINADOR);
	const nivelClasse = Number(classe?.system?.niveis) || 0;
	const nivelPersonagem = Number(treinador.system?.attributes?.nivel?.value) || 0;

	// Treinador Eclético troca o nivel que alimenta PV, pericias e Defesa do
	// bicho: passa a valer o nivel de personagem, nao o de treinador.
	const ecletico = poderesDeTreinador(treinador, "Treinador Eclético").length > 0;
	const nivel = ecletico ? nivelPersonagem : nivelClasse;

	// Treino Especializado (5o nivel) e uma escolha entre dois caminhos. Fica
	// numa flag do treinador em vez de dois itens no compendio.
	const trilha = getHB(treinador, "treinador.trilha", "");
	const intensivo = trilha === "intensivo" && nivelClasse >= 5;
	const numeros = trilha === "numeros" && nivelClasse >= 5;

	const con = Number(bicho.system?.atributos?.con?.value) || 0;
	const car = Number(treinador.system?.atributos?.car?.value) || 0;

	// PV: 16 + CON no 1o nivel, depois 4 + CON por nivel. Treino Intensivo
	// acrescenta +4 por nivel, em todos eles.
	const pvMax = nivel > 0 ? 16 + con + (nivel - 1) * (4 + con) + (intensivo ? 4 * nivel : 0) : 0;

	// RD do Treino Intensivo. Os patamares sao do nivel de TREINADOR, nao do
	// nivel efetivo - o texto fala em "11o nivel" da propria habilidade.
	const rd = !intensivo ? 0 : nivelClasse >= 17 ? 15 : nivelClasse >= 11 ? 10 : 5;

	// Defesa = 10 + Des(bicho) + Car(treinador) + metade do nivel do treinador.
	// O sistema ja monta "10 + Des"; o que falta entra como bonus. Com o truque
	// Treinamento Defensivo vale o nivel cheio no lugar da metade.
	const defensivo = temTruque(bicho, "Treinamento Defensivo");
	const defesaBonus = car + (defensivo ? nivel : Math.floor(nivel / 2));

	// Treinamento Marcial: +2, e +1 para cada patamar acima de iniciante.
	// T20.patamares = [4, 10, 16, 20], entao o indice + 1 da 1..4.
	const patamar = nivel > 0 ? CONFIG.T20.patamares.findIndex((n) => nivel <= n) + 1 || 4 : 1;
	const marcial = temTruque(bicho, "Treinamento Marcial") ? 1 + patamar : 0;

	// Truques: 2 no 1o nivel e +1 a cada tres (4o, 7o, 10o...). Treino Intensivo
	// da +1 no 5o e outro no 11o. Ensinar Truque da +1 por copia do poder.
	const slotsBase = nivel > 0 ? 2 + Math.floor((nivel - 1) / 3) : 0;
	const slotsIntensivo = !intensivo ? 0 : nivelClasse >= 11 ? 2 : 1;
	const slotsEnsinar = poderesDeTreinador(treinador, "Ensinar Truque").length;
	const slots = slotsBase + slotsIntensivo + slotsEnsinar;
	const usados = (bicho.items ?? []).filter((i) => i.system?.subtipo === SUBTIPO_TRUQUE).length;

	// Limite de parceiros: 1 de base, +1 com Conquistar pelos Numeros, +1 com
	// Coracao Grande e mais +1 quando este chega ao 11o nivel.
	const coracao = poderesDeTreinador(treinador, "Coração Grande").length > 0;
	const limiteParceiros = 1 + (numeros ? 1 : 0) + (coracao ? (nivelClasse >= 11 ? 2 : 1) : 0);

	return {
		treinador,
		nivelClasse,
		nivelPersonagem,
		nivel,
		ecletico,
		trilha,
		intensivo,
		numeros,
		con,
		car,
		pvMax,
		rd,
		defensivo,
		defesaBonus,
		marcial,
		slots,
		usados,
		limiteParceiros
	};
}

/**
 * Grava na ficha do bicho o que foi calculado: o PV maximo direto, e o resto
 * num unico ActiveEffect gerenciado, recriado sempre que algum valor muda.
 * @param {Actor} bicho
 */
export function sincronizarMelhorAmigo(bicho) {
	if (!bicho?.isOwner || bicho.pack || bicho.type !== "simple") return Promise.resolve();
	// Mesma fila da fadiga e do PV: varios gatilhos podem disparar juntos (render
	// da ficha, mudanca de item no treinador, mudanca de nivel) e sem serializar
	// dois deles leem o mesmo estado e criam um efeito cada.
	return enfileirar(bicho, async () => {
		const estado = ehMelhorAmigo(bicho) ? estadoMelhorAmigo(bicho) : null;

		const changes = [];
		if (estado) {
			if (estado.defesaBonus) changes.push(["system.attributes.defesa.bonus", estado.defesaBonus]);
			if (estado.rd) changes.push(["system.tracos.resistencias.dano.bonus", estado.rd]);
			if (estado.marcial) {
				changes.push(["system.modificadores.pericias.ataque", estado.marcial]);
				changes.push(["system.modificadores.dano.geral", estado.marcial]);
			}
		}

		const existentes = bicho.effects.filter((e) => e.getFlag(SCOPE, `${PREFIXO}.melhorAmigo`));
		const desejado = changes.length ? JSON.stringify(changes) : null;
		// Mais de um efeito gerenciado so acontece por duplicata escapada; tratar
		// como "errado" faz a proxima passada limpar.
		const atual =
			existentes.length === 1
				? JSON.stringify(existentes[0].changes.map((c) => [c.key, Number(c.value)]))
				: existentes.length
					? "duplicado"
					: null;

		// Sem isto o hook de render viraria um laco de escrita.
		if (atual !== desejado) {
			if (existentes.length) {
				await bicho.deleteEmbeddedDocuments(
					"ActiveEffect",
					existentes.map((e) => e.id)
				);
			}
			if (changes.length) {
				await bicho.createEmbeddedDocuments("ActiveEffect", [
					{
						name: EFEITO_AMIGO,
						img: "systems/tormenta20/icons/itens/gerais/animal-de-estimacao.webp",
						origin: bicho.uuid,
						disabled: false,
						changes: changes.map(([key, value]) => ({
							key,
							mode: CONST.ACTIVE_EFFECT_MODES.ADD,
							value: String(value),
							priority: 20
						})),
						flags: { [SCOPE]: { [PREFIXO]: { melhorAmigo: true } } }
					}
				]);
			}
		}

		// PV maximo: gravado direto porque o sistema nao o calcula em ator
		// "simple". Sobrescreve edicao manual - e o comportamento pedido, ja que
		// o valor deve seguir o nivel do treinador.
		if (estado?.pvMax && Number(bicho.system?.attributes?.pv?.max) !== estado.pvMax) {
			await bicho.update({ "system.attributes.pv.max": estado.pvMax });
		}
	});
}

/** Ressincroniza todos os bichos ligados a um treinador. */
function sincronizarBichosDe(treinador) {
	if (!treinador?.id) return;
	for (const a of game.actors) {
		if (a.type === "simple" && getHB(a, "melhorAmigo.treinador") === treinador.id) sincronizarMelhorAmigo(a);
	}
}

/* -------------------------------------------- */
/*  Ativacao pelo menu de contexto do ator       */
/* -------------------------------------------- */

/**
 * A ativacao fica no menu de contexto da barra lateral, e nao na ficha, para
 * que as fichas de Personagem do Mestre sem relacao com Treinador continuem
 * exatamente como sao hoje - nenhum elemento a mais.
 *
 * O nome do hook mudou na v13 (getActorDirectoryEntryContext -> getActorContextOptions).
 * Registramos os dois: o que nao existir simplesmente nunca dispara.
 */
function opcoesDeContextoDoAtor(_diretorio, opcoes) {
	// A v13 renomeou o atributo da linha (documentId -> entryId) e passa um
	// HTMLElement onde antes vinha jQuery. Aceita as duas formas.
	const alvo = (li) => {
		const el = li instanceof HTMLElement ? li : li?.[0];
		return game.actors.get(el?.dataset?.entryId ?? el?.dataset?.documentId);
	};
	opcoes.push({
		name: "Marcar como Melhor Amigo",
		icon: '<i class="fas fa-paw"></i>',
		condition: (li) => {
			const a = alvo(li);
			return game.user.isGM && a?.type === "simple" && !ehMelhorAmigo(a);
		},
		callback: async (li) => {
			const a = alvo(li);
			await setHB(a, "melhorAmigo.ativo", true);
			await sincronizarMelhorAmigo(a);
			ui.notifications?.info(`${a.name} agora é um Melhor Amigo. Escolha o treinador na ficha.`);
			a.sheet?.render(false);
		}
	});
	opcoes.push({
		name: "Deixar de ser Melhor Amigo",
		icon: '<i class="fas fa-paw"></i>',
		condition: (li) => game.user.isGM && ehMelhorAmigo(alvo(li)),
		callback: async (li) => {
			const a = alvo(li);
			await setHB(a, "melhorAmigo.ativo", false);
			// Roda depois de desmarcar: o efeito gerenciado e removido e a ficha
			// volta ao comportamento padrao de Personagem do Mestre.
			await sincronizarMelhorAmigo(a);
			a.sheet?.render(false);
		}
	});
}

for (const hook of ["getActorContextOptions", "getActorDirectoryEntryContext"]) {
	Hooks.on(hook, opcoesDeContextoDoAtor);
}

/* -------------------------------------------- */
/*  Painel na ficha do bicho                     */
/* -------------------------------------------- */

/**
 * Encaixa um painel de largura total na ficha. Devolve false quando nao ha
 * lugar conhecido, e nesse caso nada e inserido.
 *
 * Duas tentativas frustradas, medidas em jogo, explicam a escolha:
 *
 * 1. Dentro da linha de PV/PM (`ul.attributes`) nao cabe: e uma flexrow de
 *    caixas de altura fixa (~70px), e um painel com <select> precisa de ~80px.
 * 2. Como irmao da linha, dentro da coluna do cabecalho, tambem nao: na ficha
 *    de Personagem do Mestre o `section.header-details` tem altura fixa e o
 *    conteudo extra vaza POR CIMA da lista de poderes, sem empurrar nada.
 *
 * O que funciona e diferente em cada ficha:
 *
 * - **character**: `.attributes-left` e uma coluna que cresce (media 810px de
 *   altura numa aba de 615px, que rola). O painel entra depois do bloco de
 *   recursos e empurra o resto para baixo, como esperado.
 * - **simple**: o cabecalho e intocavel, mas `.tab.attributes` e um bloco que
 *   rola. Inserir antes da lista de poderes poe o painel no fluxo normal.
 *
 * @param {HTMLElement} raiz     Elemento raiz da ficha.
 * @param {HTMLElement} painel   Painel a inserir.
 * @returns {boolean}
 */
function inserirPainel(raiz, painel) {
	const recursos = raiz?.querySelector(".attributes-left .resources-main");
	if (recursos) {
		recursos.after(painel);
		return true;
	}
	const lista = raiz?.querySelector(".inventory-list");
	if (lista) {
		lista.before(painel);
		return true;
	}
	return false;
}

Hooks.on("renderActorSheet", (app, html) => {
	const bicho = app.actor;
	if (!ehMelhorAmigo(bicho)) return;

	const raiz = html instanceof HTMLElement ? html : html?.[0];
	if (raiz?.querySelector(".hb-amigo")) return;

	const estado = estadoMelhorAmigo(bicho);
	const vinculado = getHB(bicho, "melhorAmigo.treinador");
	const opcoes = treinadoresDisponiveis()
		.map((t) => `<option value="${t.id}"${t.id === vinculado ? " selected" : ""}>${foundry.utils.escapeHTML(t.name)}</option>`)
		.join("");

	// Vinculo apontando para ator apagado: avisar em vez de calcular errado.
	const orfao = vinculado && !estado;

	// Numeros como fichas em linha, e nao lista: cabem numa faixa baixa e nao
	// empurram o resto da ficha para baixo.
	const chip = (rotulo, valor, classe = "", dica = "") =>
		`<span class="hb-chip ${classe}"${dica ? ` data-tooltip="${dica}"` : ""}><b>${rotulo}</b>${valor}</span>`;

	// Defesa e RD saem do ATOR, nao da conta: a caixa "Defesa" da ficha de
	// Personagem do Mestre mostra um input ligado a `defesa.base`, nunca o total
	// (medido em jogo: base 10 na tela, total 24 nos dados). E a RD do ator pode
	// somar outras fontes alem do Treino Intensivo - o truque Reducao de Dano,
	// por exemplo. Aqui o mestre precisa ver o numero que vale na mesa.
	const defesaTotal = Number(bicho.system?.attributes?.defesa?.value) || 0;
	const rdTotal = Number(bicho.system?.tracos?.resistencias?.dano?.value) || 0;

	const li = document.createElement("div");
	li.className = "hb-painel hb-amigo";
	li.innerHTML = `
		<div class="hb-painel-topo">
			<span class="hb-painel-titulo"><i class="fas fa-paw"></i> Melhor Amigo</span>
			<select class="hb-amigo-treinador" data-tooltip="Treinador dono deste melhor amigo">
				<option value="">— sem treinador —</option>
				${opcoes}
			</select>
		</div>
		${
			orfao
				? '<p class="hb-amigo-aviso">Treinador não encontrado. Ele foi apagado?</p>'
				: estado
					? `
		<div class="hb-chips">
			${chip("Nível", estado.nivel + (estado.ecletico ? "*" : ""), estado.ecletico ? "hb-chip--nota" : "")}
			${chip("PV máx.", estado.pvMax)}
			${chip("Defesa", defesaTotal, "", `Total. O vínculo com o treinador contribui +${estado.defesaBonus}.`)}
			${rdTotal ? chip("RD", rdTotal, "", estado.rd ? `Total. Treino Intensivo contribui ${estado.rd}.` : "Total, de truques do bicho.") : ""}
			${estado.marcial ? chip("Marcial", "+" + estado.marcial, "", "Treinamento Marcial: soma em ataque e dano.") : ""}
			${chip("Truques", `${estado.usados}/${estado.slots}`, estado.usados > estado.slots ? "hb-chip--excedido" : "")}
		</div>
		${estado.ecletico ? '<p class="hb-amigo-aviso">* Treinador Eclético: usa o nível de personagem.</p>' : ""}`
					: '<p class="hb-amigo-aviso">Escolha o treinador dono.</p>'
		}
	`;
	if (!inserirPainel(raiz, li)) return;

	if (!app.isEditable) {
		li.querySelectorAll("select").forEach((s) => (s.disabled = true));
		return;
	}
	li.querySelector(".hb-amigo-treinador").addEventListener("change", async (ev) => {
		await setHB(bicho, "melhorAmigo.treinador", ev.target.value || null);
		await sincronizarMelhorAmigo(bicho);
		app.render(false);
	});
});

/* -------------------------------------------- */
/*  Painel na ficha do treinador                 */
/* -------------------------------------------- */

/** Habilidades de classe liberadas por nivel, para o quadro do treinador. */
const MARCOS_TREINADOR = [
	{ nivel: 1, nome: "Direcionar" },
	{ nivel: 1, nome: "Melhor Amigo" },
	{ nivel: 2, nome: "Domar Criatura" },
	{ nivel: 5, nome: "Domar Criatura: controle" },
	{ nivel: 5, nome: "Treino Especializado" },
	{ nivel: 6, nome: "Sincronia de Combate" },
	{ nivel: 8, nome: "Domar Criatura: até o fim do dia" },
	{ nivel: 20, nome: "Sincronia Perfeita" }
];

Hooks.on("renderActorSheet", (app, html) => {
	const treinador = app.actor;
	if (treinador?.type !== "character") return;
	if (!treinador.itemTypes.classe?.some((i) => i.name === CLASSE_TREINADOR)) return;

	const raiz = html instanceof HTMLElement ? html : html?.[0];
	if (raiz?.querySelector(".hb-treinador")) return;

	const classe = treinador.itemTypes.classe.find((i) => i.name === CLASSE_TREINADOR);
	const nivelClasse = Number(classe?.system?.niveis) || 0;
	const trilha = getHB(treinador, "treinador.trilha", "");
	const bichos = game.actors.filter(
		(a) => a.type === "simple" && getHB(a, "melhorAmigo.treinador") === treinador.id && ehMelhorAmigo(a)
	);

	// Reaproveita a conta do bicho quando ha um; sem bicho vinculado ainda,
	// calcula so o limite, que nao depende dele.
	const coracao = poderesDeTreinador(treinador, "Coração Grande").length > 0;
	const limite =
		1 + (trilha === "numeros" && nivelClasse >= 5 ? 1 : 0) + (coracao ? (nivelClasse >= 11 ? 2 : 1) : 0);

	const marcos = MARCOS_TREINADOR.map(
		(m) =>
			`<li class="${nivelClasse >= m.nivel ? "hb-marco--ok" : "hb-marco--falta"}">${m.nome} <span>${m.nivel}º</span></li>`
	).join("");

	const li = document.createElement("div");
	li.className = "hb-painel hb-treinador";
	li.innerHTML = `
		<div class="hb-painel-topo">
			<span class="hb-painel-titulo"><i class="fas fa-paw"></i> Treinador</span>
			<select class="hb-trilha" ${nivelClasse < 5 ? "disabled" : ""} data-tooltip="Treino Especializado, escolhido no 5º nível">
				<option value=""${trilha ? "" : " selected"}>— Treino Especializado —</option>
				<option value="numeros"${trilha === "numeros" ? " selected" : ""}>Conquistar pelos Números</option>
				<option value="intensivo"${trilha === "intensivo" ? " selected" : ""}>Treino Intensivo</option>
			</select>
		</div>
		<div class="hb-chips">
			<span class="hb-chip ${bichos.length > limite ? "hb-chip--excedido" : ""}"><b>Parceiros</b>${bichos.length}/${limite}</span>
			${bichos.map((b) => `<span class="hb-chip hb-chip--nome">${foundry.utils.escapeHTML(b.name)}</span>`).join("")}
		</div>
		<ul class="hb-treinador-marcos">${marcos}</ul>
	`;
	if (!inserirPainel(raiz, li)) return;

	if (!app.isEditable) {
		li.querySelectorAll("select").forEach((s) => (s.disabled = true));
		return;
	}
	li.querySelector(".hb-trilha").addEventListener("change", async (ev) => {
		await setHB(treinador, "treinador.trilha", ev.target.value);
		// A escolha muda PV, RD e truques de todos os bichos deste treinador.
		sincronizarBichosDe(treinador);
		app.render(false);
	});
});

/* -------------------------------------------- */
/*  Gatilhos de recalculo                        */
/* -------------------------------------------- */

// Item entrando ou saindo: no bicho pode ser um truque (muda Defesa, ataque e
// a contagem de slots); no treinador pode ser a classe ou um poder que ele le.
for (const hook of ["createItem", "updateItem", "deleteItem"]) {
	Hooks.on(hook, (item) => {
		const dono = item?.parent;
		if (dono?.documentName !== "Actor") return;
		if (dono.type === "simple") sincronizarMelhorAmigo(dono);
		else if (dono.type === "character") sincronizarBichosDe(dono);
	});
}

// Nivel do treinador, Carisma do treinador, Constituicao do bicho.
Hooks.on("updateActor", (actor, changed) => {
	if (!changed.system && !changed.flags) return;
	if (actor.type === "character") sincronizarBichosDe(actor);
	else if (actor.type === "simple" && ehMelhorAmigo(actor)) sincronizarMelhorAmigo(actor);
});

// Rede de seguranca, como no PV: abrir a ficha corrige o que algum gatilho
// perdido tenha deixado desatualizado.
Hooks.on("renderActorSheet", (app) => {
	if (ehMelhorAmigo(app.actor)) sincronizarMelhorAmigo(app.actor);
});

/* -------------------------------------------- */
/*  Configuracao                                 */
/* -------------------------------------------- */

Hooks.once("init", () => {
	console.log(`${NS} | carregando camada homebrew`);

	// Exemplo de extensao de CONFIG. Descomente e adapte quando precisar de um
	// tipo de poder que o sistema nao conhece. Sem isso, PowerData.tipo rejeita
	// o valor e o item nao salva (ver tormenta20.mjs, choices: CONFIG.T20.powerType).
	//
	// CONFIG.T20.powerType.homebrew = "Poder da Casa";
});

Hooks.once("ready", () => {
	// Exposto para macros e para depuracao no console.
	game.tormenta20Homebrew = {
		getFadiga,
		definirFadiga,
		ajustarFadiga,
		alternarOlhos,
		repararPericias,
		repararTudo,
		oferecerReparo,
		sincronizarPV,
		sincronizarOlhos,
		ehMelhorAmigo,
		estadoMelhorAmigo,
		sincronizarMelhorAmigo
	};
	console.log(`${NS} | pronto`);
});
