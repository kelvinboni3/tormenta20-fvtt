# Prompt para converter uma classe homebrew

Copie **todo o conteúdo abaixo da linha** para o Claude Desktop e cole a sua
classe no final, onde está indicado.

---

Você vai converter uma classe homebrew de Tormenta20 para o formato YAML de
compêndio do sistema `tormenta20` do Foundry VTT. Siga o schema abaixo à risca:
ele é extraído do sistema real, e campos inventados são silenciosamente
descartados pelo Foundry ao salvar.

## Regra estrutural mais importante

Uma classe vira **vários documentos**, não um só:

1. **Um item `type: classe`** — só os números da classe (PV/PM por nível,
   perícias, descrição). Ele **não** contém as habilidades.
2. **Um item `type: poder` para cada habilidade de classe**, com
   `tipo: classe` e `subtipo: <Nome exato da Classe>`. É o `subtipo` que
   amarra a habilidade à classe.

Ou seja: uma classe com 8 habilidades produz 9 arquivos.

## Schema do item de classe

```yaml
_id: <16 caracteres, apenas A-Z a-z 0-9, único>
name: <Nome da Classe>
type: classe
img: icons/svg/book.svg
effects: []
folder: null
sort: 0
flags: {}
system:
  description:
    value: <HTML. Descrição da classe.>
    unidentified: ''
  source: <origem, ex: "Homebrew da mesa">
  niveis: 1
  pvPorNivel: <número inteiro, PV ganhos por nível após o 1º>
  pmPorNivel: <número inteiro, PM ganhos por nível>
  inicial: false
  rolls: []
  origin: ''
  tags: []
  chatFlavor: ''
  chatGif: ''
  pericias:
    numero: <quantas perícias à escolha>
    inatas: <texto livre das perícias obrigatórias e opções>
ownership:
  default: 0
_key: '!items!<mesmo valor de _id>'
```

## Schema do item de habilidade

```yaml
_id: <16 caracteres, único>
name: <Nome da Habilidade>
type: poder
img: icons/svg/upgrade.svg
effects: []
folder: null
sort: 0
flags: {}
system:
  description:
    value: <HTML. Texto da habilidade.>
    chat: ''
    unidentified: ''
  source: <origem>
  ativacao:
    execucao: <ver lista abaixo; '' se for passiva sem ação>
    custo: <custo em PM, 0 se não gastar>
    qtd: ''
    condicao: ''
    special: ''
  duracao:
    value: 0
    units: <ver lista abaixo; '' se não se aplica>
    special: ''
  target:
    value: null
    width: null
    units: ''
    type: ''
  range:
    value: null
    units: ''
  consume:
    type: ''
    target: ''
    amount: null
    mpMultiplier: false
  efeito: ''
  alcance: <ver lista abaixo; 'none' se não se aplica>
  alvo: ''
  area: ''
  resistencia:
    pericia: ''
    atributo: <for|des|con|int|sab|car>
    bonus: 0
    txt: ''
  rolls: []
  tipo: classe
  subtipo: <Nome exato da Classe, idêntico ao campo name do item de classe>
  chatFlavor: ''
  origin: ''
  tags: []
  chatGif: ''
ownership:
  default: 0
_key: '!items!<mesmo valor de _id>'
```

## Valores permitidos

Campos abaixo são validados. Um valor fora da lista impede o item de salvar.

**`ativacao.execucao`** — `passive`, `action`, `move`, `full`, `reaction`,
`free`, `minute`, `hour`, `day`, `special`

**`duracao.units`** — `inst`, `scene`, `turn`, `round`, `sust`, `minute`,
`hour`, `day`, `month`, `year`, `perm`, `special`

**`alcance`** — `none`, `self`, `touch`, `short`, `medium`, `long`, `spec`,
`any`

**`resistencia.atributo`** — `for`, `des`, `con`, `int`, `sab`, `car`

**`tipo`** (em poderes) — `classe` para habilidade de classe. Os outros valores
existentes são `ability`, `concedido`, `geral`, `origem`, `racial`,
`distincao`, `complicacao`. **Não invente valores novos.**

## Regras de formatação

- `_id` tem exatamente 16 caracteres alfanuméricos e é único entre todos os
  documentos. `_key` sempre repete o `_id` no formato `'!items!<_id>'`.
- `description.value` é **HTML**, não markdown. Use `<p>`, `<strong>`, `<ul>`.
  Acentos podem ir literais (`ç`, `ã`) — não é preciso escapar como entidade.
- Não adicione chaves que não estejam no schema acima. O sistema usa DataModels
  estritos e descarta qualquer campo desconhecido ao salvar. Se um dado da sua
  classe não couber em nenhum campo, coloque-o no texto da descrição e me avise
  no final da resposta, em vez de criar um campo novo.
- `folder: null` sempre — o compêndio não tem pastas.
- Mantenha os campos na ordem em que aparecem no schema.

## Exemplo real do sistema

Habilidade "Ímpeto", do Bárbaro, exatamente como está no compêndio oficial:

```yaml
_id: CQUJv0Bjcw5nxKTS
name: Ímpeto (Bárbaro)
type: poder
img: systems/tormenta20/icons/classes/barbaro.webp
effects: []
folder: null
sort: 0
flags: {}
system:
  description:
    value: <p>Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.</p>
    chat: ''
    unidentified: ''
  source: Tormenta20 — Edição Jogo do Ano, p. 42
  ativacao:
    execucao: free
    custo: 1
    qtd: ''
    condicao: ''
    special: ''
  duracao:
    value: 0
    units: ''
    special: ''
  target:
    value: null
    width: null
    units: ''
    type: ''
  range:
    value: null
    units: ''
  consume:
    type: ''
    target: ''
    amount: null
    mpMultiplier: false
  efeito: ''
  alcance: none
  alvo: ''
  area: ''
  resistencia:
    pericia: ''
    atributo: sab
    bonus: 0
    txt: ''
  rolls: []
  tipo: classe
  subtipo: Bárbaro
  chatFlavor: ''
  origin: ''
  tags: []
  chatGif: ''
ownership:
  default: 0
_key: '!items!CQUJv0Bjcw5nxKTS'
```

## Formato da sua resposta

Para cada documento, produza um bloco de código YAML separado, precedido pelo
nome do arquivo. Use o padrão `Nome_Do_Documento_<_id>.yml`, trocando espaços e
acentos por `_`:

    ### Minha_Classe_a1B2c3D4e5F6g7H8.yml
    ```yaml
    ...
    ```

No final, liste em uma tabela: nome, tipo de documento e `_id`, para eu
conferir que não há `_id` repetido. E me diga explicitamente se algum dado da
minha classe não coube no schema.

## Minha classe

<!-- COLE AQUI o texto da sua classe: PV/PM por nível, perícias treinadas,
     e a lista de habilidades com nome, nível e descrição. -->
