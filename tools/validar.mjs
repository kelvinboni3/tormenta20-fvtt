/**
 * Valida os YAML de homebrew/packs/ antes de compilar.
 *
 *   npm run validar
 *
 * Checa o que o Foundry rejeita ou descarta em silencio: _id malformado ou
 * duplicado, _key fora de sincronia com o _id, e valores fora das listas
 * fechadas dos DataModels (duracao.units, tipo, atributo).
 */
import fs from "node:fs/promises";
import path from "node:path";
import yaml from "js-yaml";

const ROOT = path.resolve(import.meta.dirname, "..");
const HOMEBREW = path.join(ROOT, "homebrew", "packs");

// Extraidos de tormenta20.mjs: T20.timePeriods, T20.powerType, T20.atributos,
// T20.abilityActivationTypes. Apenas duracao.units, tipo e atributo sao
// validados pelo DataModel; execucao e conferida por higiene.
const timePeriods = ["inst", "scene", "turn", "round", "sust", "minute", "hour", "day", "month", "year", "perm", "special"];
const powerType = ["ability", "classe", "concedido", "geral", "origem", "racial", "distincao", "complicacao"];
const atributos = ["for", "des", "con", "int", "sab", "car"];
const execucoes = ["passive", "action", "move", "full", "reaction", "free", "minute", "hour", "day", "special"];
const tamanhos = ["min", "peq", "med", "gra", "eno", "col"];
const tiposDeGrant = ["single", "multi"];

const erros = [];
const ids = new Map();
const uuidsReferenciados = [];
let total = 0;

