# Copy · Para CMOs na Voz PiaR v2 + andaime GEO

> **Data:** 2026-06-29 · **Status:** revisão para sign-off do Danilo (nada aplicado no `.astro` ainda)
> **Página:** `src/pages/para-cmos.astro` · **Verdito da auditoria:** NEEDS WORK · prioridade SEO/GEO **BAIXA** (página de persona)
> **O que NÃO muda:** o conceito-assinatura (o campo gravitacional / a marca acumula massa e atrai o mercado), a animação, o poço gravitacional, o tradutor, o visual. Mexo só na copy e no andaime de GEO. `canonical` e "470+" já vieram no Tier B.

## Por que entrou no "mexer"
1. **Tique de negação** ("PR não X. Faz Y.") em ~6 pontos.
2. **Aglomerado de perguntas retóricas** (linhas 209–213: "Foi pro LinkedIn? Entrou no site?…") + "E depois?" (206) + um **futuro do pretérito** ("custaria", 52).
3. Sem andaime GEO: sem abstract answer-first, sem FAQ/`FAQPage`, **nenhum link interno no corpo** (só /contato e /metodo no CTA).
4. Meta abre com o tique e sem fato.

## Decisão de voz (mesma régua da comunicação-integrada)
Mantenho **2 paralelos como estribos** — o H1 ("PR não empurra a venda. Constrói a massa que a atrai.") e o H2 do CTA ("Quem enxerga a pauta vê um trabalho. Quem enxerga o campo…") — e **as comparações conceituais** que sustentam o framework (mito-linha × campo; relatório de atividade × de impacto). Mato as **negações repetidas** e os **"?" retóricos**.

---

## A · Meta (título mantém)
- **A1 · `<title>` (59):** mantém `Para CMOs · O que marketing realmente espera de PR` (BaseLayout anexa "· PiaR Group").
- **A2 · `<meta>` (60) — CORRIGIR (tique + sem fato):**
  - **Antes:** "PR não empurra a venda: constrói a massa (reputação, autoridade, prova) que gera o campo gravitacional da marca e atrai o mercado. A tradução de PR para o idioma de receita, pipeline e ROI."
  - **Depois:** "Para o CMO, PR constrói a massa de reputação, autoridade e prova que reduz o custo de aquisição e a resistência da venda. A PiaR traduz comunicação para receita, pipeline e ROI desde 2013."
- **A3 · `description` do schema (328):** espelha A2.

---

## B · NOVO bloco: abstract answer-first (depois do herói)
```
Eyebrow: O que um CMO espera de PR
Parágrafo: "Para um CMO, o valor de PR está na massa que a marca acumula — reputação,
autoridade e prova — que reduz o custo de aquisição e a resistência da venda. Na PiaR, essa
comunicação roda como sistema de crescimento há 13 anos, ao lado de 470+ marcas."
```
Answer-first + 2 fatos (13 anos, 470+). Versão final sem travessão.

---

## C · Reescritas de voz

**MANTÉM:** H1 (77), CTA (311), e as comparações conceituais (179 mito×campo; 245 e 263 atividade×impacto).

- **C1 · punch (150):** "PR não é apêndice de marketing. É um dos motores…" → "PR é um dos motores que dão `<span class="warm">`massa`</span>` ao sistema, não um apêndice de marketing."
- **C2 · H2 (159):** "A liderança não pergunta sobre releases. Pergunta sobre receita." → "A liderança pergunta sobre receita, não sobre releases."
- **C3 · punch (169):** "…Se PR não se conecta a ele, não é falta de valor. É falta de tradução." → "…Quando PR não se conecta a ele, o que falta é `<span class="warm">`tradução`</span>`, não valor."
- **C4 · punch (188):** "PR não puxa o lead pela manga. Cria o campo…" → "PR cria o `<span class="warm">`campo`</span>` que faz o lead cair em direção à venda, em vez de puxá-lo pela manga."
- **C5 · H2 (196):** "PR não acelera só a aquisição. Reduz a resistência…" → "Além de acelerar a aquisição, PR reduz a `<span class="warm">`resistência`</span>` da venda."
- **C6 · H2 (206) — "?" retórico:** "Saiu na Forbes. E depois?" → "Saiu na Forbes. Agora começa a distribuição."
- **C7 · chips (209–213) — 5 "?" retóricos:** "Foi pro LinkedIn? / Entrou no site? / Virou conteúdo? / Virou prova social? / Foi pro deck comercial?" → vira o mapa de distribuição: "No LinkedIn / No site / Em conteúdo / Em prova social / No deck comercial".
- **C8 · punch (215):** "Se não foi, o ativo morreu no clipping." → "Sem isso, o ativo morre no clipping." (resto do parágrafo mantém)
- **C9 · card argumento (52) — "?" + futuro do pretérito:** "Quanto custaria comprar o mesmo espaço em mídia paga? Transforma PR de centro de custo em centro de retorno." → "O custo de comprar o mesmo espaço em mídia paga transforma PR de centro de custo em centro de retorno."

---

## D · NOVO: FAQ + `FAQPage` schema (perguntas que CMO de fato busca) + links internos

Resolve a ausência de links no corpo: costura **/roi, /comunicacao-integrada, /reputacao**.

1. **PR é custo ou investimento?**
   "PR é investimento quando a comunicação é tratada como construção de massa — reputação, autoridade e prova — que reduz o custo de aquisição e a resistência da venda. Vira custo quando fica presa no clipping, sem distribuição nem conexão com a meta de negócio."

2. **Como medir o ROI de PR?**
   "Conecte a comunicação a métricas que a liderança já acompanha: custo equivalente do espaço conquistado, backlinks e tráfego orgânico, share of voice e a redução de objeção no funil. O ponto não é contar matérias, e sim mostrar a massa que cada cobertura deixou. Veja [como calcular o ROI de assessoria de imprensa](/roi)."

3. **Qual a diferença entre PR e marketing?**
   "Marketing responde por demanda e receita no curto prazo; PR constrói a reputação e a autoridade que tornam essa demanda mais barata de capturar. As duas querem a mesma coisa e rendem mais integradas. Veja [comunicação integrada](/comunicacao-integrada)."

4. **PR ajuda a vender?**
   "Sim, de forma indireta e mensurável. O lead que chega depois de ler uma matéria em veículo confiável tem menos objeção e tende a pagar o preço cheio. A credibilidade que o comercial usa para fechar nasce da [reputação](/reputacao) construída na imprensa."

5. **PR ou mídia paga: o que vem primeiro?**
   "PR constrói a base de credibilidade; a mídia paga alavanca o que já tem tração. Investir só em tráfego sobre uma marca sem reputação encarece o CAC. A sequência saudável é massa primeiro, alavanca depois."

---

## E · Plano de aplicação (só depois do sign-off)
1. `const faq` no frontmatter.
2. Meta (A2) + schema (A3).
3. Abstract (B).
4. Reescritas C1–C9 (mantendo H1, CTA e as comparações conceituais).
5. Seção FAQ + `FAQPage` JSON-LD + CSS `.faq-item`.
6. `npm run build` verde.

> **Decisões suas:** (a) topa a régua (mantém H1/CTA/comparações, mata negações + "?" retóricos)? (b) aceita o abstract (B)? (c) aprova as 5 FAQs (D) e os links /roi, /comunicacao-integrada, /reputacao?
