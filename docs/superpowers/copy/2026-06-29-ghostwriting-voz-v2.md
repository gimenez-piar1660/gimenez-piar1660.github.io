# Copy · Ghostwriting na Voz PiaR v2 + andaime GEO

> **Data:** 2026-06-29 · **Status:** revisão para sign-off do Danilo (nada aplicado no `.astro` ainda)
> **Página:** `src/pages/ghostwriting.astro` · **Verdito da auditoria:** NEEDS WORK · prioridade SEO/GEO **MÉDIA**
> **O que NÃO muda:** o conceito-assinatura (a lente gravitacional / o ghostwriter que dobra a sua luz), a animação do anel de Einstein, a dataviz da multiplicação, o visual. Mexo só na copy e no andaime de GEO. Mesmo padrão da media-training.

## Por que entrou no "mexer"
1. Tique "Não X. É Y." em 4 pontos (meta + 2 punches + schema).
2. **Dois "a gente"** (banido na voz): linhas 116 e 128.
3. Sem andaime GEO: sem abstract answer-first, sem FAQ/`FAQPage`, fato só no CTA.
4. Meta abre com o tique e não tem fato; título pode mirar um termo de busca real ("ghostwriting para executivos").

## Os 2 portões
```
[ ] Humano: zero "Não X. É Y." dominante · zero "a gente" · zero travessão/!/“?” retórico · sacada + respiro
[ ] GEO: definição answer-first + fato extraível · entidade nomeada · presente, 1ª pessoa plural
```
> Mantenho **um** contraste pontual (permitido): "Ghostwriting não escreve no seu lugar; faz a sua luz chegar onde ela não chegava." — é a tese da página, reescrita fora do template empilhado.

---

## A · Título e meta

### A1 · `<title>` (linha 38)
- **Antes:** `Ghostwriting · A sua voz, com alcance`
- **Depois:** `Ghostwriting para executivos: a sua voz, com alcance`
- *Por quê:* mira o termo de busca "ghostwriting para executivos" (intenção comercial clara) e mantém o gancho. O BaseLayout anexa "· PiaR Group" sozinho — não coloco a marca manual.

### A2 · `<meta description>` (linha 39) — **CORRIGIR: abre com o tique, sem fato**
- **Antes:** "Ghostwriting não é escrever no seu lugar: é dobrar a sua luz para a sua voz chegar longe. Como a PiaR transforma a sua experiência em artigos, posts e falas de palco que constroem liderança de opinião, sempre na sua voz."
- **Depois:** "Ghostwriting é a escrita de artigos, posts e falas no nome e na voz de um executivo ou fundador, para construir liderança de opinião. A PiaR escreve na sua voz desde 2013, e o crédito é sempre seu."
- *Por quê:* answer-first (define o termo na 1ª frase), fato (2013), sem o tique. Fato: 2013.

### A3 · `description` do schema Article (linha 199) — **mesmo tique**
- **Antes:** "Ghostwriting não é escrever no seu lugar. É dobrar a sua luz…"
- **Depois:** igual à nova meta (A2), pra crawler e página falarem a mesma língua.

---

## B · NOVO bloco: abstract answer-first (entra depois do herói)

Bloco curto novo (`section dark tight`, já existe na página), entre o herói e "O ATRITO":
```
Eyebrow: O que é ghostwriting
Parágrafo: "Ghostwriting é a escrita de conteúdo — artigos, posts, falas de palco,
newsletters — no nome e na voz de outra pessoa, em geral um executivo ou fundador, para
construir autoridade e liderança de opinião. Na PiaR, o crédito é sempre seu: escrevemos na
sua voz há 13 anos, ao lado de 470+ marcas."
```
- *Por quê:* a definição citável que hoje não existe (o herói é só metáfora). Answer-first + 2 fatos (13 anos, 470+). **Versão final sem travessão** (uso parênteses/vírgula). Usa `{site.yearsOperating}` e `{site.brandsServed}`.

---

## C · Reescritas de voz

