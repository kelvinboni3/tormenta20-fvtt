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

## PV e PM da classe

A regra da mesa é **PV 16 + CON no nível 1, depois 5 + CON por nível**, e
**PM 5 + SAB por nível**. Nenhuma das duas sai só com os campos do item.

O sistema calcula assim (`tormenta20.mjs:16911`), por nível de cada classe:

- **PV**: soma `pvPorNivel` e **acrescenta CON automaticamente**. Se a classe
  estiver marcada como `inicial`, o nível 1 vale `4 × pvPorNivel`.
- **PM**: soma só `pmPorNivel`. **Nenhum atributo é somado.**

Duas consequências:

**O ajuste de PV depende da caixa "Classe Inicial".** Com `pvPorNivel: 5`, o
alvo `16 + CON + (N−1)·(5 + CON)` é igual a `5N + 11 + N·CON`. O que o sistema
produz depende da caixa:

| Caixa | Sistema produz | Ajuste necessário |
| --- | --- | --- |
| marcada | `5N + 15 + N·CON` | **−4** |
| desmarcada | `5N + N·CON` | **+11** |

Em ambos os casos é uma constante, válida em todos os níveis — mas são
constantes **diferentes**. Por isso o ajuste não é um efeito estático no item
de classe: `sincronizarPV` em `homebrew.mjs` mantém um efeito no ator com o
valor certo, reagindo à caixa.

Ele roda nos hooks de item **e** ao abrir a ficha. A ficha é a rede de
segurança: ao desmarcar "Classe Inicial" num personagem de classe única,
`ItemT20._onUpdate` (`tormenta20.mjs:6732`) tenta promover outra classe, não
encontra nenhuma e lança `TypeError` — o que aborta a cadeia antes do Foundry
disparar `updateItem`. É um defeito do sistema, não da camada homebrew.

As escritas passam pela mesma fila da Fadiga. Sem isso os dois gatilhos rodam
juntos, ambos veem "não existe efeito" e criam um cada, aplicando o ajuste em
dobro — observado em teste, com PV 28 no lugar de 17.

**SAB por nível precisa de `bonus.nivel`.** Marcar o atributo em
`attributes.pm.atributos` somaria SAB **uma vez** no total, não por nível.
Já `bonus.nivel` entra dentro do laço (`tormenta20.mjs:16934`), então `@sab`
ali dá exatamente 5 + SAB por nível.

O ajuste de PM é estático e vive num ActiveEffect `transfer: true` dentro do
item de classe, porque não depende de mais nada. Conferido em jogo do nível 1
ao 20, com CON negativo inclusive, e com a caixa "Classe Inicial" nos dois
estados.

## Bug do sistema: perícias viram Força ao editar a ficha

**Causa, reproduzida.** A ficha em modo de edição renderiza um `<select>` por
perícia (`templates/actor/parts/lists/list-skills.hbs`). Em algum re-render
esses selects perdem o valor e voltam ao primeiro do CONFIG — `for`. A partir
daí, **qualquer** alteração na ficha (mudar um atributo, por exemplo) envia o
formulário inteiro e grava Força em cerca de 20 das 34 perícias, arruinando
todas as rolagens de perícia.

Reproduzido num ator recém-criado, sem nenhum item e sem a classe Vidente —
portanto é defeito do sistema, não desta camada.

**Contenção.** Um `preUpdateActor` em `homebrew.mjs` descarta escritas em massa
no campo `atributo`: a partir de 5 perícias alteradas de uma vez, os valores
são repostos ao padrão do CONFIG. Trocar o atributo de uma perícia continua
funcionando normalmente — ninguém troca cinco na mesma ação, mas a ficha
bugada troca vinte.

Como `tormenta20.mjs` é um bundle gerado, consertar lá seria perdido na próxima
atualização do sistema. O guarda vive na camada homebrew e sobrevive.

## Reparo: perícias todas com Força

Se uma ficha aparecer com **todas as perícias usando FOR**, o campo `atributo`
de cada perícia foi gravado errado — e isso afeta as rolagens de verdade, não
só a exibição. Conserto:

```js
game.tormenta20Homebrew.repararPericias(game.actors.getName("Nome"));
```

A referência correta é `CONFIG.T20.pericias[chave].abl` — note que no CONFIG a
chave é `abl` e no ator é `atributo`. O próprio sistema traz uma migração para
esse mesmo campo (`tormenta20.mjs:19077`), o que sugere ser um defeito
conhecido dele. Não foi possível reproduzir a causa: atores criados agora saem
corretos, e nem a camada homebrew nem a importação da classe alteram o campo.

Cuidado: a função repõe o padrão. Se você tiver trocado o atributo de alguma
perícia de propósito, essa troca também será desfeita.

## O que os poderes automatizam

A maioria dos 34 poderes é **texto descritivo**, de propósito: só vira efeito o
que tem um número fixo e permanente. Bônus condicionais ("contra o alvo
Marcado", "contra desprevenidos") não são expressáveis como efeito estático —
aplicá-los sempre seria pior que não aplicar.

| Poder | Automatizado | Como |
| --- | --- | --- |
| Olhos do Julgamento | +2 Percepção/Intuição/Reflexos, SAB na Defesa | efeito ligado ao botão da ficha |
| Olho Desperto | +2 Vontade | efeito no item |
| Fluxo Precognitivo | +5 Iniciativa | efeito no item |
| Fôlego do Predador | fadiga a cada 2 rodadas | lógica em `homebrew.mjs` |

O botão **Olhos** na barra de Fadiga liga e desliga o efeito. Ele aparece na
aba Efeitos do ator enquanto ativo, e some ao desligar.

O que fica na mão: Marca do Julgamento e Precisão Cirúrgica (dependem de alvo),
Véu de Espinhos e Ritmo do Duelista (reações), Golpe Previsto e Predador
Silencioso (condicionais), Olhar Implacável (ignorar esquiva não tem chave), e
os poderes narrativos como Visão Espiritual e Eco de Roswa.

Nem tudo dos Olhos é numérico: detectar ilusões, presenças espirituais e
intenções hostis, e ignorar camuflagem leve, continuam sendo leitura de mesa.

## Fadiga da Visão

Recurso da classe Vidente Carmesim de Rusivald, implementado em `homebrew.mjs`.
O contador vive numa flag do ator (`flags.tormenta20.homebrew.fadigaVisao`) e é
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

**Por que o escopo das flags é `tormenta20`.** `Document#getFlag` valida o
escopo e só aceita `core`, o id do sistema ativo, ou o id de um **módulo**
ativo. Um escopo próprio como `tormenta20-homebrew` faz a chamada lançar
`Flag scope ... is not valid or not currently active`, porque não existe módulo
com esse id — este código é parte do sistema. Por isso tudo fica em
`flags.tormenta20.homebrew.*`, aninhado para não colidir com o que o sistema
grava.

**Por que as escritas são enfileiradas.** Mudar a fadiga é um ciclo
ler-modificar-gravar que dispara várias operações assíncronas (gravar a flag,
apagar o efeito antigo, criar o novo). Sem serializar por ator, duas alterações
próximas — rodadas passando rápido, ou cliques repetidos — leem o mesmo valor
inicial e uma sobrescreve a outra, perdendo um incremento. Isso foi observado
em teste: 5 rodadas contadas produziam 1 ponto em vez de 2.

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
