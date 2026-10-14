# Deploy v0.2.19 — themic-2027

- **Quando:** 2026-10-14 14:20
- **Ambiente:** production (indexavel)
- **Commit:** 53ad41c (branch themic-2027)
- **Tag anterior:** v0.2.18
- **Arquivo pra arrastar no Netlify:** `site_v0.2.19.zip` (34.31 MB)
- **Rotas publicadas:** 39

## O que mudou desde o deploy anterior

**A `/themic` deixa de anunciar turma com data: a Edição 1 passa para 2027,
sem mês nem dias.** Aplica os 21 pontos do briefing "Alteração LP The Mic para
2027" (13/10/2026). O mês entra quando a data no Investidores.vc estiver
reservada.

- **Data:** sai dos nove lugares onde aparecia (selo e faixa do hero, Dia 1 e
  Dia 2 da programação, linha "Quando" da ficha, fechamento, bloco lateral do
  formulário, barra fixa e rodapé). Onde fazia sentido, entra "Primeira edição
  em 2027".
- **Frases que tinham deixado de ser verdade:** o título da ficha vira "O que
  já está definido.", a nota das cadeiras fala de "quem está na lista da
  Edição 1" (não existe vaga garantida) e o selo das cadeiras 03 e 04 vira "A
  confirmar para a Edição 1".
- **CTA:** o botão principal do hero e o da barra fixa passam a ser "Fazer o
  diagnóstico" e levam para `/diagnostico`. O formulário vira o segundo botão
  do hero ("Quero saber da Edição 1", contornado). Os botões da ficha, do
  fechamento e do formulário seguem "Quero saber mais".
- **Investimento:** "em até 3x" sai do hero e do cartão de investimento, que
  fica "Condições apresentadas na conversa". O preço segue fora da página.
- **Meta description e og:description:** sem "confirmada", agora com 2027 e o
  convite para o diagnóstico.

### O que muda no RD

- `cf_produto_interesse` passa a chegar como **"THE MIC · Edição 1 · 2027"**.
  Antes chegava com "2 e 3 de dezembro". Segmentação por esse campo deve usar
  "contém THE MIC · Edição 1".
- `cf_disponibilidade_data` tem pergunta e respostas novas: "Dois dias
  inteiros, presencial em São Paulo: isso caberia na sua agenda?", com **Sim**,
  **Depende da data** e **Dois dias é muito para mim**. As respostas antigas
  ("Sim, os dois dias", "Não, quero a próxima edição") eram sobre dezembro.
- Os identificadores de conversão (`piar-lp-themic`,
  `piar-lp-themic-passo-1`) e o nome dos campos não mudaram.

### Fora do site, ainda com dezembro

Bio e post fixado do Instagram, página da empresa no LinkedIn e qualquer
anúncio pago que cite a data.

### Como conferir depois de subir

Abrir `piar.group/themic` com Ctrl+F5: o selo do hero deve mostrar "Edição 1 ·
2027 · São Paulo" e o primeiro botão, "Fazer o diagnóstico". Rolar até o meio
da página: a barra fixa deve dizer "Diagnóstico de Autoridade · 2 minutos, de
graça".

### Arquivos alterados (git)

```
M	src/data/themic.ts
M	src/pages/themic.astro
```