### C1 · Punch "O sistema" (linha 106) — tique → vira o contraste pontual
- **Antes:** "Não é escrever no seu lugar. É fazer a sua luz `<span class="warm">`chegar onde ela não chegava`</span>`."
- **Depois:** "Ghostwriting não escreve no seu lugar; faz a sua luz `<span class="warm">`chegar onde ela não chegava`</span>`."

### C2 · H2 "Matéria-prima" (linha 116) — **"a gente"**
- **Antes:** "Ninguém inventa a sua autoridade. A gente extrai."
- **Depois:** "Ninguém inventa a sua autoridade. Nós a extraímos."

### C3 · Lede "Matéria-prima" (linha 117) — antítese
- **Antes:** "Ghostwriting bom não inventa um personagem. Garimpa o que só você tem e devolve no papel, com a sua digital."
- **Depois:** "Ghostwriting bom garimpa o que só você tem e devolve no papel, com a sua digital."

### C4 · Punch "Matéria-prima" (linha 128) — **"a gente"**
- **Antes:** "A voz é sua. A gente só faz ela `<span class="warm">`caber em texto`</span>`."
- **Depois:** "A voz é sua. Nós só fazemos ela `<span class="warm">`caber em texto`</span>`."

### C5 · Punch "O que destrava" (linha 164) — tique
- **Antes:** "Liderança de opinião não é quem fala mais. É quem é `<span class="warm">`lembrado primeiro`</span>`."
- **Depois:** "Liderança de opinião é de quem é `<span class="warm">`lembrado primeiro`</span>`, não de quem fala mais."

---

## D · NOVO: FAQ + `FAQPage` schema (maior ganho de GEO)

Seção de FAQ antes do CTA, com `FAQPage` JSON-LD ao lado do `Article`. Costura links internos para **/reputacao** e **/relacoes-publicas**.

1. **O que é ghostwriting?**
   "Ghostwriting é a escrita de conteúdo no nome e na voz de outra pessoa, em geral um executivo ou fundador: artigos, posts, falas de palco e newsletters. O autor mantém o crédito e a assinatura; o trabalho de escrever fica nos bastidores."

2. **Ghostwriting é ético?**
   "Sim, quando o conteúdo nasce das ideias, da experiência e do ponto de vista de quem assina. O ghostwriter dá forma ao que já é seu, não inventa opinião nem atribui a você o que você não pensa. É a mesma prática de discursos e artigos de liderança usada há décadas."

3. **Ghostwriting para executivos: como funciona?**
   "Começa por conversas que extraem a sua trajetória, a sua tese e os bastidores que só você viveu. A PiaR transforma trinta minutos de conversa em um mês de presença: o mesmo ponto de vista vira artigo, post, fala de palco e newsletter, sempre na sua voz."

4. **Quanto custa um ghostwriting?**
   "O investimento depende do volume e da cadência (quantas peças por mês), dos canais e do envolvimento dos porta-vozes. Na PiaR, o valor é definido sob consulta, a partir de um diagnóstico do momento e dos objetivos de autoridade."

5. **Qual a diferença entre ghostwriting e assessoria de imprensa?**
   "Assessoria de imprensa conquista cobertura em veículos de terceiros; ghostwriting constrói a voz própria do executivo nos canais dele. Os dois se reforçam: a autoridade publicada na sua voz sustenta a [reputação](/reputacao) e abre porta para a [imprensa](/relacoes-publicas)."

---

## E · Plano de aplicação (só depois do seu sign-off)
1. Frontmatter: novo `const faq = [...]` (as 5 Q&As do bloco D).
2. Título (A1) + meta (A2) + `description` do schema (A3).
3. Novo bloco abstract (B) entre herói e "O ATRITO".
4. Reescritas C1–C5.
5. Nova seção FAQ (`faq.map`) antes do CTA + `FAQPage` JSON-LD + CSS de `.faq-item` (mesma da media-training).
6. `npm run build` verde.

> **Decisões suas:** (a) título "Ghostwriting para executivos…" ok? (b) aceita o bloco abstract (B)? (c) aprova as 5 FAQs (D) e os links /reputacao + /relacoes-publicas?
