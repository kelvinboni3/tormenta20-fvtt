# Prompt: estruturar uma classe homebrew

Cole tudo abaixo da linha em outra IA (Claude Desktop, ChatGPT…), anexe ou cole
seus arquivos da classe no final, e me traga a resposta inteira.

---

Você vai ler o material bruto de uma classe homebrew de Tormenta20 e devolver
uma **ficha técnica normalizada** em Markdown. Você **não** vai gerar YAML,
JSON, código, `_id` nem caminhos de ícone — outra etapa cuida disso. Seu
trabalho é organizar, completar o que está implícito e apontar o que falta.

## Regra número um: não invente

Este material vai virar conteúdo de jogo real. Se um dado não estiver no texto
que eu te dei, **não preencha com um valor plausível**. Escreva
`NÃO INFORMADO` no campo e repita o item na seção "Lacunas" ao final.

Um número errado que parece certo é pior do que um campo vazio, porque passa
despercebido e só aparece na mesa.

## Contexto de sistema (para você classificar, não para você implementar)

Em Tormenta20 uma classe tem:

- **PV e PM por nível.** Atenção: o valor do nível 1 costuma ser diferente do
  valor dos níveis seguintes, e as fichas costumam escrever "PV inicial" e
  "PV por nível" na mesma linha. Separe os dois explicitamente.
- **Perícias treinadas**: algumas obrigatórias, mais um número à escolha dentro
  de uma lista.
- **Habilidades de nível**: ganhas automaticamente ao atingir certo nível.
- **Poderes de classe**: uma lista de onde o jogador escolhe ao ganhar um poder.

Essas duas últimas são coisas diferentes e precisam ficar separadas na sua
resposta. Se o material não deixar claro em qual grupo uma habilidade está,
marque `GRUPO INCERTO` e cite o trecho que gerou a dúvida.

## Formato exato da resposta

Use estes títulos, nesta ordem, sem acrescentar seções.

### 1. Identidade

| Campo | Valor |
| --- | --- |
| Nome exato da classe | |
| Descrição (2 a 5 frases, em prosa) | |
| Origem / fonte | |

O nome precisa ser exatamente como vai aparecer no jogo, com acentos. Ele será
usado como chave de ligação entre a classe e cada habilidade, então qualquer
variação ("Vidente Carmesim" vs "Vidente Carmesim de Rusivald") quebra a
ligação. Se o material usar mais de uma grafia, escolha uma, avise, e liste as
variantes encontradas.

### 2. Progressão

| Campo | Valor |
| --- | --- |
| PV no nível 1 | |
| PV por nível seguinte | |
| Algum atributo soma no PV? Qual? | |
| PM por nível | |
| Algum atributo soma no PM? Qual? | |
| Atributo soma **por nível** ou **uma vez só**? | |

A última linha importa muito. "PM 5 + SAB por nível" e "PM 5 por nível, mais SAB
uma vez" dão totais completamente diferentes no nível 20. Se o texto for
ambíguo, escreva a frase original no campo e registre em "Lacunas".

### 3. Perícias

| Campo | Valor |
| --- | --- |
| Obrigatórias | |
| Quantas à escolha | |
| Lista de opções | |

### 4. Proficiências e requisitos

Armas, armaduras, escudos, atributo mínimo, restrições de origem ou devoção.
Se não houver nada, escreva "Nenhuma informada".

### 5. Habilidades de nível

Uma tabela geral primeiro:

| Nível | Nome da habilidade |
| --- | --- |

Depois, **uma subseção por habilidade**, no formato:

#### <Nome> (Nível N)

| Campo | Valor |
| --- | --- |
| Execução | passiva / ação padrão / movimento / completa / reação / ação livre / especial |
| Custo em PM | número, ou 0 |
| Duração | instantânea / cena / turno / rodada / sustentada / minutos / horas / dias / permanente / especial |
| Alcance | pessoal / toque / curto / médio / longo / ilimitado / especial / não se aplica |
| Alvo ou área | |
| Teste de resistência | perícia e atributo, ou "nenhum" |

**Texto:** o texto integral da habilidade, transcrito, sem resumir e sem
reescrever. Preserve os números exatos.

### 6. Poderes de classe

Mesmo formato da seção 5 (tabela geral + subseção por poder), mas sem a coluna
de nível. Se algum poder tiver pré-requisito, registre-o.

### 7. Classificação mecânica

Esta é a seção mais importante para mim, e a única em que eu quero seu
julgamento e não só transcrição. Uma linha por habilidade e por poder:

| Habilidade | Categoria | Estatística afetada | Valor | Observação |
| --- | --- | --- | --- | --- |

**Categoria** é uma destas cinco, exatamente:

| Categoria | Quando usar |
| --- | --- |
| `NUMÉRICO FIXO` | bônus ou penalidade constante, sempre ativo, sem condição. Ex.: "+2 em Vontade" |
| `NUMÉRICO CONDICIONAL` | número que só vale em certa situação. Ex.: "+2 contra alvos marcados", "+1d6 contra desprevenidos" |
| `ATIVÁVEL` | o jogador liga e desliga, gastando PM ou uma ação, e enquanto ativo vale um efeito |
| `RECURSO PRÓPRIO` | contador, pontos, cargas ou escala que a classe acumula e gasta, com regras próprias |
| `NARRATIVO` | não produz número: percepção, informação, interpretação, licença de ficção |

Para `NUMÉRICO FIXO` e `NUMÉRICO CONDICIONAL`, preencha "Estatística afetada"
em português claro e específico: *"perícia Vontade"*, *"Defesa"*,
*"Iniciativa"*, *"dano de armas corpo a corpo"*, *"deslocamento"*. Não tente
adivinhar nomes de campos do Foundry — eu faço essa tradução.

Se uma habilidade for mista (parte passiva numérica, parte ativa narrativa),
gere **uma linha por parte**, numerando: `Olho Desperto (1/2)`,
`Olho Desperto (2/2)`.

### 8. Recursos próprios da classe

Só preencha se a seção 7 tiver alguma linha `RECURSO PRÓPRIO`. Para cada um:

| Campo | Valor |
| --- | --- |
| Nome do recurso | |
| Começa em quanto | |
| Máximo, se houver | |
| O que faz ele subir | |
| O que faz ele descer | |
| Zera quando | |

E uma tabela de limiares, se houver:

| Valor | O que acontece | Os limiares somam ou vale só o mais alto? |
| --- | --- | --- |

A última coluna decide a implementação inteira. Se o material não disser,
escreva `NÃO INFORMADO` — não deduza.

### 9. Lacunas

Lista numerada. Cada item: o que falta, onde eu deveria ter dito, e — quando
houver — as duas ou três leituras possíveis do texto ambíguo, para eu escolher.

Se não faltar nada, escreva "Nenhuma". Não invente lacunas para parecer
cuidadoso.

### 10. Conflitos com as regras oficiais

Pontos em que a classe contraria ou duplica regra do Tormenta20 oficial: nome
de habilidade já existente, bônus que se empilha com algo padrão, perícia que
não existe no sistema. Só liste o que você tem certeza; incerteza vai para
"Lacunas".

## Estilo

Português do Brasil. Tabelas em Markdown. Sem introdução, sem "claro, aqui
está", sem resumo final fora das seções pedidas. Comece direto no título
"### 1. Identidade".

## Meu material

<!-- COLE OU ANEXE AQUI os arquivos da classe. Pode ser texto solto, foto de
     caderno transcrita, PDF, planilha — mande como estiver. -->
