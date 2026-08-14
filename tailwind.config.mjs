/** @type {import('tailwindcss').Config} */
// Tailwind config sincronizado com PiaR Design System v2.
// Fonte canônica: design-system/source/piar-ds-v2.html
// Tokens CSS espelhados: src/styles/tokens.css

export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Núcleo PiaR
        ink:    '#0F0F11',
        paper:  '#F5F5F7',
        yellow: {
          DEFAULT: '#FED136',
          50:  '#FFF9E0',
          100: '#FFF3B0',
          200: '#FFE782',
          300: '#FFDC50',
          400: '#FED136',
          500: '#E9BC1F',
          600: '#C69E12',
          700: '#8F710A',  // único legível como texto em fundo claro
          800: '#5A4705',
          soft: '#FFF3B0',
          deep: '#E0B420',
          deepInk: '#6B4E00',
        },
        // Aliases legados para não quebrar HTMLs antigos
        primary: '#0F0F11',
        accent: {
          DEFAULT: '#FED136',
          deep: '#E0B420',
        },
      },
      fontFamily: {
        sans:  ['"Open Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        serif: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      borderRadius: {
        xs:   '6px',
        sm:  '10px',
        md:  '14px',
        lg:  '20px',
        xl:  '28px',
        pill: '999px',
      },
      spacing: {
        // Escala canônica do DS — mantemos os defaults do Tailwind e adicionamos aliases
        's-1':  '4px',
        's-2':  '8px',
        's-3':  '12px',
        's-4':  '16px',
        's-5':  '24px',
        's-6':  '32px',
        's-7':  '48px',
        's-8':  '64px',
        's-9':  '96px',
        's-10': '128px',
      },
      maxWidth: {
        narrow: '720px',
        base:  '1080px',
        wide:  '1280px',
        max:   '1440px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0,0,0,0.04)',
        sm: '0 2px 8px rgba(0,0,0,0.05)',
        md: '0 8px 24px rgba(0,0,0,0.07)',
        lg: '0 20px 48px rgba(0,0,0,0.10)',
        xl: '0 32px 80px rgba(0,0,0,0.14)',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
        emphasis: 'cubic-bezier(0.22, 1, 0.36, 1)',
        spring:   'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        fast: '120ms',
        base: '220ms',
        slow: '420ms',
      },
      letterSpacing: {
        tightest: '-0.055em',
        tighter:  '-0.04em',
        tight:    '-0.025em',
        eyebrow:  '0.2em',
        button:   '0.16em',
      },
    },
  },
  plugins: [],
};
