# Prompts de estruturação

Prompts para dar a outra IA (Claude Desktop, ChatGPT…) quando o conteúdo
homebrew ainda está cru: caderno transcrito, PDF, conversa de mesa, planilha.
A resposta dela vira a entrada de quem for escrever os YAML e a automação.

| Prompt | Para quê |
| --- | --- |
| [1-classe.md](1-classe.md) | Uma classe: progressão, perícias, habilidades de nível, poderes de classe |
| [2-raca.md](2-raca.md) | Uma ou várias raças, de uma vez só |
| [3-ficha-do-mestre.md](3-ficha-do-mestre.md) | Mudanças na ficha do ator `simple` — não é conversão, é levantamento |

## Por que eles pedem uma ficha técnica, e não YAML

O [PROMPT-CONVERSAO.md](../PROMPT-CONVERSAO.md) faz o contrário: pede o YAML
pronto. Foi assim que o Vidente Carmesim entrou, e funcionou — mas o histórico
do repositório mostra o preço. Os commits seguintes foram consertar ícones,
pastas do compêndio, os efeitos ativos e o cálculo de PV/PM.

Nada disso é culpa da outra IA. São coisas que só se acertam com o repositório
aberto: que `system.attributes.pm.bonus.nivel` entra dentro do laço por nível e
`attributes.pm.atributos` não; que o ajuste de PV muda conforme a caixa "Classe
Inicial"; que um `folder` inexistente faz o item sumir da árvore sem erro; que
campo fora do DataModel é descartado em silêncio. Uma IA sem acesso a nada
disso vai produzir YAML que **salva** e está **errado** — o pior dos dois
mundos, porque não reclama.

A divisão que funciona:

- **A outra IA** lê o material cru e normaliza. É boa nisso, e é a parte
  chata.
- **Quem tem o repositório** escreve os `_id`, os `_key`, as pastas, os ícones,
  os ActiveEffect e a automação em `homebrew.mjs`.

A seção "Classificação mecânica", nos prompts 1 e 2, é a costura entre as
duas: ela diz *"+2 na perícia Vontade, fixo"* em português, e a tradução para
`system.pericias.vont.outros` acontece do lado de cá.

## Como usar

1. Abra o prompt, copie tudo que estiver **abaixo da linha horizontal**.
2. Cole na outra IA e anexe seus arquivos no final, onde está indicado.
3. Traga a resposta inteira de volta — inclusive as seções "Lacunas" e
   "Conflitos". São elas que evitam que um `NÃO INFORMADO` vire um número
   inventado dentro do compêndio.

Vale mandar uma classe ou um lote de raças por vez. Respostas muito longas
costumam degradar no fim, e é justamente no fim que ficam as lacunas.
