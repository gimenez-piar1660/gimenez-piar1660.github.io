# Deploy v0.2.12 — themic-sem-data

- **Quando:** 2026-09-29 10:01
- **Ambiente:** production (indexavel)
- **Commit:** 2fac00e (branch themic-sem-data)
- **Tag anterior:** v0.2.11
- **Arquivo pra arrastar no Netlify:** `site_v0.2.12.zip` (34.24 MB)
- **Rotas publicadas:** 37

## O que mudou desde o deploy anterior

**A data do THE MIC saiu da `/themic`.** Nenhum dia, mês ou ano da Edição 1
aparece mais na página. Onde estava:

- **Hero:** o selo virou "Edição 1 · São Paulo" e a faixa de baixo ficou com
  bairro e turma.
- **Programação:** os cards dizem só "Dia 1" e "Dia 2".
- **Ficha técnica:** saiu a linha "Quando". O horário (das 8h às 20h) foi para
  "Formato", e o título virou "A primeira turma já tem endereço."
- **Fechamento:** o parágrafo abre direto em "Estar na primeira edição...".
- **Formulário:** o bloco lateral mostra só o bairro, e a pergunta de
  disponibilidade virou "Você consegue reservar dois dias inteiros para a
  imersão?".
- **Barra fixa:** "Edição 1 · Brooklin, São Paulo".
- **Rodapé e meta description:** sem o ano e sem a data.

A `/diagnostico` já não mostrava data desde a v0.2.10 e não mudou.

### O que muda no RD

- `cf_produto_interesse` passa a chegar como **"THE MIC · Edição 1"**. Antes
  vinha com a data no fim. Se alguma segmentação ou automação filtra pelo valor
  exato antigo, os leads novos ficam de fora dela: trocar o filtro para
  "contém THE MIC · Edição 1".
- `cf_disponibilidade_data` continua com o mesmo nome e as mesmas respostas
  ("Sim, os dois dias" / "Não, quero a próxima edição"). Só a pergunta mudou, e
  o valor agora quer dizer "consegue reservar dois dias", não "pode nessas
  datas".

### Como conferir depois de subir

Abrir `piar.group/themic` com Ctrl+F5 e procurar "outubro": zero resultados.

### Arquivos alterados (git)

```
M	deploys/2026-09-23_1343_v0.2.11_rd-campos-como-string/notes.md
M	src/data/themic.ts
M	src/pages/themic.astro
```
