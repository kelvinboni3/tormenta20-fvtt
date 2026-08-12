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
	if (corrigidas.length) await actor.update(alteracoes);
	return corrigidas;
}

/* -------------------------------------------- */
/*  PV da classe Vidente                         */
/* -------------------------------------------- */

const CLASSE_VIDENTE = "Vidente Carmesim de Rusivald";
const EFEITO_PV = "Vitalidade do Vidente";

/**
 * Ajuste de PV necessario, em pontos, conforme a classe esteja ou nao marcada
 * como "Classe Inicial" na ficha.
 *
 * A regra da mesa e PV 16 + CON no nivel 1 e 5 + CON por nivel seguinte. Com
 * pvPorNivel = 5 o sistema ja soma CON sozinho, e o total dos N niveis fica:
 *
 *   inicial marcada   -> (N+3)*5 + N*CON = 5N + 15 + N*CON   => faltam -4
 *   inicial desmarcada->     N*5 + N*CON = 5N      + N*CON   => faltam +11
 *
 * porque o alvo e 16 + CON + (N-1)*(5 + CON) = 5N + 11 + N*CON. Em ambos os
 * casos o ajuste e uma constante, valida em todos os niveis.
 */
const AJUSTE_PV = { inicial: -4, naoInicial: 11 };

/**
 * Mantem o efeito de PV do Vidente coerente com o estado da caixa "Classe
 * Inicial". Nao pode ser um efeito estatico no item de classe porque o valor
 * correto muda conforme essa caixa, que o jogador controla na ficha.
 * @param {Actor} actor
 */
export function sincronizarPV(actor) {
	if (!actor?.isOwner || actor.pack) return Promise.resolve();
	// Mesma fila da fadiga: dois gatilhos (hook de item e render da ficha) podem
	// chamar isto ao mesmo tempo, e sem serializar ambos veem "nao existe
	// efeito" e criam um cada, aplicando o ajuste em dobro.
	return enfileirar(actor, async () => {
		const classe = actor.itemTypes?.classe?.find((i) => i.name === CLASSE_VIDENTE);
		const desejado = classe ? (classe.system.inicial ? AJUSTE_PV.inicial : AJUSTE_PV.naoInicial) : null;
		// Busca TODOS, nao apenas o primeiro: se alguma duplicata escapou, ela e
		// removida aqui em vez de continuar somando.
		const existentes = actor.effects.filter((e) => e.getFlag(SCOPE, `${PREFIXO}.pv`));

		const jaCorreto =
			desejado !== null && existentes.length === 1 && Number(existentes[0].changes[0]?.value) === desejado;
		if (jaCorreto) return;

		if (existentes.length) {
			await actor.deleteEmbeddedDocuments(
				"ActiveEffect",
				existentes.map((e) => e.id)
			);
		}
		if (desejado === null) return;

		await actor.createEmbeddedDocuments("ActiveEffect", [
			{
				name: `${EFEITO_PV} (${desejado > 0 ? "+" : ""}${desejado} PV)`,
				img: "icons/svg/heal.svg",
				origin: actor.uuid,
				disabled: false,
				changes: [
					{
						key: "system.attributes.pv.bonus.total",
						mode: CONST.ACTIVE_EFFECT_MODES.ADD,
						value: String(desejado),
						priority: 20
					}
				],
				flags: { [SCOPE]: { [PREFIXO]: { pv: true } } }
			}
		]);
	});
}

for (const hook of ["createItem", "updateItem", "deleteItem"]) {
	Hooks.on(hook, (item) => {
		if (item?.parent?.documentName !== "Actor" || item.type !== "classe") return;
		if (item.name !== CLASSE_VIDENTE) return;
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
				img: "icons/svg/blind.svg",
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
				img: "systems/tormenta20/icons/conditions/ofuscado.svg",
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
		sincronizarPV
	};
	console.log(`${NS} | pronto`);
});
