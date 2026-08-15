# Prompt: estruturar raças homebrew

Cole tudo abaixo da linha em outra IA, anexe seus arquivos das raças no final,
e me traga a resposta inteira. Pode mandar várias raças de uma vez.

---

Você vai ler o material bruto de uma ou mais raças homebrew de Tormenta20 e
devolver uma **ficha técnica normalizada** em Markdown. Você **não** vai gerar
YAML, JSON, código, `_id` nem caminhos de ícone. Seu trabalho é organizar,
separar o que está misturado e apontar o que falta.

## Regra número um: não invente

Se um dado não estiver no material que eu te dei, escreva `NÃO INFORMADO` e
repita o item na seção "Lacunas" ao final. Não preencha com o valor "típico" de
uma raça parecida — deslocamento 9m e tamanho Médio são comuns, mas se o meu
texto não disser, eu preciso saber que não disse.

## Contexto de sistema (para você classificar, não para você implementar)

Uma raça em Tormenta20 é composta de:

- **Modificadores de atributo**: valores fixos, um por atributo, que podem ser
  negativos. Alguns povos usam em vez disso uma escolha livre ("+1 em três
  atributos diferentes"), e há quem misture as duas coisas.
- **Tamanho** e **deslocamento**.
- **Habilidades raciais**: cada uma vira um documento próprio, separado da raça.
  A raça só aponta para elas.
- Eventualmente **perícias treinadas**.

Habilidade racial e modificador de atributo são coisas diferentes e não podem
sair fundidas num parágrafo só. Se o meu texto trouxer tudo em prosa corrida,
separe.

## Formato exato da resposta

Repita o bloco inteiro abaixo **uma vez por raça**, começando cada uma com um
título `## Raça: <Nome>`. Use estes títulos, nesta ordem, sem acrescentar
seções.

### 1. Identidade

| Campo | Valor |
| --- | --- |
| Nome exato da raça | |
| Descrição (2 a 5 frases, em prosa) | |
| Origem / fonte | |

### 2. Atributos

| Atributo | Modificador |
| --- | --- |
| Força | |
| Destreza | |
| Constituição | |
| Inteligência | |
| Sabedoria | |
| Carisma | |

Use números com sinal (`+2`, `-1`, `0`). Todos os seis atributos precisam
aparecer, mesmo os que não mudam.

Se a raça tiver escolha livre de atributos, preencha também:

| Campo | Valor |
| --- | --- |
| Texto da escolha (ex.: "+1 em três atributos diferentes") | |
| Quais atributos são elegíveis | |
| A escolha **substitui** os modificadores fixos acima ou **soma** a eles? | |

### 3. Corpo

| Campo | Valor |
| --- | --- |
| Tamanho | Minúsculo / Pequeno / Médio / Grande / Enorme / Colossal |
| Deslocamento a pé, em metros | |
| Outros deslocamentos (voo, natação, escalada, escavação) | ou "nenhum" |
| Visão no escuro ou sentidos especiais | ou "nenhum" |

### 4. Perícias treinadas

| Campo | Valor |
| --- | --- |
| Perícias fixas | ou "nenhuma" |
| Quantas à escolha | ou 0 |
| Lista de opções da escolha | |

### 5. Habilidades raciais

Uma tabela geral primeiro:

| Nome da habilidade | O personagem recebe todas ou escolhe? |
| --- | --- |

Se for escolha, diga quantas de quantas ("escolhe 1 entre 3").

Depois, **uma subseção por habilidade**:

#### <Nome da habilidade>

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

### 6. Classificação mecânica

Uma linha por habilidade racial:

| Habilidade | Categoria | Estatística afetada | Valor | Observação |
| --- | --- | --- | --- | --- |

**Categoria** é uma destas cinco, exatamente:

| Categoria | Quando usar |
| --- | --- |
| `NUMÉRICO FIXO` | bônus ou penalidade constante, sempre ativo, sem condição |
| `NUMÉRICO CONDICIONAL` | número que só vale em certa situação ou contra certo tipo de criatura |
| `ATIVÁVEL` | o jogador liga e desliga, gastando PM ou uma ação |
| `RECURSO PRÓPRIO` | contador, pontos ou cargas com regras próprias |
| `NARRATIVO` | não produz número: percepção, informação, licença de ficção |

Em "Estatística afetada", escreva em português claro e específico: *"perícia
Fortitude"*, *"Defesa"*, *"redução de dano"*, *"deslocamento"*. Não tente
adivinhar nomes de campos do Foundry — eu faço essa tradução.

Habilidade mista gera uma linha por parte, numerando: `Casca Grossa (1/2)`.

### 7. Lacunas

Lista numerada. Cada item: o que falta, onde eu deveria ter dito, e — quando
houver — as leituras possíveis do texto ambíguo, para eu escolher.

Se não faltar nada, escreva "Nenhuma".

### 8. Conflitos e sobreposições

Habilidade com nome igual ao de uma habilidade racial oficial, bônus que
duplica algo que a raça já ganha por outro caminho, modificador de atributo
fora da faixa usual do sistema (que vai de -5 para cima). Só liste o que você
tem certeza.

## Ao final de todas as raças

Uma única tabela comparativa, para eu conferir de relance:

| Raça | FOR | DES | CON | INT | SAB | CAR | Tamanho | Deslocamento | Nº de habilidades |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Estilo

Português do Brasil. Tabelas em Markdown. Sem introdução, sem "claro, aqui
está", sem resumo final fora das seções pedidas. Comece direto no título
`## Raça: <Nome>` da primeira raça.

## Meu material

<!-- COLE OU ANEXE AQUI os arquivos das raças. -->
