# PiaR Design System v2 — pasta canônica

Esta pasta é a **fonte da verdade** do sistema visual da PiaR no projeto.

```
design-system/
└── source/
    └── piar-ds-v2.html   ← spec original (brand book completo)
```

## Como o DS se conecta ao código

```
design-system/source/piar-ds-v2.html        ← spec canônica
            │
            ├──> src/styles/tokens.css       ← tokens CSS espelhados
            ├──> tailwind.config.mjs         ← classes Tailwind espelhadas
            ├──> docs/DESIGN_SYSTEM.md       ← catálogo legível
            └──> public/design-system/       ← visualizador local renderizado
```

**Regra de ouro:** qualquer mudança visual passa primeiro pela spec, depois propaga pra tokens e Tailwind. Componentes nunca hardcodam valores.

## Visualizar o brand book

Com `npm run dev` rodando, abra:

> http://localhost:4321/design-system/

(O arquivo HTML interativo precisa ser copiado pra `public/design-system/index.html` —
veja instruções na própria página.)

## Tokens canônicos (resumo)

| Categoria   | Token                       | Valor                        |
|-------------|-----------------------------|------------------------------|
| Cor         | `--ink`                     | `#0F0F11`                    |
| Cor         | `--paper`                   | `#F5F5F7`                    |
| Cor         | `--yellow`                  | `#FED136` (único acento)     |
| Texto       | `--yellow-ink`              | `#6B4E00` (amarelo como texto) |
| Raio        | `--r-xs` → `--r-xl`         | 6 · 10 · 14 · 20 · 28 px     |
| Espaço      | `--s-1` → `--s-10`          | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px |
| Fonte       | `--font-sans`               | Inter                        |
| Fonte       | `--font-serif`              | Instrument Serif (acento itálico) |
| Fonte       | `--font-mono`               | JetBrains Mono (metadata)    |
| Easing      | `--ease-standard`           | `cubic-bezier(.2, 0, 0, 1)`  |
| Easing      | `--ease-emphasis`           | `cubic-bezier(.22, 1, .36, 1)` |
| Easing      | `--ease-spring`             | `cubic-bezier(.16, 1, .3, 1)` |
| Duração     | `--dur-fast/base/slow`      | 120 · 220 · 420 ms           |
| Largura     | `--col-narrow/base/wide/max`| 720 · 1080 · 1280 · 1440 px  |

Catálogo completo (incluindo componentes, voz e do's & don'ts): [docs/DESIGN_SYSTEM.md](../docs/DESIGN_SYSTEM.md).
