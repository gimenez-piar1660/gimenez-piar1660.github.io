# Como pilotar o site PiaR

Guia em português, escrito para você não precisar entender código.
Tudo aqui é prático. Se algo confundir, me pergunte.

---

## 🟢 Como ver o site no seu computador

1. Clique duas vezes em **`start.bat`** (na raiz do projeto).
2. Espera uns 5 segundos. Vai abrir uma janela preta com texto rolando.
3. Abre o navegador em: **http://localhost:4321**
4. Para parar: fecha a janela preta.

> Pense no `start.bat` como o "ligar a TV". O site fica visível só pra você, no seu computador, enquanto a janela está aberta.

---

## ✍️ Como criar uma página nova

**Você não precisa criar arquivo.** É só me pedir assim:

> "Cria uma página Sobre, com o título 'Quem somos' e um texto falando que a PiaR existe desde 2019, atende fintechs e foca em narrativa editorial."

Eu crio, ajusto o layout, e em ~10 segundos a página aparece em `http://localhost:4321/sobre`.

Se você quiser fazer sozinho (Markdown):

1. Abra a pasta `src/content/pages/`.
2. Crie um arquivo, por exemplo `sobre.md`.
3. Cole isso dentro e edite:

```markdown
---
title: Quem somos
description: A PiaR existe desde 2019.
---

A PiaR Group é uma agência de PR que pensa como editora.

Atendemos fintechs, scale-ups e times executivos que precisam de narrativa.
```

> A parte entre `---` no topo são as configurações da página (título, descrição). O resto é o texto que aparece. Use linha em branco para separar parágrafos.

---

## 🔄 Como alterar uma página existente

**Páginas simples** (Markdown em `src/content/pages/`):
- Abre o arquivo `.md`, edita, salva. O site recarrega sozinho.

**Páginas complexas** (`src/pages/index.html`, `processos.html`):
- Me pede em português:
  > "Muda o título do hero da home pra 'A força gravitacional do PR'."
  > "Tira o terceiro card de pricing."
  > "Troca o vídeo do hero por outro."

Eu mexo no código e mostro o resultado.

---

## 🖼️ Como trocar uma imagem

1. Coloque a imagem nova na pasta `public/images/` (ou `public/brand/` se for logo).
2. Me diz: "Troca a imagem do primeiro case pela `nome-do-arquivo.jpg`."

> Imagens **pesadas e brutas** (vídeos originais, PSDs, fotos sem edição) vão para a pasta `artools-raw/` que está **fora do projeto**, em `C:\Users\PiaR\OneDrive\Área de Trabalho\artools-raw\`. Lá não trava o site nem o GitHub.

---

## 🗂️ Anatomia das pastas (o que importa pra você)

```
artools/
├── start.bat              ← clica aqui pra ligar o site
├── PILOTAR.md             ← este guia
├── public/
│   ├── brand/             ← logos
│   ├── images/            ← fotos do site (você coloca aqui)
│   └── videos/            ← vídeos do site
├── src/
│   ├── pages/             ← páginas complexas (eu mexo)
│   └── content/
│       └── pages/         ← páginas simples em Markdown (você mexe)
└── (resto)                ← código, configurações — não precisa abrir
```

Tudo o que está em "(resto)" eu cuido. Você nunca precisa abrir.

---

## ❓ O que fazer se algo quebrar

1. Fecha a janela preta do `start.bat`.
2. Abre de novo (duplo clique).
3. Se ainda não funcionar, me chama no chat e cola a mensagem de erro que aparece na janela preta.

---

## 🚀 Publicar o site na internet

Ainda não está configurado. Quando quiser publicar, me peça:

> "Quero publicar o site na internet."

Eu te guio pelo Netlify ou Cloudflare Pages — em ~15 minutos, com domínio próprio (`piargroup.com.br`), HTTPS automático e atualizações automáticas a cada mudança.

---

## 🤝 Combinado entre nós

- **Você foca em conteúdo e direção.** Que páginas existem, o que dizem, o tom.
- **Eu cuido de tudo que é técnico.** Código, segurança, performance, build, deploy.
- Se ficar em dúvida se algo é "técnico demais", **me pergunta primeiro**. Provavelmente é coisa que eu resolvo.
