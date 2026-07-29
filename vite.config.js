import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  base: '/urmh-robots/',
  plugins: [
    handlebars({
      partialDirectory: './partials',
    }),
  ],
});