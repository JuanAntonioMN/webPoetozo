// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


import markdoc from "@astrojs/markdoc";


import vercel from "@astrojs/vercel";


// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
    },

  integrations: [markdoc()],
  adapter: vercel(),
});