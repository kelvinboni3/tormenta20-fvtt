/**
 * Teste de regressao das pericias.
 *
 *   npm run teste-pericias
 *
 * Roda fora do Foundry, mas com o codigo de DataModel de verdade: importa
 * resources/app/common do aplicativo instalado. Aponte FOUNDRY_APP para outro
 * lugar se a instalacao nao estiver no caminho padrao do Windows.
 *
 * O que ele prova: uma escrita parcial em `system.pericias` - como a que a ficha
 * envia ao entrar no modo de edicao, so com `treinado` e `condi` - nao pode
 * reescrever `atributo`. Sem o patch de `MappingField#_cleanType` da camada
 * homebrew, todas as pericias voltam para "for".
 */
import path from "node:path";
import { pathToFileURL } from "node:url";

const RAIZ = process.env.FOUNDRY_APP ?? "C:/Program Files/Foundry Virtual Tabletop/resources/app";
const APP = pathToFileURL(path.resolve(RAIZ)).href;

globalThis.foundry = {};
await import(`${APP}/common/primitives/_module.mjs`);
globalThis.foundry.utils = await import(`${APP}/common/utils/_module.mjs`);
globalThis.CONST = globalThis.foundry.CONST = await import(`${APP}/common/constants.mjs`);
globalThis.foundry.data = { validation: await import(`${APP}/common/data/validation-failure.mjs`) };
globalThis.foundry.abstract = await import(`${APP}/common/abstract/_module.mjs`);
const fields = await import(`${APP}/common/data/fields.mjs`);
globalThis.foundry.data.fields = fields;
globalThis.foundry.data.operators = await import(`${APP}/common/data/operators.mjs`);

/* ---- copia fiel do que o sistema define (tormenta20.mjs) ---- */

const ATRIBUTOS = { for: "Força", des: "Destreza", con: "Constituição", int: "Inteligência", sab: "Sabedoria", car: "Carisma" };

class SkillData extends foundry.abstract.DataModel {
	static defineSchema() {
		return {
			atributo: new fields.StringField({ required: true, nullable: false, blank: false, choices: ATRIBUTOS, initial: "for" }),
			treinado: new fields.BooleanField(),
			st: new fields.BooleanField(),
			value: new fields.NumberField({ required: true, nullable: false, initial: 0, min: 0 }),
			condi: new fields.NumberField({ required: true, nullable: false, initial: 0 }),
			label: new fields.StringField({ required: true, nullable: false, initial: "" })
		};
	}
}

class MappingField extends fields.ObjectField {
	constructor(model, options) {
		super(options);
		this.model = model;
	}
	// >>> copia fiel do tormenta20.mjs: `_state` nao e repassado <<<
	_cleanType(value, options) {
		Object.entries(value).forEach(([k, v]) => {
			if (k.startsWith("-=")) return;
			value[k] = this.model.clean(v, options);
		});
		return value;
	}
	// Idem: `fields.ModelValidationError` nao existe mais desde a v13, entao com
	// dado invalido isto estoura um TypeError no lugar do erro de validacao.
	_validateType(value, options = {}) {
		if (foundry.utils.getType(value) !== "Object") throw new Error("must be an Object");
		const errors = this._validateValues(value, options);
		if (!foundry.utils.isEmpty(errors)) throw new foundry.data.fields.ModelValidationError(errors);
	}
	_validateValues(value, options) {
		const errors = {};
		for (const [k, v] of Object.entries(value)) {
			if (k.startsWith("-=")) continue;
			const error = this.model.validate(v, options);
			if (error) errors[k] = error;
		}
		return errors;
	}
	initialize(value, model, options = {}) {
		if (!value) return value;
		const obj = {};
		for (const key of Object.keys(value)) obj[key] = this.model.initialize(value[key], model, options);
		return obj;
	}
	_getField(path) {
		if (path.length === 0) return this;
		else if (path.length === 1) return this.model;
		path.shift();
		return this.model._getField(path);
	}
}

/* ---- o patch da camada homebrew, importado de verdade ---- */

const { corrigirMappingField } = await import("../homebrew/mapping-field.mjs");
const aplicarPatch = () => corrigirMappingField(MappingField);

/* ---- o cenario ---- */

class Ficha extends foundry.abstract.DataModel {
	static defineSchema() {
		return { pericias: new MappingField(new fields.EmbeddedDataField(SkillData)) };
	}
}

// Uma ficha saudavel, como esta gravada no banco do mundo.
const inicial = () => ({
	pericias: {
		acro: { atributo: "des", treinado: false, st: false, value: 0, condi: 0, label: "" },
		atle: { atributo: "for", treinado: false, st: false, value: 0, condi: 0, label: "" },
		conh: { atributo: "int", treinado: false, st: false, value: 0, condi: 0, label: "" },
		perc: { atributo: "sab", treinado: false, st: false, value: 0, condi: 0, label: "" },
		enga: { atributo: "car", treinado: false, st: false, value: 0, condi: 0, label: "" }
	}
});

