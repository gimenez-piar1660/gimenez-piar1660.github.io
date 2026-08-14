# Deploy v0.2.0 — ceo-preview

- **Quando:** 2026-07-01 11:58
- **Ambiente:** staging (noindex, preview privado)
- **Commit:** abab62c (branch main)
- **Tag anterior:** v0.1.0-foundation
- **Arquivo pra arrastar no Netlify:** `site_v0.2.0.zip` (33.58 MB)
- **Rotas publicadas:** 33

## O que mudou desde o deploy anterior

Primeira subida sob o sistema de versionamento, para o teste do CEO. E o site
completo como esta hoje (32 paginas): home, os 7 servicos, PEP, insights, cases,
sobre e contato. Sugestao de percurso pro CEO: home, depois /pep, /insights e
/contato, e um servico a escolha (ex.: /relacoes-publicas).

Mudancas desta rodada em relacao ao estado anterior de trabalho:
- Copy: removidos os travessoes de prosa que sobravam (heroAlt do blog e labels do
  formulario de contato viraram dois-pontos). Acentuacao pt-BR auditada, sem pendencia.
- Limpeza: removidas 21 paginas /pre-deploy/* obsoletas (versoes antigas de paginas
  ja promovidas pra raiz) que estavam vazando pro build por causa do OneDrive.
- Este deploy sai como staging (noindex): nao aparece em buscadores. Quando o CEO
  aprovar, um deploy --env production libera pra indexacao.

### Arquivos alterados (git)

```
M	.claude/settings.local.json
M	.gitignore
A	docs/deploy-e-versionamento.md
A	docs/superpowers/copy/2026-06-28-blog-sala-de-sinais-voz-v2.md
A	docs/superpowers/copy/2026-06-29-comunicacao-integrada-voz-v2.md
A	docs/superpowers/copy/2026-06-29-geo-vs-geo-pr-diferenciacao.md
A	docs/superpowers/copy/2026-06-29-ghostwriting-voz-v2.md
A	docs/superpowers/copy/2026-06-29-media-training-voz-v2.md
A	docs/superpowers/copy/2026-06-29-para-cmos-voz-v2.md
A	docs/superpowers/copy/2026-06-29-tier-c-r1-abstracts.md
A	docs/superpowers/copy/2026-06-30-tier-c-r3-fechamento.md
A	docs/superpowers/plans/2026-06-27-home-heroi-voz.md
A	docs/superpowers/specs/2026-06-27-home-heroi-voz-design.md
M	package.json
A	scripts/deploy-snapshot.mjs
M	src/components/Footer.astro
M	src/components/SinaisCover.astro
M	src/content/blog/sala-de-sinais-01.md
R100	src/content/pages/geo-generative-engine-optimization.md	src/content/pages/geo.md
R100	src/content/pages/roi-assessoria-de-imprensa.md	src/content/pages/roi.md
M	src/data/site.ts
M	src/pages/blog.astro
M	src/pages/blog/[slug].astro
M	src/pages/branded-content.astro
M	src/pages/cases.astro
M	src/pages/comunicacao-integrada.astro
M	src/pages/contato.astro
M	src/pages/geo.astro
M	src/pages/ghostwriting.astro
M	src/pages/index.astro
M	src/pages/insights.astro
M	src/pages/media-training.astro
M	src/pages/metodo.astro
M	src/pages/midia-espontanea.astro
M	src/pages/news-patrocinada.astro
M	src/pages/newsjacking.astro
M	src/pages/o-que-e-data-pr.astro
M	src/pages/o-que-e-geo-pr.astro
M	src/pages/para-cmos.astro
M	src/pages/pep.astro
M	src/pages/pr-go-to-market.astro
M	src/pages/relacoes-publicas-para-startups.astro
M	src/pages/relacoes-publicas.astro
M	src/pages/reputacao.astro
M	src/pages/revops.astro
M	src/pages/roi.astro
```
