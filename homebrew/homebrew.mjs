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
 * Le um dado homebrew de um documento.
 * @param {Document} doc    Ator ou item.
 * @param {string} key      Chave dentro do namespace homebrew.
 * @param {*} [fallback]    Valor devolvido quando a flag nao existe.
 * @returns {*}
 */
export function getHB(doc, key, fallback = null) {
	return doc?.getFlag(NS, key) ?? fallback;
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
	return doc.setFlag(NS, key, value);
}

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
	console.log(`${NS} | pronto`);
});
