# Prompt: especificar melhorias na ficha de Personagem do Mestre

Este prompt é diferente dos outros dois. Ali havia conteúdo pronto para
normalizar; aqui o que existe é uma vontade ("queria que a ficha fosse melhor")
que precisa virar uma lista de mudanças concretas.

A outra IA não conhece este repositório nem o sistema Tormenta20 instalado, e
por isso **não deve propor implementação** — só te ajudar a dizer com precisão
o que você quer. Se você já souber descrever, pule este prompt e me conte
direto; sai mais rápido.

Vale muito anexar **capturas de tela** da ficha como ela está hoje, com
anotações se possível.

---

Você vai me entrevistar e depois escrever uma especificação de mudanças numa
ficha de personagem de RPG dentro do Foundry VTT. A ficha em questão é a do
tipo "Personagem do Mestre" do sistema Tormenta20 — a ficha simplificada que o
mestre usa para NPCs e coadjuvantes, mais enxuta que a ficha de jogador.

Você **não** conhece o código desse sistema e não tem acesso a ele. Portanto:

- Não sugira como implementar, em que arquivo mexer, nem que biblioteca usar.
- Não afirme o que a ficha "tem" ou "não tem" hoje. Isso só eu posso te dizer.
- Não invente nomes de campos ou de botões que eu não tenha citado.

Seu produto é uma especificação que outra pessoa, essa sim com o código na
frente, vai conseguir executar sem me perguntar mais nada.

## Etapa 1 — perguntas

Antes de escrever qualquer coisa, me faça de **5 a 10 perguntas**, numeradas, e
espere minha resposta. Perguntas que valem a pena:

- O que eu faço hoje na ficha que dá trabalho, e quantas vezes por sessão?
- Que informação eu procuro e não acho de imediato?
- O que eu acabo anotando fora do Foundry, no papel ou noutra aba?
- Alguma coisa da ficha de jogador que faz falta aqui?
- Isso é para o meio da luta ou para a preparação da sessão?
- Os jogadores chegam a ver essa ficha em algum momento?

Faça as perguntas em bloco único. Não escreva a especificação junto com elas.

## Etapa 2 — a especificação

Depois que eu responder, escreva a especificação neste formato exato.

### 1. Problema

Dois a quatro parágrafos: o que é ruim hoje, em que momento do jogo isso
atrapalha, e o que eu faço para contornar. Escreva com as minhas palavras, não
com as suas — se eu disse "toda hora tenho que abrir a aba de itens só pra ver
a Defesa", esse é o parágrafo, e não uma versão corporativa dele.

### 2. Mudanças pedidas

Uma subseção numerada por mudança. Cada uma:

| Campo | Valor |
| --- | --- |
| O que aparece | |
| Onde na ficha | acima/abaixo de quê, ou "a definir" |
| De onde vem o dado | atributo da ficha, item, contador manual, texto livre |
| É só leitura ou dá para editar? | |
| Se dá para clicar, o que acontece | |
| Quem enxerga | só o mestre / também os jogadores |
| Some quando não se aplica? | |

Se eu não tiver dito algo, escreva `A DEFINIR` — não escolha por mim.

### 3. Prioridade

| # | Mudança | Prioridade | Por quê |
| --- | --- | --- | --- |

Prioridade é `ESSENCIAL`, `IMPORTANTE` ou `SERIA BOM`. Use as três: se tudo for
essencial, a lista não prioriza nada. Se eu tiver dito o que mais me incomoda,
essa é a essencial.

### 4. O que não muda

Coisas da ficha que estão boas e que eu não quero que sejam mexidas ou
reorganizadas em nome da melhoria. Se eu não tiver falado disso, pergunte antes
de escrever a especificação.

### 5. Perguntas em aberto

Numeradas, cada uma com as opções possíveis, para eu escolher. Tudo que ficou
`A DEFINIR` na seção 2 tem que aparecer aqui.

## Estilo

Português do Brasil. Direto. Sem introdução e sem resumo final. Na etapa 1,
comece pela pergunta número 1.

## Meu material

<!-- ANEXE AQUI as capturas de tela da ficha e escreva, mesmo que solto e
     desorganizado, o que te incomoda nela. A outra IA vai fazer as perguntas
     para organizar o resto. -->
