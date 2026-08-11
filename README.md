# Tormenta20 para Foundry VTT

Sistema de jogo **não oficial** para rodar **Tormenta20** (Jambô Editora) na plataforma [Foundry Virtual Tabletop](https://foundryvtt.com/), **atualizado e mantido por [Kelvin Bonifacio](https://github.com/kelvinboni3)** a partir da base criada originalmente por **Vizael (Victor Hugo Paiva)**.

> ⚠️ **Aviso**: este é um projeto de fã, sem qualquer vínculo com a Jambô Editora. Todo o conteúdo de regras é baseado no RPG Tormenta20 e é fornecido aqui apenas como implementação de sistema para o Foundry VTT.

## Sobre este repositório

O sistema Tormenta20 foi criado originalmente por **Vizael (Victor Hugo Paiva)** em <https://gitlab.com/vizael/Tormenta20>, mas estava desatualizado e sem compatibilidade com as versões recentes do Foundry VTT. Este repositório é uma **atualização e continuação independente** desse trabalho, mantida por **Kelvin Bonifacio ([kelvinboni3](https://github.com/kelvinboni3))**, com:

- Migração e compatibilidade com o **Foundry VTT v14+**;
- Correções de bugs que impediam o funcionamento do sistema;
- Atualização de traduções e conteúdo dos compêndios.

O objetivo é manter o sistema funcionando e disponível para a comunidade brasileira de Foundry VTT, com atualizações contínuas daqui pra frente. O código continua distribuído sob a licença original BSD 3-Clause (veja [LICENSE](LICENSE) e a seção [Créditos](#créditos)).

## Compatibilidade

| | |
|---|---|
| **Foundry VTT mínimo** | v14 |
| **Foundry VTT verificado** | v14.365 |
| **Versão do sistema** | 1.5.015 |
| **Idiomas** | Português (Brasil) e Inglês (parcial) |

## Funcionalidades

- **Fichas completas** de Personagem, NPC, Ameaça, Convocação, Veículo e fichas simplificadas.
- **Compêndios prontos para uso**, incluindo:
  - Raças, Classes, Poderes e Poderes de Distinção
  - Magias, Equipamentos, Itens Mágicos e Poções
  - Ameaças (bestiário), Convocações e Parceiros
  - Tabelas de Tesouro e Macros
  - Trechos do Livro Básico em formato de Journal
- **Automação de regras**: cálculo de atributos, perícias, defesa, deslocamento, PV/PM, resistências e condições.
- **Ferramentas auxiliares**: calculadora de habilidades, importador/parser de stat block, assistente de efeitos ativos, sincronização de atores e progressão de personagem.
- **HUD de token** e cartas de rolagem/dano personalizadas para o chat.
- Compatível com o módulo [Vision T20](https://github.com/mclemente/vision-t20) (recomendado automaticamente pelo `system.json`).

## Instalação

> ⚠️ **Antes de instalar ou atualizar, especialmente se você já tem um mundo em uso, faça backup dos seus dados.** O guia completo — com o passo a passo de backup, instalação, atualização e como reverter caso algo dê errado — está em [`docs/GUIA-DE-INSTALACAO.md`](docs/GUIA-DE-INSTALACAO.md). Abaixo vai só o resumo rápido.

### Opção 1 — Pelo Foundry VTT (recomendado)

1. Baixe este repositório como `.zip` (botão **Code → Download ZIP** no GitHub) ou clone-o.
2. Extraia/copie a pasta para dentro do diretório de dados do Foundry VTT, em `Data/systems/`, renomeando a pasta para `tormenta20`:
   ```
   FoundryVTT Data/
   └── systems/
       └── tormenta20/
           ├── system.json
           ├── tormenta20.mjs
           └── ...
   ```
3. Reinicie o Foundry VTT (ou atualize a página de administração).
4. Crie um novo mundo selecionando o sistema **Tormenta20**.

### Opção 2 — Clonando via Git

```bash
cd "<pasta de dados do Foundry>/Data/systems"
git clone https://github.com/kelvinboni3/tormenta20-fvtt.git tormenta20
```

Para atualizar depois, basta rodar `git pull` dentro da pasta `tormenta20`.

## Estrutura do projeto

```
tormenta20/
├── system.json          # Manifesto do sistema (metadados, compêndios, idiomas)
├── tormenta20.mjs        # Código do sistema (compilado)
├── tormenta20.css        # Estilos do sistema (compilado)
├── templates/            # Templates Handlebars das fichas e janelas (.hbs)
├── packs/                # Compêndios (bancos LevelDB) de itens, atores, journals, tabelas e macros
├── lang/                 # Arquivos de tradução (pt-BR e en)
├── icons/                # Ícones usados pelo sistema (parte sob CC BY 3.0, ver icons/LICENSE)
└── assets/                # Imagens e recursos visuais da interface
```

> Este repositório contém o sistema já **compilado** (`tormenta20.mjs`/`tormenta20.css`), sem o código-fonte do processo de build.

## Como contribuir

Contribuições da comunidade são bem-vindas!

1. Abra uma [issue](../../issues) descrevendo o bug encontrado ou a melhoria sugerida.
2. Para propor alterações, faça um fork, crie uma branch descritiva e abra um Pull Request explicando o que foi alterado e por quê.
3. Ao reportar bugs, inclua: versão do Foundry VTT, versão do sistema, passos para reproduzir e, se possível, prints ou o console de erros (F12).

## Créditos

- **Autor original do sistema**: Vizael (Victor Hugo Paiva) — [gitlab.com/vizael/Tormenta20](https://gitlab.com/vizael/Tormenta20)
- **Atualização e manutenção deste repositório** (compatibilidade com Foundry VTT v14+, correções de bugs, traduções e conteúdo): [Kelvin Bonifacio (kelvinboni3)](https://github.com/kelvinboni3)
- **Ícones**: parte dos ícones em `icons/svg` vem de [Game-icons.net](https://game-icons.net), licenciados sob CC BY 3.0 (créditos individuais em [`icons/LICENSE`](icons/LICENSE)).
- **Tormenta20** é um RPG de mesa criado por Marcelo Cassaro e publicado pela [Jambô Editora](https://www.jamboeditora.com.br/).

## Licença

Este sistema é distribuído sob a licença **BSD 3-Clause**. Veja o arquivo [LICENSE](LICENSE) para o texto completo.
