# Deploy v0.2.18 — escuta-obrigatorias

- **Quando:** 2026-10-06 16:18
- **Ambiente:** production (indexavel)
- **Commit:** c98328b (branch escuta-piar)
- **Tag anterior:** v0.2.17
- **Arquivo pra arrastar no Netlify:** `site_v0.2.18.zip` (34.31 MB)
- **Rotas publicadas:** 39

## O que mudou desde o deploy anterior

**`/escuta`: respostas obrigatórias e fim do envio pelo Enter.** Só a página do
formulário mudou. O resto do zip é igual à v0.2.17, menos a data do sitemap.

- **Enter não envia mais o formulário.** Na v0.2.17, apertar Enter num campo (ou
  "Ir" no teclado do celular) pulava as perguntas, mostrava o "Obrigado" e
  gravava uma linha vazia na planilha. Agora o Enter funciona como "Continuar".
- **Obrigatórias:** telas 01 a 07, ou seja, identificação, perguntas abertas
  02, 03, 04, 06 e 07, e uma opção marcada em cada frente. O aviso das frentes
  diz quais faltam. Seguem opcionais os comentários das frentes, a "Outra
  frente" e a 08 (espaço livre).
- **Frentes na planilha:** cada coluna de frente recebe "Opção — comentário"
  na mesma célula (ou só a opção, sem comentário). Isso já funcionava; o
  comentário parecia não chegar porque as linhas do modelo da planilha vieram
  com altura fixa de uma linha e escondiam a segunda linha do texto. Na
  planilha: selecionar as linhas, Redimensionar linhas, Ajustar aos dados.
- **Visual:** sem erro, as 10 telas são idênticas pixel a pixel à v0.2.17
  (celular e desktop). O aviso só aparece quando falta resposta.

### Como subir

Basta substituir `public_html/escuta/index.html` no cPanel pelo
`dist/escuta/index.html` deste build.

### Como conferir depois de subir

Abrir `piar.group/escuta` com Ctrl+F5, clicar em Continuar sem responder (deve
bloquear com aviso) e apertar Enter no campo Nome vazio (deve continuar na tela
01, sem ir para o "Obrigado"). Depois, responder tudo e conferir a linha na
aba "Respostas".

### Arquivos alterados (git)

```
M	public/escuta/index.html
```
