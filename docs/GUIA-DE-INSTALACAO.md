# Guia de Instalação, Atualização e Backup

Este guia explica, passo a passo, como instalar o sistema Tormenta20 no Foundry VTT **da forma correta e segura**, incluindo o cuidado mais importante: **fazer backup antes de qualquer instalação ou atualização**, para não correr risco de perder fichas, mundos e campanhas.

Se você só quer o resumo rápido de instalação, veja a seção [Instalação](../README.md#instalação) do README. Este guia é a versão completa, recomendada especialmente para quem já tem um mundo em uso.

## Índice

1. [Antes de começar](#1-antes-de-começar)
2. [⚠️ Faça backup antes de instalar ou atualizar](#2-️-faça-backup-antes-de-instalar-ou-atualizar)
3. [Instalação (primeira vez)](#3-instalação-primeira-vez)
4. [Atualizando uma instalação existente](#4-atualizando-uma-instalação-existente)
5. [Migrando de uma instalação antiga do sistema Tormenta20](#5-migrando-de-uma-instalação-antiga-do-sistema-tormenta20)
6. [Como restaurar um backup, se algo der errado](#6-como-restaurar-um-backup-se-algo-der-errado)
7. [Problemas comuns](#7-problemas-comuns)
8. [Onde pedir ajuda](#8-onde-pedir-ajuda)

## 1. Antes de começar

- É necessário ter o **Foundry Virtual Tabletop instalado**, versão **14 ou superior** (testado na v14.365).
- Você precisa ter acesso à pasta de dados do Foundry (a "**Data Path**"), onde ficam os mundos, sistemas e módulos instalados. Para descobrir onde ela fica na sua máquina, abra o Foundry, vá até a tela de **Configuration** (ou o painel do launcher/setup) — o caminho configurado aparece lá. Em instalações padrão, costuma ser algo como:
  - **Windows**: `%localappdata%\FoundryVTT\Data`
  - **macOS**: `~/Library/Application Support/FoundryVTT/Data`
  - **Linux**: `~/.local/share/FoundryVTT/Data`

  Dentro dela existem as pastas `worlds/`, `systems/` e `modules/`.

## 2. ⚠️ Faça backup antes de instalar ou atualizar

Este é o passo **mais importante** deste guia. Leia com atenção antes de continuar.

**Por que isso importa:** ao atualizar um sistema, o Foundry frequentemente executa **migrações automáticas de dados** nas fichas de personagens, NPCs e itens do seu mundo, para adequá-las ao novo formato. Isso é normal e geralmente funciona bem — mas migrações podem falhar, ter bugs ou não se comportar como esperado, especialmente ao trocar de uma versão bem antiga do sistema para uma mais nova. Se algo der errado durante a migração, **as fichas do seu mundo podem ficar corrompidas ou perder informações**, sem uma forma fácil de desfazer.

Ter um backup elimina esse risco: se algo sair errado, você simplesmente restaura a cópia e tenta de novo.

### Como fazer o backup manualmente (recomendado, funciona em qualquer versão)

1. Feche o Foundry VTT completamente (ou pelo menos saia do mundo que você vai atualizar).
2. Vá até a pasta de dados do Foundry (veja o [item 1](#1-antes-de-começar)).
3. Copie **a pasta inteira do seu mundo**, dentro de `worlds/`, para um local seguro fora da pasta `Data` (um pendrive, outro disco, um serviço de nuvem, etc.). Exemplo:
   ```
   Data/worlds/minha-campanha  →  copiar para  →  D:/Backups/minha-campanha-2026-08-11
   ```
4. Se você já tem o sistema Tormenta20 instalado e vai atualizá-lo, copie também a pasta atual do sistema antes de sobrescrevê-la:
   ```
   Data/systems/tormenta20  →  copiar para  →  D:/Backups/tormenta20-antigo-2026-08-11
   ```
5. Dica: inclua a data no nome da pasta de backup, como no exemplo acima, para saber facilmente qual é a versão mais recente.

Repita esse processo **antes de toda atualização**, não só na primeira instalação.

### Backup pelo próprio Foundry (se disponível na sua versão)

Algumas versões mais recentes do Foundry VTT oferecem uma opção de backup integrada na tela de **Setup**, no menu de contexto (⋮) de cada mundo. Se essa opção existir na sua versão, é um complemento útil — mas **não substitui** a cópia manual da pasta, que é garantida em qualquer versão.

## 3. Instalação (primeira vez)

### Opção A — Pelo próprio Foundry VTT

1. Baixe este repositório como `.zip`: no GitHub, clique em **Code → Download ZIP**.
2. Extraia o `.zip`. Você deve obter uma pasta contendo `system.json`, `tormenta20.mjs`, etc.
3. Copie essa pasta para dentro de `Data/systems/`, e **renomeie-a para `tormenta20`** (esse nome precisa ser exatamente esse, pois é o identificador do sistema):
   ```
   Data/
   └── systems/
       └── tormenta20/
           ├── system.json
           ├── tormenta20.mjs
           ├── tormenta20.css
           └── ...
   ```
4. Reinicie o Foundry VTT (ou volte para a tela de **Setup**).
5. Na aba **Game Systems**, o sistema **Tormenta20** deve aparecer na lista.
6. Crie um novo mundo e selecione o sistema **Tormenta20**.

### Opção B — Clonando via Git

```bash
cd "<pasta de dados do Foundry>/Data/systems"
git clone https://github.com/kelvinboni3/tormenta20-fvtt.git tormenta20
```

## 4. Atualizando uma instalação existente

1. **Faça o backup** conforme o [item 2](#2-️-faça-backup-antes-de-instalar-ou-atualizar). Não pule esta etapa.
2. Feche o Foundry VTT (ou pelo menos saia de qualquer mundo aberto).
3. Substitua o conteúdo da pasta `Data/systems/tormenta20` pelos arquivos novos:
   - Se instalou via `.zip`: apague o conteúdo antigo da pasta `tormenta20` e coloque os arquivos novos extraídos no lugar.
   - Se instalou via Git: dentro da pasta `Data/systems/tormenta20`, rode:
     ```bash
     git pull
     ```
4. Abra o Foundry novamente e entre no mundo. O sistema pode executar uma migração automática de dados na primeira vez que o mundo é aberto após a atualização — **aguarde ela terminar** sem fechar o Foundry no meio do processo.
5. Confira se as fichas de personagem, itens e compêndios continuam abrindo normalmente.

## 5. Migrando de uma instalação antiga do sistema Tormenta20

Se você já usa uma versão antiga/desatualizada do sistema Tormenta20 (por exemplo, a versão original de Vizael, sem suporte ao Foundry v14), o processo é o mesmo do item 4 — mas o cuidado com backup é **ainda mais importante**, porque a diferença de versões é maior e a chance de haver migrações estruturais nos dados também.

Passos recomendados nesse caso:

1. Backup completo do mundo e do sistema antigo (item 2).
2. Se possível, teste a atualização primeiro em uma **cópia** do mundo (duplique a pasta do mundo dentro de `worlds/` com outro nome, e abra essa cópia depois de atualizar o sistema) antes de aplicar no mundo "de verdade" usado nas suas sessões.
3. Só depois de confirmar que tudo abriu corretamente, atualize o mundo principal.

## 6. Como restaurar um backup, se algo der errado

1. Feche o Foundry VTT.
2. Apague (ou renomeie) a pasta problemática dentro de `Data/worlds/` e/ou `Data/systems/tormenta20`.
3. Copie de volta a pasta que você salvou no backup, no lugar da original.
4. Reabra o Foundry. Tudo deve voltar ao estado de antes da atualização.

## 7. Problemas comuns

- **"This Package requires a Foundry Version compatible with X, but your Foundry version is Y"**: sua versão do Foundry VTT é anterior à v14. Atualize o Foundry ou use uma versão do sistema compatível com a sua instalação.
- **Fichas ou compêndios não abrem / aparecem em branco após atualizar**: verifique se restou algum arquivo antigo misturado com os novos na pasta `systems/tormenta20` (evite apenas "colar por cima"; prefira apagar o conteúdo antigo antes de copiar os arquivos novos). Se persistir, restaure o backup e abra uma issue.
- **Compêndios não aparecem na barra lateral**: confira se a pasta `packs/` foi copiada por completo — os bancos de compêndio (`.ldb`, `CURRENT`, `MANIFEST-*`) precisam estar todos presentes.

## 8. Onde pedir ajuda

Se algo não funcionar mesmo seguindo este guia, abra uma [issue no repositório](https://github.com/kelvinboni3/tormenta20-fvtt/issues) descrevendo:

- Versão do Foundry VTT e versão do sistema Tormenta20;
- O que você tentou fazer (instalar, atualizar, migrar);
- Se você tinha um mundo/fichas antes e se fez backup;
- Mensagens de erro (inclusive do console do navegador, tecla **F12**).
