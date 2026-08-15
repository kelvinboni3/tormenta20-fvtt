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
| `homebrew/prompts/` | Prompts para outra IA normalizar conteúdo cru antes de virar YAML |

## Fluxo de trabalho

```bash
npm run pack              # homebrew/packs/*  ->  packs/homebrew-*  (LevelDB)
npm run unpack            # packs/*  ->  _reference/*  (consulta, não versionado)
npm run unpack classes    # só um pack
```

A fonte de verdade do seu conteúdo é o **YAML** em `homebrew/packs/`. O LevelDB
em `packs/homebrew-*` é gerado — nunca edite à mão. Rode `npm run pack` e
reinicie o mundo no Foundry para ver o resultado.

O Foundry mantém o LevelDB aberto enquanto o mundo está ativo, então
`npm run pack` falha com erro de arquivo em uso. Volte à tela de setup (ou
encerre o servidor) antes de compilar.

### Pastas por classe

Os poderes ficam em uma pasta por classe dentro do compêndio. Uma pasta é um
documento como qualquer outro, com `_key: '!folders!<id>'` — veja
`homebrew/packs/poderes/_pasta_Vidente_hbFolderVidente1.yml`.

Para acrescentar outra classe:

1. Copie o arquivo da pasta, troque o `name` e gere um `_id` novo de 16
   caracteres alfanuméricos (o `_key` precisa repetir esse `_id`).
2. Nos poderes da classe nova, use `folder: <novo _id>`.

O `npm run validar` confere que todo `folder` aponta para uma pasta existente
no mesmo pack — uma referência quebrada faz o documento sumir da árvore no
Foundry sem erro visível.

### Ícones

Os ícones vêm da biblioteca do **próprio Foundry** (`icons/magic/perception`,
`icons/magic/nature`, `icons/magic/time`…), então nada de arte precisa ser
distribuído junto e os caminhos funcionam em qualquer instalação. Os efeitos
usam o mesmo ícone do item que os concede, para serem reconhecidos de imediato
na aba Efeitos do ator.

Se um caminho estiver errado o Foundry mostra um quadrado vazio, sem erro. Vale
conferir que o arquivo existe em
`<instalação do Foundry>/resources/app/public/icons/…` antes de usar.

Use `npm run unpack` para ler o conteúdo oficial e copiar o formato exato de um
item antes de escrever o seu. A extração trabalha sobre uma cópia, então os
packs oficiais nunca são alterados.

## Raças

O compêndio **Raças (Homebrew)** (`homebrew-racas`) vem de
`homebrew/packs/racas/`, pelo mesmo `npm run pack`.

Uma raça não guarda as próprias habilidades: ela aponta para elas por UUID, em
`system.grants[].choices[].uuid`. As habilidades raciais são itens `type: poder`
com `tipo: racial`, e vivem em `homebrew/packs/poderes/` junto com as demais —
com uma pasta própria, como as classes têm. O UUID de uma delas fica
`Compendium.tormenta20.homebrew-poderes.Item.<_id>`.

Nas 18 raças oficiais, todo `grants` é um bloco único com `type: multi`
listando todas as habilidades — ou seja, o personagem recebe todas. O schema
também aceita `type: single`, mas nenhuma raça oficial usa, então esse caminho
não está testado em jogo.

`npm run validar` confere os seis atributos (o `RaceData` exige todos, com
mínimo −5), o `tamanho` contra `min/peq/med/gra/eno/col`, o `movement.walk`, e
que todo UUID de grant apontando para um pack homebrew exista de fato no YAML.
Um UUID quebrado não gera erro no Foundry: a habilidade simplesmente não
aparece na hora de criar o personagem.

## PV e PM da classe (Vidente)

