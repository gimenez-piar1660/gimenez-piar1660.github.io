# Placeholder images

Os HTMLs migrados referenciam `/images/placeholder/*.webp` para cases, testimonials e insights.
Os arquivos originais (template Webflow) não estão neste repositório.

## Próximos passos

1. Substituir cada placeholder por imagem proprietária da PiaR.
2. Otimizar com `cwebp` ou `sharp` antes de commitar (alvo: ≤ 200KB por imagem hero, ≤ 60KB para thumb).
3. Gerar versões `@1x` e `@2x` para retina.
4. Sempre preferir `.avif` → `.webp` → fallback `.jpg` via `<picture>`.

## Arquivos esperados (mapa do `index.html`)

- `647dbee5378f73aa3d6f675c_thumb_*.webp` — thumbs de cases (4 unidades)
- `647ceb590f338c8134603f54_testi_*.png` — fotos de testimonials (4 unidades)
- `645d099dfb99415f935fe00d_testi_*.webp` — avatars (2 unidades)
- `6454e83e38f3f429feee3b4e_profi_*.webp` — avatar profissional (1)
- `647dbf1774fe97b977e7864a_thumb_*.webp` — capas de insights (3 unidades)
