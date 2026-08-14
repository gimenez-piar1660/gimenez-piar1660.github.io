# Tier C · Rodada 3 (fechamento) — "?" retórico, número no meta e ItemList

> **Data:** 2026-06-30 · **Status:** aplicado com sign-off do Danilo · build verde (32 páginas)
> **Escopo:** fecha as pendências da linha 59 do doc da R1 (`2026-06-29-tier-c-r1-abstracts.md`). R1 (abstracts) e R2 (cross-links de insight) já estavam commitados. Esta rodada encerra o Tier C.

---

## A · Matar o "?" retórico (item banido na Voz v2, seção 7 do GEO-SEO-PIAR)

FAQ (`q: '...?'`) é Q&A estruturado, permanece. O tique mora na copy corrida.

### A1 · news-patrocinada (passo 01)
- **Antes:** "A pauta tem gancho jornalístico? Leve à redação como earned media. Não tem, mas tem valor para o leitor? Avalie o pago. Essa triagem evita pagar pelo que sairia de graça."
- **Depois:** "Tem gancho jornalístico de verdade, a pauta vai à redação como earned media. Não tem gancho, mas tem valor real para o leitor, entra a rota paga. Essa triagem evita pagar pelo que sairia de graça."
- *Por quê:* dois condicionais declarativos, extraíveis (gancho → earned; sem gancho mas com valor → pago). Zero "?".

### A2 · newsjacking (passo 02, teste de relevância)
- **Antes:** 'Antes de mover, responda com honestidade: a marca tem autoridade legítima sobre o assunto? Se a resposta for "mais ou menos", pare. …'
- **Depois:** 'Antes de mover, um teste honesto de autoridade: a marca precisa ter peso legítimo sobre o assunto. Quando a resposta sincera é "mais ou menos", pare. …'

### A3 · newsjacking (FAQ "é antiético?", fecho da resposta)
- **Antes:** "…O critério ético é simples: a sua presença melhora a compreensão do leitor ou só usa a dor e a atenção alheias?"
- **Depois:** "…O critério ético é simples: ou a sua presença melhora a compreensão do leitor, ou só explora a dor e a atenção alheias. Newsjacking legítimo fica sempre do primeiro lado."

> **Mantido por julgamento:** newsjacking FAQ "como evitar parecer oportunista" usa três "?" entre parênteses como *checklist* funcional — lê como teste, não como tique. Permanece.

## B · Número no meta (regra GEO: fato + número + nome próprio)

### B1 · branded-content (era a única do cluster sem entidade nem fato no meta)
- **Antes:** "Guia de branded content pela lente de PR: o que é, como produzir passo a passo e por que conteúdo de marca constrói reputação e vira pauta."
- **Depois:** "Branded content é conteúdo de marca em padrão editorial, feito para informar o público e construir reputação. O que é, como produzir passo a passo e como vira pauta. Guia da PiaR Group, em PR desde 2013."
- *Por quê:* answer-first com a definição + entidade (PiaR Group) + fato (2013).

### B2 · newsjacking (meta)
- **Antes:** "…A PiaR trata como tática de Relações com Mídia, não como botão de pânico."
- **Depois:** "…A PiaR trata como tática de Relações com Mídia desde 2013, não como botão de pânico."
- *Por quê:* insere o fato (2013) sem quebrar a linha. As outras (news-patrocinada, midia-espontanea) já têm meta forte com entidade; não recebem "2013" para evitar repetição mecânica no cluster (anti-padrão da própria voz).

## C · ItemList no /insights (técnico, sem copy)

`CollectionPage` ganhou `mainEntity` → `ItemList` com `numberOfItems` + um `ListItem` por conteúdo do hub (posição, url canônica, título), gerado a partir da collection `pages`. Renderizado e verificado no build: 16 `ListItem`. Zero mudança visual.

---

## Verificação
- `npm run build` verde — 32 páginas, complete em ~6.4s.
- `dist/insights/index.html`: `"@type":"ItemList"`, `numberOfItems:16`, 16 `ListItem` com acentos preservados.

**Tier C completo.** Pendências de SEO/GEO restantes ficam no roadmap (seção 9 do GEO-SEO-PIAR): Wikidata Q-ID, páginas-entidade dedicadas, versão EN/hreflang.