> As contas abaixo são as do Vidente. A fórmula geral, válida para qualquer
> classe homebrew, está no comentário de `AJUSTE_PV` em `homebrew.mjs`; veja
> também [Classe Treinador](#classe-treinador), que cai em ajuste zero.

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

## Classe Treinador

Segunda classe homebrew. Vive em `homebrew/packs/classes/` e seus 27 poderes
em `homebrew/packs/poderes/`, na pasta `hbFolderTreinad1`:

| Grupo | Quantos | Pasta | Nome no compêndio |
| --- | --- | --- | --- |
| Habilidades de nível | 6 | Treinador | `Direcionar (Nível 1)`, `Melhor Amigo (Nível 1)`, `Domar Criatura (Nível 2)`, `Treino Especializado (Nível 5)`, `Sincronia de Combate (Nível 6)`, `Sincronia Perfeita (Nível 20)` |
| Poderes de Treinador | 21 | Treinador | `<Nome> (Poder de Treinador)` |
| Truques do Melhor Amigo | 22 | Truques do Melhor Amigo | `<Nome> (Truque)` |

**PV e PM saem de graça.** Ao contrário do Vidente, o Treinador não precisa de
nenhum ActiveEffect no item de classe:

- **PM 4 por nível, sem atributo.** É exatamente o que o sistema faz com
  `pmPorNivel: 4`. O Vidente precisava de `bonus.nivel` só porque somava SAB.
- **PV 12 + CON, depois 3 + CON.** Com `pvPorNivel: 3` e a caixa "Classe
  Inicial" **marcada**, o sistema produz `3N + 9 + N·CON`, que é o alvo exato —
  porque 12 é justamente `4 × 3`. Ajuste zero.

Com a caixa desmarcada faltam +9, e disso cuida `sincronizarPV`. A tabela
`AJUSTE_PV` em `homebrew.mjs` agora guarda uma linha por classe, com a fórmula
geral (`P1 − 4p` marcada, `P1 − p` desmarcada) derivada no comentário. Ajuste
zero não cria efeito nenhum.

**Nenhum poder virou ActiveEffect, e isso é proposital.** Os poderes do
Treinador quase todos alteram a ficha do *melhor amigo*, não a dele. Dos que
sobram, `Aumento de Atributo` depende de qual atributo o jogador escolheu,
`Comandos Distantes` promove uma categoria de alcance (que não é chave de
efeito) e `Coração Grande` mexe no limite de parceiros (que não existe como
campo). Os três ficam como texto, com o motivo anotado no próprio YAML.

### Truques: os únicos que automatizam

Os truques ficam na ficha do **melhor amigo**, não na do treinador. Por isso —
ao contrário dos Poderes de Treinador — vários viram ActiveEffect de verdade:
o item entra na ficha do bicho e o efeito passa para ele.

| Truque | Chave | Modo |
| --- | --- | --- |
| Alado | `system.attributes.movement.fly` | OVERRIDE 15 |
| Amigão | `system.atributos.for.bonus` + `system.tracos.tamanho` | ADD 1 / OVERRIDE `eno` |
| Amigo Feroz | `system.modificadores.pericias.ataque` | ADD 2 |
| Anatomia Humanoide | `system.atributos.int.bonus` | ADD 2 |
| Redução de Dano | `system.tracos.resistencias.dano.bonus` | ADD 5 |
| Veloz | `system.attributes.defesa.bonus` + `system.attributes.movement.walk` | ADD 2 / ADD 3 |

Os outros 16 ficam como texto, e o motivo está escrito no topo de cada YAML.
Em resumo: escolha do jogador (Condicionamento Especial, Magia Inata), bônus
condicional (Táticas de Matilha só flanqueando, Bote só em investida), ou valor
que depende do nível do treinador (Treinamento Defensivo, Treinamento Marcial)
— esses três últimos a camada homebrew recalcula.

**Deslocamento não é um número.** Cada tipo é um `SchemaField`
`{base: Number, bonus: [String]}` (`MovementData`, `tormenta20.mjs:18230`).
Apontar um efeito para `system.attributes.movement.walk` não aplica nada e
**não gera erro** — o valor simplesmente não muda. As chaves certas terminam em
`.base` (para OVERRIDE) ou `.bonus` (para ADD). Isso custou uma rodada de teste
em jogo antes de aparecer.

Três armadilhas que valem registro:

- **Amigo Feroz** dá +2 "com armas naturais", e o bicho só tem armas naturais —
  exceto se pegar **Anatomia Humanoide**, que lhe dá proficiência com armas
  comuns. Nessa combinação o +2 se aplica também a elas, indevidamente.
- **Redução de Dano** (RD 5) e a RD do poder **Treino Intensivo** (5/10/15) são
  fontes diferentes. No T20 vale a maior, não a soma — o efeito não sabe disso.
  Confirmado em jogo: com os dois, a ficha mostrou RD 10 no 7º nível, quando o
  correto seria 5.
- A ficha de Personagem do Mestre **mostra a Defesa base, não o total**: a caixa
  "Defesa" é um input ligado a `defesa.base`. Num teste, ela exibia 10 enquanto
  o valor real era 24. É comportamento do sistema, não da camada — e é por isso
  que o painel do Melhor Amigo mostra o total.

## Ficha do Melhor Amigo

O melhor amigo é um ator **`simple`** (Personagem do Mestre) próprio, ligado à
ficha do treinador, que é um ator **`character`** normal.

### Como ligar

Clique com o botão direito no ator, na barra lateral de Atores →
**Marcar como Melhor Amigo**. Depois escolha o treinador no seletor que aparece
no painel da ficha dele.

A ativação fica no menu de contexto, e não na ficha, de propósito: assim as
fichas de Personagem do Mestre que nada têm a ver com Treinador continuam
exatamente como são — nenhum elemento a mais, nem escondido.

### O que é calculado

O painel na ficha do bicho mostra, e a camada grava:

| Valor | Conta |
| --- | --- |
| Nível | nível de Treinador, ou nível de personagem com **Treinador Eclético** |
| PV máximo | `16 + CON + (N−1)(4 + CON)`, mais `4×N` com **Treino Intensivo** |
| Defesa | `CAR do treinador + metade do nível` — nível cheio com **Treinamento Defensivo** |
| RD | 5 / 10 / 15 nos níveis 5 / 11 / 17, só com **Treino Intensivo** |
| Marcial | `1 + patamar` com **Treinamento Marcial** (+2 iniciante … +5 lenda) |
| Truques | `2 + ⌊(N−1)/3⌋`, mais 1 no 5º e outro no 11º com Treino Intensivo, mais 1 por cópia de **Ensinar Truque** |

O painel na ficha do treinador traz a escolha de **Treino Especializado**, o
limite de parceiros (1 + Conquistar pelos Números + Coração Grande, que dobra no
11º) e a lista de marcos de nível, com o que já está liberado em negrito.

### Por que quase tudo vira número, e não fórmula

O ator `simple` **não tem nível**: o sistema apaga `attributes.nivel`, `treino`
e `cd` do schema quando o tipo é `simple` (`tormenta20.mjs:16256`). Logo
`@nivel` vale 1 e `@meionivel` vale 0 em qualquer fórmula avaliada na ficha do
bicho. Toda conta que dependa do nível precisa sair daqui já resolvida.

Isso tem um efeito colateral útil: `preparePVPM` (`tormenta20.mjs:16911`)
desiste logo no início quando não há nível, então o PV máximo do bicho **não é
calculado pelo sistema** e pode ser gravado direto. Defesa, RD e os bônus de
Treinamento Marcial não podem, porque o sistema os recalcula — esses vivem num
único ActiveEffect gerenciado (`Vínculo com o Treinador`), recriado sempre que
algum valor muda.

O PV máximo sobrescreve edição manual. É o comportamento pedido: o valor segue
o nível do treinador.

### Onde a escolha de Treino Especializado mora

Numa flag do treinador (`treinador.trilha`), preenchida pelo seletor do painel,
e não em dois itens separados no compêndio. O item `Treino Especializado
(Nível 5)` traz os dois caminhos no texto. Assim a escolha fica junto do resto
do estado e não depende de o jogador ter arrastado o item certo.

### O que ainda falta

O quadro **Mascote** não veio no material, e o poder de mesmo nome remete a
ele. A remissão ficou explícita na descrição; nada foi inventado.

Os itens 2.5 e 2.7 do levantamento pediam indicadores dos poderes de treinador
ligados ao bicho e das habilidades de nível **na ficha do treinador**. Os marcos
de nível entraram; a lista marcável de poderes não — os poderes já aparecem
como itens na ficha, e duplicá-los num painel criaria duas fontes de verdade.
Os que a camada precisa conhecer (Treinador Eclético, Ensinar Truque, Coração
Grande) são lidos direto dos itens.

## Classe Artífice do Sumiê

Terceira classe homebrew. O item de classe vive em `homebrew/packs/classes/` e
suas 72 **Fórmulas de Sumiê** em `homebrew/packs/poderes/`, divididas em quatro
pastas — uma por caminho:

| Caminho | Fórmulas | Pasta | O que faz |
| --- | --- | --- | --- |
| Bestiário | 19 | `hbFolderSumieBes` | invocações de criaturas de tinta |
| Caligrafia | 17 | `hbFolderSumieCal` | selos e kanji sobre um alvo |
| Paisagismo | 18 | `hbFolderSumiePai` | terreno pintado, em área |
| Herborizo | 18 | `hbFolderSumieHer` | cura e sustento |

Todas são `tipo: classe` com `subtipo: Artífice do Sumiê`, e o Tier entra no
nome (`Tigre de Tinta (Tier III)`).

**PM sai de graça, PV não.** Com `pmPorNivel: 5` e nenhum atributo somado, o
sistema já produz os 5 PM por nível que a classe pede. O PV precisa de ajuste:
com `pvPorNivel: 4`, o alvo `14 + CON` no 1º nível não é múltiplo de 4, então
sobram **2 PV** com a caixa "Classe Inicial" marcada e faltam **10** com ela
desmarcada. `AJUSTE_PV` em `homebrew.mjs` ganhou a linha, e `sincronizarPV`
cuida dos dois casos — mesma mecânica do Vidente.

**Perícias são `numero: 6`, não "6 + Int".** O `+Inteligência` é regra geral de
T20, aplicada pelo sistema a qualquer personagem, e não parte da classe. As
classes oficiais fazem igual: o Bardo, que também tem "6 + Int", grava 6.

### O que foi proposto, e por quê

O material de origem **não traz tabela de progressão por nível**, nem custo em
PM, execução, duração ou alcance de nenhuma das 72 fórmulas — ele lista apenas
nome, caminho, Tier e um resumo de função. Por decisão de mesa, esses campos
foram preenchidos com uma proposta em vez de ficarem vazios, para que os itens
sejam usáveis em jogo. **Nada disso é regra da fonte.**

A escada de Tier:

| Tier | Custo | Nível |
| --- | --- | --- |
| I | 1 PM | 1º |
| II | 2 PM | 5º |
| III | 3 PM | 9º |
| IV | 4 PM | 13º |
| V | 5 PM | 17º |

Execução, duração e alcance saem da natureza de cada caminho: Bestiário e
Caligrafia são ação padrão, cena, alcance curto; Paisagismo é alcance médio com
área preenchida, e vira ação completa nos Tiers IV–V, que descrevem paisagens
inteiras; Herborizo é duração instantânea nas curas e cena nas regenerações e
auras. As fórmulas que impõem algo a um inimigo receberam resistência
(Fortitude ou Vontade, conforme a natureza) contra a CD da classe — 10 + metade
do nível + Inteligência.

Cada YAML abre com um comentário `# PROPOSTO`, e a própria descrição do item
traz a ressalva depois de um `<hr>`, para que ninguém confunda a proposta com o
material original na hora de ler a ficha.

**Nenhuma fórmula virou ActiveEffect.** O único valor numérico do material
inteiro é o +5 em Percepção do `Corvo de Tinta`, e ele se aplica a testes feitos
*através do corvo*, não à ficha do Artífice — não há onde aterrissar. Todo o
resto é qualitativo ("grande dano", "regeneração leve", "cura em massa"), sem
valor que caiba num efeito.

**Proficiências, atributo-chave, CD e Kit de Sumiê ficam no texto.** O
`ClassData` (`tormenta20.mjs:18053`) só define `niveis`, `pvPorNivel`,
`pmPorNivel`, `pericias` e `inicial` — campos novos seriam descartados em
silêncio ao salvar, como diz [Duas armadilhas do sistema](#duas-armadilhas-do-sistema).

### O que ainda falta

O **Kit de Sumiê** é citado como equipamento da classe, mas o material não traz
descrição nem regra — não virou item. As criaturas do Bestiário não têm ficha:
o material não informa PV, Defesa, deslocamento, ataques nem atributos delas,
então elas existem como texto, e não como atores. Também não há limite de
invocações simultâneas nem regra de controle à distância.

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

O guarda acima impede que aconteça de novo, mas não desfaz o que já estava
gravado. O conserto é feito **pela interface**, sem console:

**1. Aviso automático.** Ao entrar no mundo, se alguma ficha estiver corrompida,
o mestre recebe uma janela listando quais e um botão **Corrigir agora**. Só
aparece quando há algo errado — mundo limpo não incomoda ninguém.

**2. Botão na aba Atores.** Um botão *Corrigir perícias* fica no rodapé da barra
lateral de Atores, para quem dispensou o aviso ou notou o problema depois.
Quando não há nada a corrigir, ele diz isso.

Ambos corrigem todos os atores do mundo **e** os tokens não vinculados das
cenas, que guardam uma cópia própria dos dados e não apareceriam num conserto
ficha a ficha.

Uma ficha é considerada corrompida a partir de **10** perícias fora do padrão;
abaixo disso presume-se customização deliberada e nada é tocado.

Pelo console, se preciso: `game.tormenta20Homebrew.repararTudo()` ou
`repararPericias(ator)` para uma só.

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
