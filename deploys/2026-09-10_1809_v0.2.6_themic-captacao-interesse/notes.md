# Deploy v0.2.6 — themic-captacao-interesse

- **Quando:** 2026-09-10 18:09
- **Ambiente:** production (indexavel)
- **Commit:** 150f5d9 (branch main)
- **Tag anterior:** checkpoint/themic-antes-v2-2026-09-08
- **Arquivo pra arrastar no Netlify:** `site_v0.2.6.zip` (34.22 MB)
- **Rotas publicadas:** 36

## O que mudou desde o deploy anterior

**LP do THE MIC passa a captar interesse, sem valor na pagina.**

O link de pagamento nao foi liberado pelo banco e nao tem data. Como a
divulgacao de data e local saiu em 10/09, a pagina deixa de vender direto:
a pessoa pede as informacoes e o comercial apresenta as condicoes na
conversa. Aplica o briefing THE_MIC_LP_ajustes_Rafa_10set.

O que olhar nesta versao, em /themic:

1. **O valor saiu do ar.** O card da ficha tecnica mostra "Sob consulta" e
   "Em ate 3x, condicoes apresentadas na conversa". Nenhuma mencao a
   10.000 em lugar nenhum da pagina. O que a vaga inclui e o bloco "Para
   empresas" continuam iguais.
2. **Os cinco CTAs dizem "Quero saber mais"** (hero, ficha tecnica,
   fechamento, barra fixa e o botao do formulario). Nenhum fala em
   comprar, pagar ou garantir vaga.
3. **O formulario tem um botao so na etapa 2.** Saiu o "Prefiro falar com
   alguem antes": sem checkout, as duas saidas levavam ao mesmo lugar. A
   tela de sucesso mostra "Recebemos seu contato."

Rastreamento conferido no Chrome headless com o fetch interceptado, sem
criar lead na base: as duas conversoes disparam (piar-lp-themic-passo-1 na
etapa 1 e piar-lp-themic na etapa 2) e os 18 campos do formulario chegam
completos, com cf_acao_final fixo em "Quer saber mais".

**Pendente, e nao e codigo:** criar no painel do RD a conversao
piar-lp-themic-passo-1 e os campos personalizados cf_estagio_empresa,
cf_objetivo_imersao, cf_disponibilidade_data, cf_poder_decisao e
cf_acao_final. Sem eles o RD responde 200 e descarta em silencio as cinco
respostas de perfil. O lead ainda entra com nome, e-mail, telefone,
empresa e UTM.

Quando o pagamento for liberado, preencher CHECKOUT_URL no topo de
src/pages/themic.astro e reativar a linha comentada no submit.

### Arquivos alterados (git)

```
A	deploys/2026-09-01_1551_v0.2.4_logo-amarelo-240/manifest.json
A	deploys/2026-09-01_1551_v0.2.4_logo-amarelo-240/notes.md
M	public/brand/Logos/PIAR/PiaR Group_vertical_amarelo.png
A	public/brand/Logos/PIAR/PiaR Group_vertical_amarelo_728px.png
A	public/brand/lp/the-mic/auditorio-investidores-vc.jpg
A	public/brand/lp/the-mic/laura-gurgel-palco.jpg
M	src/pages/themic.astro
```
