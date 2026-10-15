# Deploy v0.2.21 — nav-diagnostico-barra

- **Quando:** 2026-10-15 11:14
- **Ambiente:** production (indexavel)
- **Commit:** 09cb886 (branch nav-diagnostico-barra)
- **Tag anterior:** v0.2.20
- **Arquivo pra arrastar no Netlify:** `site_v0.2.21.zip` (34.31 MB)
- **Rotas publicadas:** 39

## O que mudou desde o deploy anterior

O item "Diagnóstico de Autoridade" do menu (barra e gaveta do celular) leva ao
diagnóstico com a identidade da PiaR, com o link enviado pelo comercial:

`/diagnostico-de-reputacao/?utm_source=site&utm_medium=organico&utm_campaign=home&utm_content=menu`

A diferença para a v0.2.20 é a barra final: sem ela o servidor dava um 301
antes de abrir a página. Conferido no build: as 34 páginas com menu têm o link
novo e nenhuma ainda aponta para o diagnóstico do THE MIC. Os botões da própria
/themic continuam indo para /diagnostico, de propósito.

Atenção: a v0.2.20 nunca chegou ao servidor (em 15/10 o piar.group ainda tinha
o menu em /diagnostico). Esta versão substitui as duas: basta subir este zip.

### Arquivos alterados (git)

```
M	deploys/2026-10-14_1452_v0.2.20_nav-diagnostico-piar/notes.md
M	src/components/Nav.astro
```
