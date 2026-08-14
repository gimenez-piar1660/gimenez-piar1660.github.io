# Copy · Comunicação Integrada na Voz PiaR v2 + andaime GEO

> **Data:** 2026-06-29 · **Status:** revisão para sign-off do Danilo (nada aplicado no `.astro` ainda)
> **Página:** `src/pages/comunicacao-integrada.astro` · **Verdito da auditoria:** NEEDS WORK · prioridade SEO/GEO **MÉDIA**
> **O que NÃO muda:** o conceito-assinatura (três corpos em órbita ressonante ao redor da marca), o campo animado, a dataviz das três ondas em fase, o visual. Mexo só na copy e no andaime de GEO. `canonical` e o hedge "470+" já foram corrigidos no sweep do Tier B.

## Por que entrou no "mexer"
1. **Antítese é o ritmo dominante:** quase todo punch/heading é um contraste binário ("Não X. É Y." / "X. Y."). É a maior concentração das 4 páginas do Tier A.
2. Sem andaime GEO: sem abstract answer-first, **sem FAQ/`FAQPage`** (a maior lacuna do cluster), fato só no CTA.
3. Meta abre com o tique e não tem fato.
4. Linkagem fraca: só /metodo e /contato, sem link para as três frentes que a própria página descreve (/relacoes-publicas, /branding, /reputacao).

## Decisão de voz: quebrar a repetição, manter 2 paralelos
A tese da página É um contraste (silos × sistema), então não dá pra zerar todo contraste sem matar o sentido. A regra que aplico: **de-templatizar os punches do meio** (viram declarativas ou contraste embutido numa frase só) e **manter 2 paralelos intencionais como estribos musicais** — o H1 e o punch do CTA. Eles ancoram o ritmo; o problema era a *repetição*, não a existência do contraste.

```
[ ] Humano: sem "Não X. É Y." repetido como ritmo · sem travessão/!/“?” retórico · musicalidade preservada
[ ] GEO: definição answer-first + fato · entidade nomeada · presente, 1ª pessoa plural · links irmãos
```

---

## A · Título e meta

### A1 · `<title>` (linha 37) — **mantém**
`Comunicação Integrada · Três frentes, um só sistema` → sem mudança (keyword na frente; o BaseLayout anexa "· PiaR Group").

### A2 · `<meta description>` (linha 38) — **CORRIGIR: abre com o tique, sem fato**
- **Antes:** "Relações públicas, branding e reputação não competem por orçamento: entram em órbita ressonante ao redor da marca e se amplificam. Como a PiaR conduz comunicação integrada como um sistema, não como peças soltas."
- **Depois:** "Comunicação integrada conduz relações públicas, branding e reputação como um sistema único, na mesma mensagem e no mesmo eixo, em vez de peças soltas que competem por orçamento. A PiaR integra essas três frentes desde 2013."
- *Por quê:* answer-first (define o termo), fato (2013), sem abrir no tique. Fato: 2013.

### A3 · `description` do schema Article (linha 207) — mesma correção (espelha A2).

---

## B · NOVO bloco: abstract answer-first (entra depois do herói)

`section dark tight`, entre o herói e "O ATRITO":
```
Eyebrow: O que é comunicação integrada
Parágrafo: "Comunicação integrada é conduzir relações públicas, branding e reputação como
um sistema único, com a mesma mensagem e o mesmo eixo, em vez de áreas isoladas que competem
por orçamento. Na PiaR, as três frentes giram a partir de dados há 13 anos, ao lado de 470+ marcas."
```
- Answer-first + 2 fatos (13 anos, 470+). Usa `{site.yearsOperating}` / `{site.brandsServed}`.

---

## C · Reescritas de voz (de-templatizar os punches do meio)

**MANTÉM (estribos musicais):** H1 (linha 57) "Sozinhas, competem por orçamento. Juntas, entram em ressonância." e o H2 do CTA (linha 190) "Quem contrata peças soltas paga três vezes. Quem contrata o sistema colhe o composto." — paralelos deliberados, não o template robótico.

### C1 · Punch "O sistema" (linha 109) — tique
- **Antes:** "Não é fazer mais. É fazer as três frentes girarem na `<span class="warm">`mesma órbita`</span>`."
- **Depois:** "Integrar é pôr as três frentes para girar na `<span class="warm">`mesma órbita`</span>`."

