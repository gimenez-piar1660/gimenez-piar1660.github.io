import js from '@eslint/js';
import globals from 'globals';
import astro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

// Bibliotecas que chegam por <script> (CDN), sem import.
const cdnGlobals = {
  gsap: 'readonly',
  ScrollTrigger: 'readonly',
  Lenis: 'readonly',
};

export default [
  {
    ignores: [
      'dist/**',
      'deploys/**',
      'outputs/**',
      'node_modules/**',
      '.astro/**',
      'public/**',
      'design-system/**',
    ],
  },

  js.configs.recommended,
  ...astro.configs['flat/recommended'],

  // Scripts de build/deploy: rodam no Node e logam progresso no terminal.
  {
    files: ['scripts/**/*.{js,mjs}', '*.config.{js,mjs}'],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      'no-console': 'off',
    },
  },

  // Código do site: roda no browser (inclui <script> dentro de .astro).
  {
    files: ['src/**/*.{js,mjs,ts,astro}'],
    languageOptions: {
      globals: { ...globals.browser, ...cdnGlobals },
    },
  },

  // Frontmatter e .ts usam sintaxe TypeScript.
  {
    files: ['src/**/*.ts', 'src/**/*.astro'],
    languageOptions: {
      parserOptions: { parser: tsParser },
    },
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: { parser: tsParser },
  },

  // Chaves injetadas pelo `define:vars` do Astro no formulário.
  {
    files: ['src/pages/contato.astro'],
    languageOptions: {
      globals: {
        WEB3FORMS_KEY: 'readonly',
        RD_PUBLIC_KEY: 'readonly',
        RD_ID_PARCIAL: 'readonly',
        RD_ID_COMPLETO: 'readonly',
      },
    },
  },

  // astro check já cuida de tipos; aqui o foco é bug de runtime.
  {
    rules: {
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrors: 'none' },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // `catch (e) {}` é proposital nas animações: falhar em silêncio, nunca quebrar a página.
      'no-empty': ['error', { allowEmptyCatch: true }],
    },
  },
];
