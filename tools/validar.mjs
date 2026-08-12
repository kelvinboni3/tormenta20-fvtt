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

const erros = [];
const ids = new Map();
let total = 0;

const packs = await fs.readdir(HOMEBREW, { withFileTypes: true }).catch(() => []);
for (const entry of packs.filter((e) => e.isDirectory())) {
	const dir = path.join(HOMEBREW, entry.name);
	for (const f of await fs.readdir(dir)) {
		if (!f.endsWith(".yml") && !f.endsWith(".yaml")) continue;
		total++;
		let doc;
		try {
			doc = yaml.load(await fs.readFile(path.join(dir, f), "utf8"));
		} catch (e) {
			erros.push(`${f}: YAML invalido - ${e.message}`);
			continue;
		}

		const id = doc._id;
		if (typeof id !== "string" || !/^[a-zA-Z0-9]{16}$/.test(id)) {
			erros.push(`${f}: _id precisa ter 16 caracteres alfanumericos (recebido: ${id})`);
		}
		if (ids.has(id)) erros.push(`${f}: _id duplicado com ${ids.get(id)}`);
		else ids.set(id, f);
		if (doc._key !== `!items!${id}`) erros.push(`${f}: _key nao corresponde ao _id (${doc._key})`);
		if (!doc.name) erros.push(`${f}: sem name`);

		const s = doc.system ?? {};
		if (doc.type === "poder") {
			if (!powerType.includes(s.tipo)) erros.push(`${f}: system.tipo invalido (${s.tipo})`);
			if (!s.subtipo) erros.push(`${f}: sem system.subtipo`);
			if (!timePeriods.includes(s.duracao?.units)) erros.push(`${f}: duracao.units invalido (${s.duracao?.units})`);
			if (!execucoes.includes(s.ativacao?.execucao)) erros.push(`${f}: ativacao.execucao desconhecida (${s.ativacao?.execucao})`);
			if (!atributos.includes(s.resistencia?.atributo)) erros.push(`${f}: resistencia.atributo invalido (${s.resistencia?.atributo})`);
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
		} else {
			erros.push(`${f}: type inesperado (${doc.type})`);
		}
	}
}

console.log(`documentos verificados: ${total}`);
console.log(`_id unicos: ${ids.size}`);
if (erros.length) {
	console.log(`\nPROBLEMAS (${erros.length}):`);
	for (const e of erros) console.log("  - " + e);
	process.exit(1);
}
console.log("\nnenhum problema encontrado");
