# Security

## Threat model (resumo)

| Ameaça                          | Vetor                          | Mitigação                                           |
|---------------------------------|--------------------------------|-----------------------------------------------------|
| XSS                             | Input do usuário em forms      | CSP estrita, sanitização server-side, sem `innerHTML` dinâmico |
| Clickjacking                    | Site embedado em iframe        | `X-Frame-Options: DENY` + `frame-ancestors 'none'`  |
| MIME sniffing                   | Upload com extensão errada     | `X-Content-Type-Options: nosniff`                   |
| Supply chain (dep comprometida) | npm install de pacote malicioso| Lockfile commitado, `npm audit` no CI, SRI em CDN   |
| Data leak via referer           | Outbound links a parceiros     | `Referrer-Policy: strict-origin-when-cross-origin`  |
| Form spam / abuso               | Bots em contato/newsletter     | Honeypot + rate limit + Turnstile (Cloudflare)      |
| Vazamento de IP via Google Fonts| Browser → fonts.gstatic.com    | Self-host via `@fontsource/*`                       |
| Tracking ilegal (LGPD)          | Cookies sem consentimento      | Analytics cookieless (Plausible), banner LGPD opcional |
| Force-download de mídia         | Hot-linking de vídeos          | `Cross-Origin-Resource-Policy: same-origin`         |

## Content Security Policy

CSP atual está em [`public/_headers`](../public/_headers). Versão de produção alvo (após migração 100% local):

```
default-src 'self';
script-src 'self';
style-src 'self';
font-src 'self';
img-src 'self' data: blob:;
media-src 'self' blob:;
connect-src 'self' https://plausible.io;
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
object-src 'none';
upgrade-insecure-requests;
```

A versão atual ainda permite:
- `'unsafe-inline'` em script/style (HTMLs monolíticos da migração).
- `cdn.tailwindcss.com`, `cdnjs.cloudflare.com`, `cdn.jsdelivr.net`, `code.iconify.design` (libs ainda em CDN).
- `fonts.googleapis.com` / `fonts.gstatic.com` (fontes ainda externas).

**Plano de endurecimento** (sequência obrigatória antes de produção):
1. Migrar Tailwind para build local → remover `cdn.tailwindcss.com`.
2. Bundlar GSAP, Lenis, Iconify via npm → remover `cdnjs`, `jsdelivr`, `iconify`.
3. Self-host fontes via `@fontsource/*` → remover `fonts.googleapis.com`.
4. Extrair CSS/JS inline para arquivos → remover `'unsafe-inline'`.
5. Adicionar SRI (`integrity=`) em qualquer CDN residual.

## Headers de transporte

- **HSTS:** `max-age=63072000; includeSubDomains; preload`. Submeter ao [hstspreload.org](https://hstspreload.org) após estabilizar.
- **HTTPS only:** redirect 301 no edge.
- **TLS 1.2+** com ciphers modernos (configurar no provedor).

## Permissions Policy

Bloqueamos por default APIs que não usamos:
- `camera`, `microphone`, `geolocation` — vazadores de privacidade.
- `interest-cohort` — Topics API (rastreio publicitário).
- `payment`, `usb` — superfície desnecessária.

## Dependências

- `package-lock.json` **sempre** commitado.
- `npm audit --audit-level=high` no CI bloqueia merge.
- Dependabot/Renovate semanal para minor/patch.
- Major bumps revisados manualmente.

## LGPD

- **Base legal padrão:** legítimo interesse para analytics agregado, consentimento para cookies de marketing.
- **Cookies:** zero por default. Plausible é cookieless.
- **Formulários:** declaração explícita de uso dos dados próximo ao botão de submit. Política linkada em `/privacidade`.
- **Direitos:** página `/privacidade` com canal de exercício de direitos (acesso, exclusão, portabilidade).
- **Retenção:** definir TTL por tipo de dado (lead form: 24 meses; logs: 6 meses).
- **DPO:** indicar contato.

## Disclosure responsável

Vulnerabilidades de segurança devem ser reportadas a `security@piargroup.com.br` (criar). Resposta em até 72h.

## Checklist pré-produção

- [ ] CSP sem `unsafe-inline`
- [ ] SRI em 100% dos scripts externos (ou nenhum externo)
- [ ] HSTS habilitado e site no preload list
- [ ] Página `/privacidade` publicada
- [ ] Mecanismo de exercício de direitos LGPD funcionando
- [ ] Headers validados em [securityheaders.com](https://securityheaders.com) → A+
- [ ] [Mozilla Observatory](https://observatory.mozilla.org) → A+
- [ ] `npm audit` clean
- [ ] Formulários com honeypot + rate limit
- [ ] Backup automático de configs e conteúdo
