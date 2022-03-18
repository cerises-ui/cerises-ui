import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: [
      'index.html',
      'src/**/*.{vue,html,jsx,tsx}',
      'site/**/*.{html,mdx,jsx,tsx}',
      'docs/**/*.{html,mdx,jsx,tsx}',
    ],
  },
});
