// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Dominio principal del proyecto en Vercel: el apex redirige a www con un
  // 308, así que la URL real es www. De aquí salen el canonical, el sitemap
  // y las etiquetas Open Graph.
  site: "https://www.firsthub.dev",
  integrations: [
    starlight({
      title: "FIRSTHub Docs"
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});