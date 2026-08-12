# Camada Homebrew

Conteúdo e mecânicas próprias, adicionados **sem editar nada que seja gerado**.
O `tormenta20.mjs` e o `tormenta20.css` são build do projeto original
(`gitlab.com/vizael/Tormenta20`) e permanecem intocados.

## Como funciona

O `system.json` aceita vários `esmodules` e `styles`. A camada homebrew entra
como um segundo arquivo em cada lista, carregado **depois** do sistema:

| Arquivo | Papel |
| --- | --- |
| `homebrew/homebrew.mjs` | Mecânica e automação, via hooks |
| `homebrew/homebrew.css` | Ajustes visuais (prefixo `hb-`) |
| `homebrew/packs/<nome>/*.yml` | Conteúdo, em YAML versionável |

## Fluxo de trabalho

```bash
npm run pack              # homebrew/packs/*  ->  packs/homebrew-*  (LevelDB)
npm run unpack            # packs/*  ->  _reference/*  (consulta, não versionado)
npm run unpack classes    # só um pack
```

A fonte de verdade do seu conteúdo é o **YAML** em `homebrew/packs/`. O LevelDB
em `packs/homebrew-*` é gerado — nunca edite à mão. Rode `npm run pack` e
reinicie o mundo no Foundry para ver o resultado.

Use `npm run unpack` para ler o conteúdo oficial e copiar o formato exato de um
item antes de escrever o seu. A extração trabalha sobre uma cópia, então os
packs oficiais nunca são alterados.

## Fadiga da Visão

Recurso da classe Vidente Carmesim de Rusivald, implementado em `homebrew.mjs`.
O contador vive numa flag do ator (`flags.tormenta20-homebrew.fadigaVisao`) e é
traduzido em penalidade real nas rolagens.

**Como acumula.** A barra aparece na ficha entre PM e Defesa, só para quem tem
a classe. O botão de Olhos liga o acúmulo: a cada rodada de combate com os
Olhos ativos, +1 ponto — ou a cada 2 rodadas se o personagem tiver *Fôlego do
Predador*. Os botões `+` e `−` permitem ajuste manual (Olho Profético +2,
Ruptura do Destino +3, Foco Carmesim −1).

**Limiares.** Vale apenas o mais alto; eles não somam.

| Fadiga | Efeito | Como é aplicado |
| --- | --- | --- |
| 4 | −1 em testes mentais | `modificadores.atributos.mentais` e `pericias.atr.int`/`sab`/`car` |
| 6 | −2 em testes gerais | `modificadores.atributos.geral` e `pericias.geral` |
| 9 | Confuso | condição nativa |
| 11 | Exausto | condição nativa |

As penalidades entram por um ActiveEffect gerenciado, recriado a cada mudança.
As chaves são as que o próprio sistema documenta como presets de efeito, e
todas são `ArrayField` de String — o modo ADD empurra a fórmula no array, que é
o mesmo mecanismo das condições nativas como Debilitado.

**Como zera.** Só no descanso. `Actor#descanso` é envolvido (não reescrito), de
modo que a lógica do sistema continua valendo e só acrescentamos o reset.
Desligar os Olhos interrompe o acúmulo mas não alivia o que já foi acumulado.

**Por que não usamos `toggleStatusEffect`.** Tanto ele quanto
`ActiveEffect.fromStatusEffect` fazem `CONFIG.statusEffects[id]`, contando com
o Proxy do core, que aceita acesso por chave. O sistema substitui esse Proxy
por um array simples (`Object.values(T20Conditions)`), onde o acesso por chave
devolve `undefined` e as duas APIs lançam erro. Por isso as condições são
criadas a partir de `CONFIG.T20.conditions`, um objeto indexado por id — a via
que o próprio sistema usa internamente.

## Duas armadilhas do sistema

**1. Campos novos em `system.*` não persistem.** Os DataModels são estritos: o
`ClassData` (`tormenta20.mjs:18053`) define exatamente `niveis`, `pvPorNivel`,
`pmPorNivel`, `pericias` e `inicial`. Qualquer chave desconhecida é descartada
ao salvar. Para dados próprios use flags, via os helpers `getHB`/`setHB` do
`homebrew.mjs` — flags não passam pela validação e persistem.

**2. Campos com `choices` rejeitam valores novos.** O `poder.tipo`
(`tormenta20.mjs:17950`) é validado contra `CONFIG.T20.powerType`. Um tipo de
poder inédito precisa estender esse CONFIG no hook `init` antes de existir um
item que o use, senão o item não salva.

## Fins de linha

O `.gitattributes` marca `packs/**` como binário. Isso não é opcional: com
`core.autocrlf=true` (padrão no Windows) o git converte o `\n` final do arquivo
`CURRENT` do LevelDB em `\r\n`, o pack passa a apontar para um `MANIFEST-000006\r`
inexistente, e **nenhum compêndio abre**. Foi exatamente o estado em que este
repositório se encontrava.
