# Deploy e versionamento do site PiaR

> Como cada versão do site sobe pro Netlify, como ela fica registrada, e como voltar
> atrás ou comparar duas versões. Pensado para deploy **manual** (arrastar o build no
> painel do Netlify) e para acomodar novas páginas e rodadas de ajuste de copy.

## O objetivo em uma frase

Toda subida do site vira **uma pasta carimbada** (nome + hora + versão) gerada por
**um comando só**, com o "antes e depois" calculado automaticamente pelo git. Você só
faz o passo manual final: arrastar o `.zip` no Netlify.

## Decisões que valem pra sempre

- **Deploy manual.** Nada de CI conectado ao GitHub por enquanto. Eu gero o `.zip`
  pronto; você arrasta no painel do Netlify.
- **`main` é o que está no ar.** Todo deploy sai da `main`. Trabalho novo vive em
  branch e só vira deploy depois de mesclar na `main`.
- **Preview do CEO é `noindex`.** Enquanto o site está em teste (env `staging`), o
  build sai bloqueado pra buscadores, pra não indexar uma versão duplicada. Quando for
  pro ar de verdade (env `production`), o build sai liberado.

## Estrutura de pastas

```
deploys/
  2026-07-01_1430_v0.2.0_ceo-preview/
     manifest.json      # dados do deploy (versão, hora, commit, o que mudou)  [vai pro git]
     notes.md           # "o que mudou", em português, pra humano ler          [vai pro git]
     site_v0.2.0.zip    # o arquivo que você arrasta no Netlify                [fica só local]
DEPLOYS.md              # índice de todos os deploys, mais novo no topo         [vai pro git]
```

O `manifest.json` e o `notes.md` **entram no git** (são o registro permanente, leve).
O `.zip` **não entra no git** (é regenerável e pesado). Isso mantém o histórico limpo
sem inchar o repositório.

## O `manifest.json`

Guarda, gerado automaticamente:

- `name` / `label` — o apelido do deploy (ex.: `ceo-preview`).
- `version` — versão semântica (ex.: `0.2.0`).
- `env` — `staging` (noindex) ou `production` (indexável).
- `timestamp` — data e hora ISO + versão legível.
- `git` — branch, commit (completo e curto), tag criada.
- `changes` — a lista de arquivos que mudaram **desde o último deploy**
  (`git diff` da última tag até agora). **Este é o "ponto de partida anterior e depois".**
- `routes` — a lista de páginas publicadas. Assim, **adições de página** ficam
  rastreadas sozinhas de um deploy pro outro.
- `build` — versão do Node, versão do Astro, e se o build passou.

## Como fazer um deploy

```bash
# staging (preview do CEO) — bloqueado pra buscadores
npm run deploy:snapshot -- --label ceo-preview --bump minor --env staging

# quando for pro ar de verdade
npm run deploy:snapshot -- --label go-live --bump minor --env production
```

Opções:

- `--label <nome>` — apelido do deploy (vira parte do nome da pasta). Padrão: `deploy`.
- `--bump patch|minor|major` — como subir a versão. Padrão: `patch`.
- `--version X.Y.Z` — fixa a versão exata (ignora o `--bump`).
- `--env staging|production` — controla o `noindex`. Padrão: `staging`.

O comando, em sequência: roda o build (`astro check && astro build`), aplica o
`noindex` se for staging, calcula o diff desde o último deploy, cria a pasta carimbada,
zipa o site, escreve o `manifest.json` e o `notes.md`, atualiza o `DEPLOYS.md`, sobe a
versão no `package.json`, faz **um commit** e cria a **tag** `vX.Y.Z`. Ele **não** faz
`git push` — você decide quando publicar o histórico. No fim, ele imprime o caminho
exato do `.zip` pra você arrastar no Netlify.

## Como voltar atrás ou comparar versões

- **Regenerar uma versão antiga, idêntica:** `git checkout v0.1.0-foundation` e depois
  `npm run build`. O `dist/` volta a ser exatamente aquela versão.
- **Comparar duas versões (o "antes e depois" completo):** `git diff v0.1.0 v0.2.0`.
- **Rollback rápido no ar:** o próprio Netlify guarda os deploys manuais. No painel,
  em Deploys, dá pra publicar de novo um deploy antigo com um clique.
- **Achar o que mudou num deploy específico:** abra o `notes.md` daquele deploy, ou o
  campo `changes` do `manifest.json`.

## Como adicionar uma página nova no futuro

1. Crie o arquivo em `src/pages/<slug>.astro`.
2. Linke a página onde fizer sentido (nav, rodapé, links internos). A nav e o rodapé
   são fonte única: `src/components/Nav.astro` e `src/components/Footer.astro`.
3. O sitemap é automático (integração `@astrojs/sitemap`), não precisa mexer.
4. No próximo `npm run deploy:snapshot`, a rota nova aparece sozinha no `manifest.json`
   (campo `routes`), então a adição já fica registrada.

## O fluxo com o CEO (rodadas de copy)

1. Deploy `staging` → CEO revisa → anota ajustes de copy.
2. Aplico os ajustes numa branch, mesclo na `main`.
3. Novo deploy `staging` (versão sobe): o `manifest.json` já traz a lista do que mudou
   desde a rodada anterior.
4. Quando o CEO aprovar, um deploy `production` (indexável) fecha a versão pro ar.

Cada rodada é uma versão carimbada. Nunca se perde o ponto de partida.
