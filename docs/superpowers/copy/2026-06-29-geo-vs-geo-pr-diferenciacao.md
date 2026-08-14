# Reescopo · /geo (pilar) × /o-que-e-geo-pr (ângulo PR) — fim da canibalização

> **Data:** 2026-06-29 · **Status:** revisão para sign-off do Danilo (Fase 1 — canonical + dedup das gêmeas — já aplicada e commitada em `a972db2`)
> **Objetivo:** as duas páginas hoje têm quase a mesma espinha e brigam pela mesma busca. Vamos dar a cada uma um papel claro, de-duplicar os trechos idênticos e cruzá-las, pra o Google ler "pilar + recorte", não "duplicata".

## Os papéis
- **/geo = PILAR "O que é GEO"** — a disciplina ampla (Generative Engine Optimization), topo de funil, todos os públicos. É a casa da definição e da tabela SEO × GEO × GEO PR.
- **/o-que-e-geo-pr = ÂNGULO PiaR** — GEO operado por relações públicas (o recorte proprietário: "menção na imprensa > backlink", earned media). Aprofunda o que o pilar só apresenta.

> O que o Google lê como "não são duplicatas": **títulos distintos + links recíprocos com escopo claro + FAQ que se diferencia**. É nisso que o doc foca; a de-dupe de 1-2 ledes idênticos entra de bônus.

---

## A · Mudanças na /geo (vira o PILAR)

### A1 · Título e meta — mirar "o que é GEO"
- **Título antes:** "GEO: a IA cita quem a imprensa já cita"
- **Título depois:** "O que é GEO: como a IA cita a sua marca" — captura a busca definicional "o que é GEO". (BaseLayout anexa "· PiaR Group".)
- **Meta antes:** "GEO (Generative Engine Optimization) faz a sua marca ser citada por ChatGPT, Gemini, Perplexity e AI Overviews. A PiaR trata isso como comunicação, não como ajuste técnico de página."
- **Meta depois:** "GEO (Generative Engine Optimization) é o trabalho de fazer a sua marca ser citada nas respostas de ChatGPT, Gemini, Perplexity e AI Overviews, não só listada na busca. Guia do que é, como difere de SEO e como se mede. Desde 2013."
- *Por quê:* answer-first definicional + fato (2013); posiciona como guia/pilar.

### A2 · NOVO bloco abstract (a definição citável que falta no topo)
Hoje o herói da /geo é poético e a definição limpa só está na FAQ. Entra um bloco `section paper` logo após o herói:
```
Eyebrow: O que é GEO
Parágrafo: "GEO (Generative Engine Optimization) é o conjunto de práticas para fazer uma marca
ser citada nas respostas de mecanismos generativos — ChatGPT, Gemini, Perplexity, AI Overviews —
quando alguém pergunta quem lidera um setor ou qual fornecedor contratar. Diferente do SEO, que
disputa a posição de um link, o GEO disputa a citação dentro da resposta pronta. Na PiaR, GEO é
tratado como reputação: a IA cita quem a imprensa de autoridade já cita."
```
(answer-first, define + diferencia de SEO; fica a definição que a IA extrai.)

### A3 · Cross-link DESCENDO para o recorte PR
Na seção "Por que é PR" (já existe), acrescento uma frase com link:
- "O recorte que a PiaR opera tem nome e página própria: **[GEO PR](/o-que-e-geo-pr)** — GEO construído por relações públicas e earned media."

### A4 · FAQ — adicionar a pergunta-ponte
Nova FAQ no fim da lista: **"Qual a diferença entre GEO e GEO PR?"** → "GEO é a disciplina ampla de tornar a marca citável pela IA, com foco também no conteúdo do próprio domínio. GEO PR é o recorte operado por relações públicas, que constrói o sinal externo: a menção em mídia de autoridade. Veja [GEO PR](/o-que-e-geo-pr)." (a /o-que-e-geo-pr já tem o espelho dessa pergunta — fecha o par.)

---

## B · Mudanças na /o-que-e-geo-pr (vira o ÂNGULO PR)

### B1 · Linha de escopo + cross-link SUBINDO (logo após o H1 da definição)
Acrescento uma frase no lede da seção "A definição":
- "GEO PR é o recorte de relações públicas do GEO. Para o panorama geral — o que é GEO e como SEO, GEO e GEO PR se diferenciam — veja **[o que é GEO](/geo)**."
- *Por quê:* declara o papel (recorte) e manda o leitor/Google ao pilar para a parte ampla, em vez de repeti-la.

### B2 · Seção "Três camadas" — deferir a comparação completa ao pilar
A tabela SEO × GEO × GEO PR é idêntica à da /geo. Aqui ela vira mais enxuta e aponta pra casa dela:
- Lede atual: "Os três termos se confundem... A diferença está na fonte do sinal..."
- Lede depois: "Aqui o foco é a terceira camada, a que a PiaR opera. A comparação completa entre SEO, GEO e GEO PR está em [o que é GEO](/geo); abaixo, por que a camada de PR é a mais difícil de fabricar."
- *(Mantém os 3 cards, mas o texto deixa claro que o aprofundamento da disputa de camadas mora no pilar.)*

### B3 · FAQ "GEO PR vs GEO" — adicionar o link
A pergunta já existe ("Qual a diferença entre GEO PR e GEO?"). Acrescento ao fim da resposta: "Veja o panorama em [o que é GEO](/geo)."

---

## C · De-dupe do trecho mais idêntico (bônus)
A dataviz "A unidade de valor não é o link. É a afirmação atribuível" tem lede quase palavra-a-palavra nas duas. Diferencio:
- **/geo (pilar):** versão mais geral/definicional (vale para qualquer marca): "Quando uma fonte de autoridade afirma um fato sobre a sua empresa, esse texto é o que o modelo lê, associa e pode repetir."
- **/o-que-e-geo-pr (PR):** mantém a versão específica de PR (veículo publica que opera no setor X, citada como referência em Y) — é o terreno dela.

---

## D · Plano de aplicação (só após sign-off)
1. /geo: título + meta (A1), bloco abstract (A2), cross-link na seção PR (A3), FAQ-ponte (A4), de-dupe da lede (C).
2. /o-que-e-geo-pr: linha de escopo + link (B1), lede das camadas (B2), link na FAQ (B3), manter a lede PR (C).
3. `npm run build` verde.

> **Decisões suas:** (a) topa os 2 papéis (geo = pilar amplo, o-que-e-geo-pr = recorte PR)? (b) aceita o bloco abstract novo na /geo (A2)? (c) ok cruzar as duas com as FAQs-ponte e as linhas de escopo?
