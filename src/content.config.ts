import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Coleção "pages": cada Markdown em src/content/pages/<slug>.md vira a rota
// /<slug> via src/pages/[slug].astro (template de artigo). É a base do hub
// editorial: cada caixinha da /insights aponta para uma dessas páginas.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
    // Pilar/categoria editorial (ex.: "Relações Públicas", "Branding", "GEO").
    category: z.string().optional(),
    // Ícone iconify opcional para o card na /insights.
    icon: z.string().optional(),
    order: z.number().optional(),
    noindex: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

// Coleção "blog": posts cronológicos e datados em src/content/blog/<slug>.md,
// renderizados em /blog/<slug> via src/pages/blog/[slug].astro. Diferente de
// "pages" (guias atemporais): aqui há data, série, edição e — quando o post é
// uma leitura de mídia — a lista de coberturas (`placements`), que alimenta de
// uma só fonte a lista de prova visível E o JSON-LD (citation/mentions).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // Título de SEO opcional (tag <title>), quando o H1 é longo/poético.
    seoTitle: z.string().optional(),
    description: z.string(),
    // Coluna recorrente (ex.: "Sala de Sinais") + número da edição.
    series: z.string().optional(),
    edition: z.number().optional(),
    // Data de publicação (ordena o índice e alimenta datePublished do schema).
    pubDate: z.coerce.date(),
    category: z.string().optional(),
    eyebrow: z.string().optional(),
    icon: z.string().optional(),
    // Hero raster opcional (OG/social e capa). Sem ele, usa a capa vetorial da série.
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    readingTime: z.string().optional(),
    // Coberturas citadas (quando o post é uma leitura de mídia espontânea).
    placements: z
      .array(
        z.object({
          client: z.string(),
          outlet: z.string(),
          title: z.string(),
          url: z.string().optional(),
          date: z.string().optional(),
        }),
      )
      .optional(),
    noindex: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { pages, blog };
