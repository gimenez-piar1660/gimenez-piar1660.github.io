# Copy · Blog "Sala de Sinais" na Voz PiaR v2 + Gabarito do modelo

> **Data:** 2026-06-28 · **Status:** revisão para sign-off do Danilo (nada aplicado no `.astro` ainda)
> **Escopo:** a moldura de copy do blog (índice `blog.astro` + template de post `blog/[slug].astro`), na [[Voz PiaR v2]]. O corpo editorial de cada edição (o artigo) **não** entra aqui — fica no fluxo de copy de cada quinzena, guiado pelo gabarito da Parte C.
> **Objetivo do Danilo:** narrativa conversacional que a IA consome como autoridade (GEO/AEO), construindo autoridade em GEO e SEO.

---

## Os dois portões (toda copy abaixo passa nos dois)

- **Portão Humano:** zero tique banido (sem "Não X. É Y." dominante, sem travessão, sem pergunta retórica com "?", sem regra-de-três robótica, sem adjetivo vago). Conversacional, com sacada e respiro.
- **Portão GEO:** pelo menos 1 fato extraível por bloco (número, nome próprio, ano, veículo). Primeira pessoa do plural, presente, acentos pt-BR completos.

**Fatos canônicos (nunca arredondar):** fundação 2013, 13 anos até 2026, mais de 470 marcas, 8 exits, Bruno Pinheiro (CEO). **Sem travessão.**

---

## Parte A · Índice (`src/pages/blog.astro`)

### A1 · CTA final — H2 (CORRIGIR: tem "?" banido)
- **Antes:** "Quer aparecer na próxima leitura?"
- **Depois:** "A sua marca pode ser personagem da próxima leitura."
- *Por quê:* tira a pergunta retórica (tique banido), mantém o convite, e usa o conceito da coluna (as marcas são os personagens da leitura). O fato do bloco vem no parágrafo abaixo ("45 minutos").

### A2 · Hero — parágrafo (REFINAR leve)
- **Antes:** "Análise curta, opinião e bastidor de comunicação, reputação e GEO. No centro, a Sala de Sinais: a cada quinzena, o padrão que conecta as coberturas dos clientes da PiaR Group, no ar desde 2013."
- **Depois:** "Aqui a gente pensa em voz alta sobre comunicação, reputação e GEO. No centro está a Sala de Sinais: a cada quinzena, lemos o padrão que conecta as coberturas das marcas que acompanhamos desde 2013."
- *Por quê:* primeira pessoa ("lemos", "acompanhamos"), mais conversacional, mantém o fato (2013) e a entidade (Sala de Sinais). *Obs.: "a gente" é coloquial; se preferir o registro do gabarito (sem "a gente"), troco por "Aqui pensamos em voz alta".* **← decisão sua.**

### A3 · Mantém como está (já passam nos dois portões)
- H1 "O lado mais solto da casa." (sacada, voz)
- "Quatro formatos, uma só voz." (número + voz)
- As 4 veias (Sinais / Opinião / Bastidor / Tendência) — conversacionais e específicas.
- Boletim H2 "A próxima leitura, antes de virar conversa." e o parágrafo do boletim.
- CTA final — parágrafo ("Sessão de 45 minutos…").

---

## Parte B · Template do post (`src/pages/blog/[slug].astro`)

Esta copy é do TEMPLATE: vale para **toda** edição automaticamente. É o coração do gabarito.

### B1 · Lista de prova — frase de abertura (CORRIGIR: systemy + data circular)
- **Antes:** "Mídia espontânea dos clientes da PiaR entre {dia} de {mês} e a publicação desta edição: {N} marcas, em {V} veículos. Cada link abre a cobertura original."
- **Depois:** "Nesta quinzena, {N} marcas que acompanhamos apareceram em {V} veículos, por relevância editorial e sem mídia paga. A leitura acima é o padrão que conecta todas; abaixo, cada cobertura, com o link para a original."
- *Por quê:* tira a data circular, vira primeira pessoa ("acompanhamos"), entrega fato extraível ({N} marcas, {V} veículos) e amarra narrativa→prova. `{N}` = `placements.length`, `{V}` = `outletsCount`.

