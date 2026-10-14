# Deploy v0.2.20 — nav-diagnostico-piar

- **Quando:** 2026-10-14 14:52
- **Ambiente:** production (indexavel)
- **Commit:** ff2d86f (branch nav-diagnostico-piar)
- **Tag anterior:** v0.2.19
- **Arquivo pra arrastar no Netlify:** `site_v0.2.20.zip` (34.31 MB)
- **Rotas publicadas:** 39

## O que mudou desde o deploy anterior

**O "Diagnóstico de Autoridade" do menu passa a levar ao diagnóstico com a
identidade da PiaR**, e não mais ao do THE MIC. Vale para a barra do desktop e
para o menu do celular, nas 34 páginas que têm menu.

- Destino novo: `/diagnostico-de-reputacao?utm_source=site&utm_medium=organico&utm_campaign=home&utm_content=menu`.
- A `/diagnostico` (isca do THE MIC) continua no ar e segue sendo o destino
  dos botões da `/themic`.
- O link que veio no pedido tinha `utm_campaign=home%20` (com um espaço no
  fim). Entrou `home`, sem o espaço, para bater com os filtros do RD.

### Como conferir depois de subir

Abrir `piar.group` com Ctrl+F5, clicar em "Diagnóstico de Autoridade" no menu:
a página deve ser a da PiaR e a barra de endereço deve terminar em
`utm_content=menu`.

### Arquivos alterados (git)

```
M	deploys/2026-10-14_1420_v0.2.19_themic-2027/notes.md
M	src/components/Nav.astro
M	src/pages/diagnostico-de-reputacao.astro
```
