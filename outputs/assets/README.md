# Assets visuais da landing page "O essencial"

Inventário completo do que aparece em `../lp-piar-essencial.html`.

A página não usa nenhuma imagem: nada de PNG, JPG, WebP ou GIF, e nenhuma
requisição de imagem para fora. Tudo que é visual foi desenhado com SVG inline,
CSS ou tipografia. Este diretório guarda uma cópia de cada peça como arquivo
independente, para reuso em apresentações, propostas e outras páginas.

Todos os SVG usam `stroke="currentColor"` com um `style="color:#0F0F11"` no
elemento raiz: abrindo o arquivo sozinho ele já sai no preto PiaR, e ao colar
dentro de uma página o `style` pode ser removido para o ícone herdar a cor do
contexto.

---

## 1. Ícones de conteúdo (`icones/`)

Os quatro corpos que a gravidade da marca puxa. Grade de 24, traço 1.7.

| Arquivo | Onde aparece |
|---|---|
| `corpo-comprador.svg` | Bloco "A gravidade da marca", card O comprador |
| `corpo-investidor.svg` | Bloco "A gravidade da marca", card O investidor |
| `corpo-lideranca.svg` | Bloco "A gravidade da marca", card A liderança |
| `corpo-talento.svg` | Bloco "A gravidade da marca", card O talento |

As seis forças, ou serviços canônicos. Grade de 24, traço 1.6.

| Arquivo | Onde aparece |
|---|---|
| `forca-relacoes-publicas.svg` | Bloco "Seis forças", Relações Públicas |
| `forca-comunicacao-integrada.svg` | Bloco "Seis forças", Comunicação Integrada |
| `forca-reputacao-semantica.svg` | Bloco "Seis forças", Reputação Semântica |
| `forca-geo-consulting.svg` | Bloco "Seis forças", GEO Consulting |
| `forca-media-training.svg` | Bloco "Seis forças", Media Training |
| `forca-ghostwriting.svg` | Bloco "Seis forças", Ghostwriting |

## 2. Ícones de interface (`icones/`)

| Arquivo | Onde aparece |
|---|---|
| `ui-seta-direita.svg` | CTA do header, CTA do hero, botão Continuar, botão Enviar |
| `ui-seta-esquerda.svg` | Link Voltar, no passo 2 do formulário |
| `ui-check.svg` | Tela de confirmação, dentro do disco preto |
| `ui-mais.svg` | Cada item do FAQ. Gira 45 graus quando o item abre |
| `ui-whatsapp.svg` | Sidebar, canais diretos |
| `ui-email.svg` | Sidebar, canais diretos |
| `ui-linkedin.svg` | Sidebar, canais diretos |
| `ui-select-chevron.svg` | Seta de todos os campos `select`. Na página é um data URI dentro do CSS, não um arquivo |

## 3. Figuras (`figuras/`)

| Arquivo | Onde aparece | Observação |
|---|---|---|
| `poco-gravitacional.svg` | Hero, à direita | A tese em desenho: a massa no centro, o mercado em órbita. Feito para fundo escuro |
| `onda-da-voz.svg` | Abertura do bloco "Toda atração começa com uma voz" | Na página são 11 barras animadas em CSS. O arquivo congela o quadro de pico |
| `piarboard-curva-mencoes.svg` | Figura do PiaRBoard, gráfico de área | Valores de demonstração, não são dados de cliente |
| `piarboard-barras-canais.svg` | Figura do PiaRBoard, ranking de canais | Na página são barras em CSS. Aqui, o equivalente em SVG |
| `paleta-piar.svg` | Não aparece na página | Referência: as únicas cores usadas, com os hex |

## 4. Marca (`marca/`)

| Arquivo | Onde aparece |
|---|---|
| `wordmark-piar.svg` | Header e rodapé, sobre fundo escuro |
| `wordmark-piar-fundo-claro.svg` | Variante para fundo claro, não usada na página |

O wordmark é tipográfico: Montserrat 800 com o R em amarelo, seguido de
"GROUP" em JetBrains Mono com espaçamento aberto. Os dois arquivos renderizam
como texto, então dependem da fonte Montserrat estar disponível. Para uso fora
da web, converter o texto em curvas antes de exportar.

## 5. Tipografia

Fontes oficiais PiaR, carregadas do Google Fonts pelo `<link>` no `<head>`.
São o único recurso externo da página.

| Família | Pesos carregados | Papel |
|---|---|---|
| Montserrat | 300, 400, 500, 600, 700, 800 e itálico 400 | Display: títulos, wordmark, números da prova |
| Open Sans | 400, 500, 600, 700 | Corpo de texto e campos de formulário |
| JetBrains Mono | 400, 500, 700 | Eyebrows, rótulos de campo, chips, legendas |

Para deixar a página 100% offline, trocar o `<link>` por `@font-face` com os
arquivos woff2 servidos junto. O projeto já tem essas fontes self-hosted via
`@fontsource`, em `src/styles/global.css`.

## 6. Elementos visuais sem arquivo

Coisas que compõem o visual e vivem só no CSS do documento.

| Elemento | Onde | Como é feito |
|---|---|---|
| Aurora do hero | Fundo do hero | Dois `radial-gradient` em amarelo e laranja sobre o preto |
| Marquee de clientes | Faixa preta abaixo do hero | 20 nomes em Montserrat, duplicados, com `@keyframes` de translação e máscara de gradiente nas bordas |
| Tabela das duas órbitas | Bloco "Ótimo. E daí?" | `<table>` com a coluna de impacto destacada em amarelo |
| Chips dos exits | Bloco "A prova" | `<span>` com borda hairline e raio pill |
| Painel do PiaRBoard | Bloco do PiaRBoard | Card em `#08080A`, KPIs, ponto "ao vivo" pulsando, gráfico e barras |
| Barra de progresso de leitura | Topo da janela | Div de 2px em amarelo, largura ajustada no scroll |
| Barras do formulário em 2 passos | Topo do card do formulário | Pseudo-elemento com largura animada |
| Tela de confirmação | Depois do envio | Gradiente amarelo de 135 graus com disco preto |

---

## Contagem

18 ícones, 5 figuras, 2 wordmarks e 1 folha de tokens: 26 assets, mais este README.
Nenhum deles é imagem rasterizada.