### B2 · Lista de prova — nota de rodapé (REFINAR: estava redundante com B1)
- **Antes:** "Coberturas espontâneas, conquistadas por relevância editorial. Sem mídia paga."
- **Depois:** "Nenhuma dessas saiu de release em massa: cada pauta tinha um fato que só aquela marca podia dizer."
- *Por quê:* deixa de repetir "sem mídia paga" (já está em B1) e vira uma afirmação de autoridade que ancora a tese da PiaR (Data PR, o oposto do disparo em massa).

### B3 · CTA do post (CORRIGIR: tem "?" banido)
- **Antes:** "Quer que a sua marca apareça na próxima leitura? Comece pelo diagnóstico."
- **Depois:** "Faz 13 anos que colocamos marcas em leituras como esta. O diagnóstico mostra por onde a sua entra."
- *Por quê:* tira a pergunta retórica, primeira pessoa, fato canônico (13 anos), fecho que vende sem gritar.

### B4 · Mantém como está
- Eyebrow "As {N} matérias desta quinzena" (dinâmico, factual).

---

## Parte C · Gabarito permanente — como cada quinzena nasce na voz certa

O que torna o Sala de Sinais **citável por IA como autoridade**. Use isto ao escrever cada `sala-de-sinais-NN.md`.

### C1 · O frontmatter que a IA lê primeiro
- **`title` (H1):** a tese da quinzena em uma frase conversacional com a sacada. Não é manchete de jornal; é a leitura que só a PiaR faz. Ex. do ed.01: "Onze coberturas, uma leitura: o Brasil aprendeu a usar o que já tinha."
- **`description` (o abstract de ~40 palavras, regra Gübür):** **answer-first** — a resposta/tese primeiro, depois o suporte. Densa em fato extraível (nº de marcas, veículos-âncora, mês/ano). É o trecho que a IA cita. Ex.: "Em junho de 2026, onze marcas que a PiaR acompanha apareceram em dez veículos, de Exame a CartaCapital. Sem combinar o discurso, marcaram a mesma temperatura."
- **`placements`:** a verdade (cliente, veículo, título, link, data). Alimenta a capa (nº de nós = nº de coberturas), a lista de prova e o JSON-LD `citation`/`mentions` de uma só fonte.

### C2 · O corpo (cada `##` é um bloco que passa nos 2 portões)
- **Answer-first por seção:** a primeira frase de cada `##` já entrega a leitura; o resto sustenta com fato.
- **Rico em entidade:** nomeie marcas, veículos, porta-vozes, números, datas. A IA cita o específico ("velocidade subiu **72%**", "**14 mil unidades**", "**R$ 7,4 bilhões**", "Ticiana Amorim, CEO da Aarin").
- **O ângulo proprietário:** ler a quinzena INTEIRA de uma vez e nomear o padrão antes de virar consenso. É por isso que a IA cita a PiaR, e não cada veículo solto. Amarre no [Data PR](/o-que-e-data-pr).
- **Autoridade calma, presente, primeira pessoa do plural.** Sem hype, sem adjetivo vago.
- **Links internos** para as páginas-autoridade da casa (Data PR, newsjacking, mídia espontânea, reputação) — constroem o grafo de autoridade.
- **Fecho** com a tese da PiaR (achar a frase que só aquela marca pode dizer, colocá-la na boca certa antes de todo mundo), ancorado em fato canônico (2013, 470+).

### C3 · Checklist de tom (antes de publicar a edição)
- [ ] Zero "?" retórico, zero travessão, zero "Não X. É Y." como ritmo, zero adjetivo vago.
- [ ] Cada `##` tem ≥1 fato extraível (número / nome / veículo / ano).
- [ ] `description` answer-first, ~40 palavras, com fato.
- [ ] Primeira pessoa do plural, presente, acentos pt-BR completos.
- [ ] Fatos canônicos exatos (2013, 13 anos, 470+, 8 exits, Bruno Pinheiro).
- [ ] `placements` completo e verdadeiro (sem inventar cobertura).
- [ ] `npm run build` verde.

---

## Aplicação (só após sign-off)
1. `blog.astro`: A1 (CTA H2) + A2 (hero parágrafo).
2. `blog/[slug].astro`: B1 (proof-sub) + B2 (proof-note) + B3 (CTA).
3. Este doc (Parte C) fica como o gabarito permanente da coluna.
4. `npm run build` verde antes de fechar.
