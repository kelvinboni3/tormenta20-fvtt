/**
 * Correcao do `MappingField` do sistema Tormenta20.
 *
 * Fica num arquivo proprio, e nao dentro de homebrew.mjs, porque
 * `tools/teste-pericias.mjs` importa esta funcao para exercitar o patch de
 * verdade fora do Foundry. Nada aqui toca em `game`, `CONFIG` ou `Hooks`: os
 * unicos globais usados sao os de `foundry.*`, e so na hora da chamada.
 */

/**
 * Conserta o `MappingField` do sistema, que e quem guarda `system.pericias`.
 *
 * O QUE ACONTECIA
 * Abrir o modo de edicao da ficha (a engrenagem ao lado de "Perícias") faz o
 * sistema enviar o formulario inteiro. Em modo de leitura o formulario so tem
 * dois campos por pericia - `treinado` e `condi` - e nenhum `atributo`. Mesmo
 * assim, todas as 34 pericias voltavam para Forca.
 *
 * POR QUE
 * O Foundry 14 acrescentou um terceiro argumento, `_state`, a
 * `DataField#clean` e a `DataField#_cleanType`. E por `_state.source` - a copia
 * atual do dado gravado - que o `SchemaField` sabe se a escrita e parcial:
 *
 *     const cleanField = (name in data) || !options.partial || !_state.source;
 *
 * Sem `_state.source` a condicao da sempre verdadeira e TODO campo ausente e
 * preenchido com o valor inicial do schema. Para `SkillData` o inicial de
 * `atributo` e "for" (tormenta20.mjs, `SkillData.defineSchema`), entao uma
 * escrita que sequer mencionava `atributo` reescrevia as 34 pericias em Forca.
 *
 * O `MappingField` do sistema (tormenta20.mjs, `_cleanType`) foi escrito para a
 * v11/v12 e chama `this.model.clean(v, options)` com dois argumentos - o
 * `_state` cai no chao. O `TypedObjectField` do proprio Foundry, que faz o mesmo
 * papel, propaga `{..._state, source: _state.source?.[key]}`; e exatamente isso
 * que repomos aqui.
 *
 * Efeito colateral bem-vindo: `treinado` volta a ser gravado como booleano. Sem
 * a limpeza correta, o `<input type="hidden">` da ficha gravava as strings
 * "true"/"false" direto no banco.
 *
 * Este patch e a correcao de verdade. O guarda de `preUpdateActor` em
 * homebrew.mjs continua como rede de seguranca para fichas que ja abriram a
 * sessao com dado ruim e para qualquer outro caminho de escrita em massa.
 *
 * Coberto por `npm run teste-pericias`.
 *
 * @param {Function} [MappingField]  A classe a corrigir. O padrao e a do sistema
 *                                   carregado; o teste passa a sua propria copia.
 * @returns {boolean}  Se o patch esta em vigor.
 */
export function corrigirMappingField(MappingField = globalThis.tormenta20?.data?.fields?.MappingField) {
	if (!MappingField) {
		console.error("tormenta20-homebrew | MappingField nao encontrado; a correcao das pericias nao foi aplicada");
		return false;
	}
	if (MappingField.prototype._cleanType?.hbCorrigido) return true;

	/**
	 * @param {object} value                Dado candidato do mapa.
	 * @param {object} options              Opcoes de limpeza do Foundry.
	 * @param {object} [_state]             Estado da recursao - o que faltava.
	 * @returns {object}
	 */
	function _cleanType(value, options, _state = {}) {
		for (const chave of Object.keys(value)) {
			// Chaves "-=x" sao pedidos de remocao e nao devem ser limpas.
			if (chave.startsWith("-=")) continue;
			const interno = { ..._state, source: _state.source?.[chave] };

			// `model` precisa cair junto. Quando a chave e nova, `source` fica
			// indefinido de proposito - e assim que o SchemaField sabe que deve
			// preencher tudo. So que `DataModel._preCleanData` faz
			// `_state.source ??= _state.model?._source` e, se o model continuar
			// ali, o source do ATOR INTEIRO entra no lugar: a limpeza volta a se
			// achar parcial e a pericia nova nasce sem `st`, `value` e `condi`,
			// o que derruba a validacao. O `ArrayField` do proprio Foundry zera o
			// model pelo mesmo motivo.
			interno.model = _state.model?._getInnerModel?.(this, { value: value[chave], key: chave }, options) ?? null;

			value[chave] = this.model.clean(value[chave], options, interno);
		}
		return value;
	}
	_cleanType.hbCorrigido = true;
	MappingField.prototype._cleanType = _cleanType;

	// A validacao tinha de vir junto. O `_validateType` original monta um
	// `foundry.data.fields.ModelValidationError`, classe removida no Foundry 13.
	// Sempre que alguma pericia era de fato invalida, a montagem do relato
	// estourava e o erro que chegava ao usuario virava
	// "ModelValidationError is not a constructor" - a escrita era barrada, mas
	// sem dizer qual campo estava errado. Abaixo, a mesma logica do
	// `TypedObjectField#_validateRecursive` do Foundry, que e o equivalente
	// oficial deste campo, com relato de falha por chave.
	const { DataModelValidationFailure } = foundry.data.validation;
	const { SchemaField } = foundry.data.fields;
	const { ForcedDeletion } = foundry.data.operators;
	if (!MappingField.prototype._validateType?.hbCorrigido) {
		function _validateType(value, options = {}) {
			if (foundry.utils.getType(value) !== "Object") throw new Error("must be an Object");
			options.source = options.source || value;
			const falha = new DataModelValidationFailure("MappingField#_validateType", {
				fieldPath: this.fieldPath,
				unresolved: false
			});
			const opcoes = { ...options, strict: false };
			for (const [chave, v] of Object.entries(value)) {
				if (chave.startsWith("-=")) continue;
				if (v instanceof ForcedDeletion) continue; // Remover chave e legitimo.
				const erroDoItem = this.model.validate(v, opcoes);
				if (!erroDoItem) continue;
				falha.fields[chave] = erroDoItem;
				SchemaField._handleValidationFailure(this.model, value, chave, falha, erroDoItem, options);
			}
			if (!falha.empty) throw falha;
		}
		_validateType.hbCorrigido = true;
		MappingField.prototype._validateType = _validateType;
	}

	console.log("tormenta20-homebrew | MappingField corrigido: escritas parciais em system.pericias preservadas");
	return true;
}
