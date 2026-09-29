# Deploy v0.2.13 — remove-danilo

- **Quando:** 2026-09-29 11:48
- **Ambiente:** production (indexavel)
- **Commit:** 28747f5 (branch remove-danilo)
- **Tag anterior:** v0.2.12
- **Arquivo pra arrastar no Netlify:** `site_v0.2.13.zip` (34.21 MB)
- **Rotas publicadas:** 37

## O que mudou desde o deploy anterior

**O Danilo e o WhatsApp comercial saíram do site.** Ele deixou a empresa, e
nada com o nome, a foto ou o número dele chega mais ao navegador.

- **Home, seção "Quem lidera":** o card dele saiu. Ficam cinco pessoas, e a
  segunda linha do grid aparece centralizada, sem buraco à direita. No celular
  continua uma coluna só.
- **Foto:** `brand/team/danilo.webp` não existe mais no zip. Depois de subir,
  o endereço dela passa a dar 404.
- **WhatsApp (11) 97563-3655:** não havia botão visível, mas o número saía nos
  dados estruturados (JSON-LD) das 36 páginas, que é o que o Google lê, e no
  `llms.txt`, que é o que as IAs leem. Saiu dos dois. O site fica sem telefone
  público; o contato é por e-mail e formulário.
- **Nome no código-fonte das páginas:** um comentário do banner de cookies
  levava o nome para o HTML de todas as páginas, e dois comentários faziam o
  mesmo na `/pep`. Os três deixaram de citar o nome.

Esta versão inclui também a v0.2.12 (`/themic` sem a data do evento).

### Como conferir depois de subir

1. Abrir `piar.group` com Ctrl+F5 e descer até "Quem lidera": cinco cards.
2. Em qualquer página, Ctrl+U (código-fonte) e procurar "Danilo" e "97563":
   zero resultados.
3. Abrir `piar.group/brand/team/danilo.webp`: tem que dar 404. Se a foto ainda
   aparecer, o arquivo antigo ficou no servidor, porque subir o zip por cima não
   apaga o que já estava lá. Apagar à mão pelo gerenciador de arquivos do cPanel.

### O que o zip não resolve

- O Google pode continuar mostrando o telefone antigo até recolher as páginas
  de novo.
- As LPs "PiaR Essencial" e o template de e-mail em `outputs/` ainda têm o
  número. Eles não fazem parte do site; se algum estiver publicado em outro
  lugar, precisa ser corrigido lá.

### Arquivos alterados (git)

```
M	deploys/2026-09-29_1001_v0.2.12_themic-sem-data/notes.md
D	public/brand/team/danilo.webp
M	public/llms.txt
M	src/components/CampoGravitacional.astro
M	src/components/ConsentimentoCookies.astro
M	src/data/site.ts
M	src/layouts/BaseLayout.astro
M	src/pages/index.astro
M	src/pages/pep.astro
```
