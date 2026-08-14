# Tier C · Rodada 1 — abstracts answer-first nas páginas-definição de maior valor

> **Data:** 2026-06-29 · **Status:** revisão para sign-off do Danilo
> **Escopo:** os 2 maiores ganhos de GEO do Tier C — dar à `reputacao` o termo de busca comercial que falta ("gestão de reputação digital") e à `o-que-e-data-pr` a definição answer-first que hoje só existe na FAQ. Toque leve, sem reescrever as páginas. Mesmo padrão de bloco abstract usado no Tier A e na /geo.

---

## A · reputacao.astro

A FAQ já responde "O que é gestão de reputação digital?" — mas o termo (busca comercial forte) **não está no título nem no topo**. Vamos promovê-lo.

### A1 · `<title>` (127)
- **Antes:** "Reputação na busca, na mídia e na IA"
- **Depois:** "Gestão de reputação digital: na busca, na mídia e na IA"
- *Por quê:* lidera com o termo-cabeça, mantém a tríade. (BaseLayout anexa "· PiaR Group".)

### A2 · `<meta>` (128) + `description` do schema
- **Antes:** "A PiaR Group gerencia reputação para startups e empresas de tecnologia controlando como sua marca aparece no Google, na mídia e nas respostas de IA. Monitorar é só enxergar; nós mudamos o que está escrito."
- **Depois:** "Gestão de reputação digital é controlar como a sua marca aparece no Google, na mídia e nas respostas de IA. A PiaR faz isso para startups e empresas de tecnologia desde 2013."
- *Por quê:* answer-first com o termo + fato (2013). (O schema Article espelha.)

### A3 · NOVO bloco abstract (entra depois do herói, antes de "Semântica")
`section paper`:
```
Eyebrow: O que é gestão de reputação digital
Parágrafo: "Gestão de reputação digital é controlar como a sua marca aparece nos lugares onde
a decisão sobre ela é tomada: a busca do Google, a cobertura da imprensa e as respostas de
inteligência artificial. Vai além de monitorar reviews e sentimento; constrói prova pública
verdadeira para que a versão correta da sua história seja a que o mercado encontra. A PiaR
faz isso para startups e empresas de tecnologia desde 2013."
```
(O H1 poético "Reputação é o que o mercado encontra sobre você sem você na sala" **fica** — o abstract entrega a definição extraível logo abaixo.)

---

## B · o-que-e-data-pr.astro

Hoje o herói é metáfora ("O dado certo já é a manchete") e a definição de Data PR só aparece na FAQ. Entra a definição answer-first no topo.

### B1 · NOVO bloco abstract (entra depois do herói, antes de "A VIRADA")
`section paper`:
```
Eyebrow: O que é Data PR
Parágrafo: "Data PR é a prática de transformar dados próprios e de mercado em pauta noticiável,
oferecida à imprensa por relacionamento e medida por métricas de negócio: alcance, share of
voice e ROI. Em vez de partir do release, parte de um número defensável que responde a uma
pergunta de interesse público. Na PiaR, roda com revisão jurídica no processo, desde 2013."
```
(Título e meta da data-pr já são answer-first com fato — sem mudança.)

---

## C · Plano de aplicação (só após sign-off)
1. reputacao: título (A1), meta + schema (A2), bloco abstract (A3).
2. o-que-e-data-pr: bloco abstract (B1).
3. `npm run build` verde.

> **Decisões suas:** (a) ok retitular a reputação para "Gestão de reputação digital…"? (b) aceita os 2 blocos abstract?
> **Próximas rodadas do Tier C (depois):** links cruzados entre as 4 páginas de insight; número no meta de algumas; "?" retórico solto (news-patrocinada/newsjacking); ItemList no /insights. Te aviso a cada rodada.
