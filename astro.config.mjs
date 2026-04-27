// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import SpeedInsights from "@vercel/speed-insights/astro"

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