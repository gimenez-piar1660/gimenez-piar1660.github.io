// Monta o caminho de um asset de public/ respeitando a base do Astro.
//
// Por que existe: o Astro só prefixa sozinho o que ele mesmo gera (_assets e o CSS
// processado pelo Vite). Arquivo de public/ escrito à mão no HTML sai cru e resolve
// na raiz do domínio.
//
// Por que não concatenar direto: o BASE_URL muda de formato conforme a config. Vale
// '/' quando o site roda na raiz e '/subpasta' quando roda em subpasta. Um
// `${BASE_URL}/brand/x.png` ingênuo vira '//brand/x.png' na raiz, e o navegador lê
// isso como URL protocolo-relativa, indo procurar um servidor chamado 'brand'.
// Aparar as barras das duas pontas faz o mesmo código funcionar nos dois casos.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}
