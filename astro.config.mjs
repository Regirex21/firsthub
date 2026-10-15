// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";

export default defineConfig({
  // Dominio principal del proyecto en Vercel: el apex redirige a www con un
  // 308, así que la URL real es www. De aquí salen el canonical, el sitemap
  // y las etiquetas Open Graph.
  site: "https://www.firsthub.dev",
  integrations: [
    // Bloques de código del blog (antes venía incluido con Starlight,
    // que ya no se usa en el sitio principal: la documentación vive en
    // el repo firsthub-docs).
    expressiveCode({ themes: ["github-dark"] }),

    // Mapa del sitio para Google: /sitemap-index.xml.
    // Las páginas de confirmación del boletín no se indexan.
    sitemap({
      filter: (url) => !url.includes("/boletin/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
