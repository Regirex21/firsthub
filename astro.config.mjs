// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "http://localhost:4321",
  integrations: [
    starlight({
      title: "FIRSTHub Docs"
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});