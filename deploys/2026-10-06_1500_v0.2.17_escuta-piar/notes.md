# Deploy v0.2.17 — escuta-piar

- **Quando:** 2026-10-06 15:00
- **Ambiente:** production (indexavel)
- **Commit:** 9cd1201 (branch escuta-piar)
- **Tag anterior:** v0.2.16
- **Arquivo pra arrastar no Netlify:** `site_v0.2.17.zip` (34.31 MB)
- **Rotas publicadas:** 39

## O que mudou desde o deploy anterior

**Página nova: `/escuta`, o formulário Escuta PiaR do PeP.** Oito perguntas, uma
por tela, para o cliente contar como a comunicação funciona por dentro antes de
recebermos o Mapa de Oportunidades. O resto do site não mudou.

- **Para onde vão as respostas:** cada envio vira uma linha na aba "Respostas" da
  planilha Google "Escuta_PiaR_Respostas" (conta da PiaR), via Apps Script
  publicado como App da Web. A aba "Painel" conta sozinha.
- **Como mandar para o cliente:** `piar.group/escuta?empresa=Nome da Empresa`
  já abre com o nome da empresa preenchido.
- **Fora da nav e do sitemap:** a página é um arquivo estático em
  `public/escuta/index.html`, então só chega nela quem recebe o link.
- **Quatro linhas no topo do arquivo original:** doctype, `lang`, `meta charset`
  e `meta viewport`. O original não tinha, e o Apache da hospedagem responde
  `text/html` sem charset: os acentos saíam quebrados na tela e nas opções
  enviadas à planilha (o Painel deixava de contar "Usamos e está bom" e
  "Queremos começar"), e no celular a página abria com largura de desktop.
  Visual e perguntas ficaram intactos.

### Conferido antes de subir

- As outras 38 páginas do build são idênticas, byte a byte, ao que estava no ar
  (v0.2.16), descontado o script de monitoramento que a GoDaddy injeta sozinha.
- O build saiu da branch `escuta-piar`, criada em cima de `themic-data-dezembro`
  (a v0.2.16). A `main` está parada antes da v0.2.8: não gerar deploy a partir
  dela antes de juntar essas branches.
- `dirty_at_build: true` no manifest se refere a 63 arquivos de carrossel em
  `outputs/`, marcados no git por outro trabalho. Não fazem parte do site.
- Onde subir: hoje o site roda no cPanel (GoDaddy), não no Netlify.

### Como conferir depois de subir

Abrir `piar.group/escuta` com Ctrl+F5: a faixa amarela "Prévia" não pode
aparecer, os acentos devem estar certos e, no celular, a página ocupa a tela.
Responder um teste, ver a linha nova na aba "Respostas" e a contagem no
"Painel", e depois apagar a linha de teste.

### Arquivos alterados (git)

```
M	deploys/2026-09-30_1451_v0.2.16_themic-data-dezembro/notes.md
A	public/escuta/index.html
```