const packs = await fs.readdir(HOMEBREW, { withFileTypes: true }).catch(() => []);
for (const entry of packs.filter((e) => e.isDirectory())) {
	const dir = path.join(HOMEBREW, entry.name);
	// Pastas e itens vivem no mesmo diretorio, mas com prefixos de chave
	// diferentes. Precisamos das pastas antes para conferir as referencias.
	const pastas = new Set();
	const documentos = [];
	for (const f of await fs.readdir(dir)) {
		if (!f.endsWith(".yml") && !f.endsWith(".yaml")) continue;
		let doc;
		try {
			doc = yaml.load(await fs.readFile(path.join(dir, f), "utf8"));
		} catch (e) {
			erros.push(`${f}: YAML invalido - ${e.message}`);
			continue;
		}
		documentos.push([f, doc]);
		if (typeof doc?._key === "string" && doc._key.startsWith("!folders!")) pastas.add(doc._id);
	}

	for (const [f, doc] of documentos) {
		total++;
		const ehPasta = typeof doc._key === "string" && doc._key.startsWith("!folders!");

		const id = doc._id;
		if (typeof id !== "string" || !/^[a-zA-Z0-9]{16}$/.test(id)) {
			erros.push(`${f}: _id precisa ter 16 caracteres alfanumericos (recebido: ${id})`);
		}
		if (ids.has(id)) erros.push(`${f}: _id duplicado com ${ids.get(id)}`);
		else ids.set(id, f);
		const prefixo = ehPasta ? "!folders!" : "!items!";
		if (doc._key !== `${prefixo}${id}`) erros.push(`${f}: _key nao corresponde ao _id (${doc._key})`);
		if (!doc.name) erros.push(`${f}: sem name`);

		if (ehPasta) {
			if (doc.type !== "Item") erros.push(`${f}: pasta com type "${doc.type}", esperado "Item"`);
			if (doc.folder && !pastas.has(doc.folder)) erros.push(`${f}: pasta-mae inexistente (${doc.folder})`);
			continue;
		}
		// Uma referencia a pasta inexistente faz o documento sumir da arvore no
		// Foundry, sem erro visivel.
		if (doc.folder && !pastas.has(doc.folder)) {
			erros.push(`${f}: aponta para a pasta "${doc.folder}", que nao existe neste pack`);
		}

		const s = doc.system ?? {};
		if (doc.type === "poder") {
			if (!powerType.includes(s.tipo)) erros.push(`${f}: system.tipo invalido (${s.tipo})`);
			if (!s.subtipo) erros.push(`${f}: sem system.subtipo`);
			if (!timePeriods.includes(s.duracao?.units)) erros.push(`${f}: duracao.units invalido (${s.duracao?.units})`);
			if (!execucoes.includes(s.ativacao?.execucao)) erros.push(`${f}: ativacao.execucao desconhecida (${s.ativacao?.execucao})`);
			// O DataModel (tormenta20.mjs:12437) declara `atributo` como StringField
			// sem `choices`, e 46 poderes oficiais o deixam vazio. Vazio significa
			// "sem atributo-chave" e e legitimo; so um valor desconhecido e erro.
			const atr = s.resistencia?.atributo;
			if (atr !== "" && !atributos.includes(atr)) erros.push(`${f}: resistencia.atributo invalido (${atr})`);
			if (typeof s.ativacao?.custo !== "number") erros.push(`${f}: ativacao.custo precisa ser numero`);
			if (typeof s.ativacao?.qtd !== "string") erros.push(`${f}: ativacao.qtd precisa ser texto`);
			if (typeof s.duracao?.value !== "number") erros.push(`${f}: duracao.value precisa ser numero`);
		} else if (doc.type === "classe") {
			for (const k of ["niveis", "pvPorNivel", "pmPorNivel"]) {
				if (typeof s[k] !== "number") erros.push(`${f}: ${k} precisa ser numero`);
			}
			// As 14 classes oficiais ficam entre 2 e 6. Fora disso quase sempre
			// significa que foi preenchido o PV inicial, nao o PV por nivel.
			if (s.pvPorNivel > 6) erros.push(`${f}: pvPorNivel=${s.pvPorNivel} fora da faixa das classes oficiais (2 a 6)`);
			if (typeof s.pericias?.numero !== "number") erros.push(`${f}: pericias.numero precisa ser numero`);
		} else if (doc.type === "race") {
			// RaceData (tormenta20.mjs:18112): os seis atributos sao obrigatorios,
			// numericos e com minimo -5. Um ausente vira 0 em silencio.
			for (const abl of atributos) {
				const v = s.atributos?.[abl];
				if (typeof v !== "number") erros.push(`${f}: atributos.${abl} precisa ser numero`);
				else if (v < -5) erros.push(`${f}: atributos.${abl}=${v} abaixo do minimo (-5)`);
			}
			if (!Array.isArray(s.tamanho) || !s.tamanho.length) {
				erros.push(`${f}: tamanho precisa ser uma lista com ao menos um valor`);
			} else {
				for (const t of s.tamanho) {
					if (!tamanhos.includes(t)) erros.push(`${f}: tamanho invalido (${t})`);
				}
			}
			if (typeof s.movement?.walk !== "number") erros.push(`${f}: movement.walk precisa ser numero`);
			// Um grant com uuid errado nao gera erro no Foundry: a habilidade
			// simplesmente nao aparece na hora de criar o personagem.
			for (const [i, g] of (s.grants ?? []).entries()) {
				if (!tiposDeGrant.includes(g?.type)) erros.push(`${f}: grants[${i}].type invalido (${g?.type})`);
				if (!Array.isArray(g?.choices) || !g.choices.length) {
					erros.push(`${f}: grants[${i}] sem choices`);
					continue;
				}
				for (const [j, c] of g.choices.entries()) {
					if (typeof c?.uuid !== "string" || !/^Compendium\.[^.]+\.[^.]+\.Item\.[a-zA-Z0-9]{16}$/.test(c.uuid)) {
						erros.push(`${f}: grants[${i}].choices[${j}].uuid malformado (${c?.uuid})`);
					} else uuidsReferenciados.push([f, c.uuid]);
				}
			}
			for (const [i, sk] of (s.skills ?? []).entries()) {
				if (!tiposDeGrant.includes(sk?.type)) erros.push(`${f}: skills[${i}].type invalido (${sk?.type})`);
				if (!Array.isArray(sk?.choices) || !sk.choices.length) erros.push(`${f}: skills[${i}] sem choices`);
			}
		} else {
			erros.push(`${f}: type inesperado (${doc.type})`);
		}
	}
}

// Um grant que aponta para um pack homebrew so resolve se o documento existir
// no YAML. Referencias aos packs oficiais nao dao para conferir aqui, porque o
// conteudo deles vive no LevelDB e nao neste diretorio.
for (const [f, uuid] of uuidsReferenciados) {
	const [, , pack, , id] = uuid.split(".");
	if (!pack.startsWith("homebrew-")) continue;
	if (!ids.has(id)) erros.push(`${f}: grant aponta para ${uuid}, que nao existe em homebrew/packs/`);
}

console.log(`documentos verificados: ${total}`);
console.log(`_id unicos: ${ids.size}`);
if (erros.length) {
	console.log(`\nPROBLEMAS (${erros.length}):`);
	for (const e of erros) console.log("  - " + e);
	process.exit(1);
}
console.log("\nnenhum problema encontrado");
