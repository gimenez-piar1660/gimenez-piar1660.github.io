# Deploy v0.2.15 — tag-lead-sitepiar

- **Quando:** 2026-09-29 15:13
- **Ambiente:** production (indexavel)
- **Commit:** 7b14ee4 (branch diagnostico-piar)
- **Tag anterior:** v0.2.14
- **Arquivo pra arrastar no Netlify:** `site_v0.2.15.zip` (34.28 MB)
- **Rotas publicadas:** 38

## O que mudou desde o deploy anterior

**Subir este zip, e não o da v0.2.14.** Esta versão é a v0.2.14 mais uma tag.

Todo lead da **/diagnostico-de-reputacao** passa a chegar ao RD Station com a
tag **`lead_sitepiar`**, escrita exatamente assim, com sublinhado. Ela vai nos
dois envios: no preenchimento dos dados (`piar-diagnostico-inicio`), então quem
abandona as perguntas também leva, e no resultado (`piar-diagnostico-completo`).

As tags que já existiam continuam iguais. Um lead que termina o diagnóstico
chega, por exemplo, com:

```
piar-diagnostico-autoridade, lead_sitepiar, piar-diagnostico-lembrado-as-vezes,
piar-servico-dados-geo, piar-tem-assessoria
```

Nenhuma outra página mudou: /contato, /themic e /diagnostico seguem sem essa
tag.

## O que continua pendente da v0.2.14

O campo **`Diagnostico servico`** no painel do RD (instruções nas notas da
v0.2.14). Sem ele o lead entra normalmente e o serviço indicado fica só na tag
`piar-servico-*`.

## O que foi verificado

Em Chrome headless, com o envio ao RD substituído para nenhum lead de teste
cair na conta: `lead_sitepiar` nos dois envios e nos quatro tipos de resultado
(dois territórios frágeis, um, nenhum e empate), com todas as tags anteriores
presentes. Validação, armadilha de robô e layout sem mudança.

Um envio à API sem e-mail (que não cria lead) não serve para confirmar que o
RD aceita a tag, porque a checagem de e-mail vem antes de tudo. A confirmação é
o teste real, do celular, depois de subir o zip: a tag tem que aparecer no
contato.

### Arquivos alterados (git)

```
M	deploys/2026-09-29_1451_v0.2.14_diagnostico-piar/notes.md
M	src/pages/diagnostico-de-reputacao.astro
```
