# Deploy v0.2.16 — themic-data-dezembro

- **Quando:** 2026-09-30 14:51
- **Ambiente:** production (indexavel)
- **Commit:** 06424bf (branch themic-data-dezembro)
- **Tag anterior:** v0.2.15
- **Arquivo pra arrastar no Netlify:** `site_v0.2.16.zip` (34.28 MB)
- **Rotas publicadas:** 38

## O que mudou desde o deploy anterior

**A data do THE MIC voltou à `/themic`: 2 e 3 de dezembro de 2026, quarta e
quinta, das 8h às 20h.** Ela aparece exatamente nos lugares de onde a data de
outubro tinha saído na v0.2.12:

- **Hero:** selo "Edição 1 · 2 e 3 de dezembro · São Paulo" e a faixa de baixo.
- **Programação:** "Dia 1 · 2 de dezembro" e "Dia 2 · 3 de dezembro".
- **Ficha técnica:** o título volta a ser "A primeira turma tem data." e a
  linha "Quando" volta, com o dia da semana e o horário.
- **Fechamento, bloco lateral do formulário, barra fixa e rodapé** (ano 2026).
- **Formulário:** a pergunta volta a ser "Você tem disponibilidade nos dias 2
  e 3 de dezembro?".
- **Meta description** (o texto do Google e das prévias de compartilhamento).

A `/diagnostico` continua sem data, de propósito, desde a v0.2.10.

### O que muda no RD

- `cf_produto_interesse` passa a chegar como **"THE MIC · Edição 1 · 2 e 3 de
  dezembro"**. Nas últimas 24 horas chegou como "THE MIC · Edição 1", e antes
  disso com a data de outubro. Segmentação que filtre por esse campo deve usar
  "contém THE MIC · Edição 1" para pegar as três fases.
- `cf_disponibilidade_data` volta a perguntar pelas datas. Quem respondeu entre
  29 e 30/09 respondeu à versão "consegue reservar dois dias inteiros"; quem
  respondeu antes disso respondeu sobre 22 e 23 de outubro. Vale reconfirmar a
  disponibilidade desses leads na conversa.

### Como conferir depois de subir

Abrir `piar.group/themic` com Ctrl+F5: o selo do hero deve mostrar "2 e 3 de
dezembro". Procurar "outubro" na página: zero resultados.

### Arquivos alterados (git)

```
M	deploys/2026-09-29_1513_v0.2.15_tag-lead-sitepiar/notes.md
M	src/data/themic.ts
M	src/pages/themic.astro
```