// Exatamente o que a ficha em modo de leitura envia ao clicar na engrenagem:
// os <input type="hidden"> de `treinado` e `condi`, e nenhum `atributo`.
const envioDoFormulario = () => ({
	pericias: {
		acro: { treinado: "false", condi: 0 },
		atle: { treinado: "false", condi: 0 },
		conh: { treinado: "false", condi: 0 },
		perc: { treinado: "true", condi: 0 },
		enga: { treinado: "false", condi: 0 }
	}
});

function rodar(rotulo) {
	const ficha = new Ficha(inicial());
	ficha.updateSource(envioDoFormulario());
	const depois = Object.fromEntries(Object.entries(ficha._source.pericias).map(([k, v]) => [k, v.atributo]));
	const treinado = ficha._source.pericias.perc.treinado;
	console.log(`\n${rotulo}`);
	console.log("  atributos apos entrar no modo de edicao:", JSON.stringify(depois));
	console.log(`  perc.treinado gravado como: ${JSON.stringify(treinado)} (${typeof treinado})`);
	const viraramForca = Object.entries(depois).filter(([k, v]) => v === "for" && inicial().pericias[k].atributo !== "for");
	console.log(`  pericias que viraram Forca sem ninguem pedir: ${viraramForca.length}`);
	return viraramForca.length;
}

/* ---- os casos que derrubaram a tentativa anterior de mexer no _cleanType ---- */

const casos = [];
function checar(rotulo, condicao, detalhe = "") {
	casos.push({ rotulo, ok: !!condicao, detalhe });
}

function cenariosDeUso() {
	// 1. Treinar uma pericia. E o que `_onToggleSkillTraining` envia.
	{
		const ficha = new Ficha(inicial());
		ficha.updateSource({ pericias: { acro: { treinado: true, atributo: "des" } } });
		const p = ficha._source.pericias;
		checar("treinar Acrobacia marca treinado", p.acro.treinado === true);
		checar("treinar Acrobacia nao mexe no atributo", p.acro.atributo === "des", p.acro.atributo);
		checar("treinar Acrobacia nao mexe nas outras", p.conh.atributo === "int", p.conh.atributo);
	}

	// 2. Trocar o atributo de uma pericia de proposito.
	{
		const ficha = new Ficha(inicial());
		ficha.updateSource({ pericias: { acro: { atributo: "car" } } });
		const p = ficha._source.pericias;
		checar("troca deliberada de atributo funciona", p.acro.atributo === "car", p.acro.atributo);
		checar("troca deliberada nao arrasta as outras", p.perc.atributo === "sab", p.perc.atributo);
	}

	// 3. Valor invalido: tem de ser recusado com um erro que diga QUAL campo
	//    esta errado. Sem o patch sai "ModelValidationError is not a
	//    constructor" - uma classe que o Foundry 13 removeu - e a causa some.
	//
	//    Limite conhecido, herdado do sistema e nao introduzido aqui: o
	//    `MappingField` nao reimplementa `_updateDiff`, entao a recusa acontece
	//    ao reconstruir o modelo, depois de `_source` ja ter sido tocado. O
	//    caminho normal da ficha nunca produz valor invalido - o <select> so
	//    oferece os seis atributos - e o guarda de `preUpdateActor` cobre o
	//    resto.
	{
		const ficha = new Ficha(inicial());
		let erro = null;
		try {
			ficha.updateSource({ pericias: { acro: { atributo: "banana" } } });
		} catch (e) {
			erro = e;
		}
		const msg = erro?.message ?? "";
		checar("atributo invalido e recusado", erro !== null);
		checar("erro nao cita a classe removida do v13", !msg.includes("is not a constructor"), msg.slice(0, 60));
		checar("erro aponta o campo culpado", msg.includes("atributo"), msg.slice(0, 60));
	}

	// 4. Criar uma pericia customizada: a chave nao existe na origem, entao
	//    aqui o preenchimento com os valores iniciais e o comportamento certo.
	{
		const ficha = new Ficha(inicial());
		ficha.updateSource({ pericias: { ofi1: { atributo: "int", treinado: true, label: "Ofício: Ferreiro" } } });
		const nova = ficha._source.pericias.ofi1;
		checar("pericia customizada nasce completa", nova.atributo === "int" && nova.label === "Ofício: Ferreiro" && nova.value === 0);
	}
}

const antes = rodar("ANTES (MappingField do sistema, sem _state)");
aplicarPatch();
const depois = rodar("DEPOIS (com o patch da camada homebrew)");

cenariosDeUso();
console.log(`\nCasos de uso, ja com o patch aplicado:`);
for (const c of casos) {
	console.log(`  ${c.ok ? "ok  " : "FALHA"} ${c.rotulo}${c.ok || !c.detalhe ? "" : ` (obtido: ${c.detalhe})`}`);
}

const falhas = casos.filter((c) => !c.ok).length;
if (antes > 0 && depois === 0 && falhas === 0) {
	console.log(`\nOK: o bug e reproduzivel (${antes} pericias), o patch o elimina e os ${casos.length} casos de uso passam.`);
} else {
	console.error(`\nFALHOU: antes=${antes} (esperado > 0), depois=${depois} (esperado 0), casos com falha=${falhas}.`);
	process.exitCode = 1;
}