### C2 · Lede "As três frentes" (linha 120) — "Não são X. São Y."
- **Antes:** "Não são serviços empilhados num orçamento. São funções de um mesmo sistema, e cada uma devolve força para as outras duas."
- **Depois:** "São funções de um mesmo sistema, não serviços empilhados num orçamento, e cada uma devolve força para as outras duas."

### C3 · Punch "As três frentes" (linha 131) — paralelo que ecoa o H1
- **Antes:** "Separadas, são três contas. Juntas, são um único `<span class="warm">`campo`</span>`."
- **Depois:** "Juntas, as três deixam de ser três contas e viram um único `<span class="warm">`campo`</span>`."

### C4 · Punch "Ressonância" (linha 152) — antítese
- **Antes:** "Sinal fraco é três vozes desencontradas. Sinal forte é uma `<span class="warm">`só frequência`</span>`."
- **Depois:** "A marca aparece com força quando as três falam na `<span class="warm">`mesma frequência`</span>`."

### C5 · Punch "O que destrava" (linha 172) — tique
- **Antes:** "A conta não é PR mais branding mais reputação. É o que os três `<span class="warm">`fazem juntos`</span>`."
- **Depois:** "A conta não é a soma de PR, branding e reputação; é o que os três `<span class="warm">`fazem juntos`</span>`."

### C6 · H2 "A virada" (linha 180) — tique
- **Antes:** "Marca forte não tem a melhor peça. Tem o melhor `<span class="warm">`sistema`</span>`."
- **Depois:** "Marca forte se faz com o melhor `<span class="warm">`sistema`</span>`, não com a melhor peça avulsa."

---

## D · NOVO: FAQ + `FAQPage` schema (a maior lacuna) + links irmãos

Seção FAQ antes do CTA, com `FAQPage` JSON-LD. As respostas costuram os links que faltavam: **/relacoes-publicas, /branding, /reputacao, /pep**.

1. **O que é comunicação integrada?**
   "Comunicação integrada é conduzir relações públicas, branding e reputação como um sistema único, com uma só mensagem e um só eixo, em vez de áreas isoladas que competem por orçamento. O objetivo é que cada frente devolva força para as outras duas."

2. **Qual a diferença entre comunicação integrada e ter várias agências?**
   "Várias agências geram três metas, três relatórios e uma mensagem partida por canal. A comunicação integrada coloca [relações públicas](/relacoes-publicas), branding e [reputação](/reputacao) sob o mesmo objetivo, então a verba compõe em vez de competir."

3. **O que a comunicação integrada da PiaR inclui?**
   "Três frentes: relações públicas (a imprensa que distribui autoridade), [branding](/branding) (a coerência que faz a marca ser reconhecida) e reputação (a confiança que sustenta preço e segura crise). Tudo a partir de dados e da mesma narrativa."

4. **Vale mais a pena integrar ou contratar serviços separados?**
   "Serviços separados costumam cobrar três vezes e entregar uma marca fragmentada. Um sistema integrado rende o efeito composto: o que vira notícia também vira branding, prova social e argumento de venda. A PiaR integra as três frentes desde 2013."

5. **Comunicação integrada e o método PEP são a mesma coisa?**
   "Não. Comunicação integrada é o princípio de alinhar as frentes; o [PEP](/pep) é a metodologia da PiaR que executa esse princípio em projetos, com vetores editoriais coordenados. Um é a ideia, o outro é o motor."

---

## E · Plano de aplicação (só depois do seu sign-off)
1. Frontmatter: novo `const faq = [...]`.
2. Meta (A2) + `description` do schema (A3).
3. Bloco abstract (B).
4. Reescritas C1–C6 (mantendo H1 e CTA).
5. Seção FAQ (`faq.map`) + `FAQPage` JSON-LD + CSS `.faq-item`.
6. `npm run build` verde.

> **Decisões suas:** (a) topa manter H1 e CTA como os 2 paralelos e de-templatizar o resto? (b) aceita o bloco abstract (B)? (c) aprova as 5 FAQs (D) e os links /relacoes-publicas, /branding, /reputacao, /pep?
