/* ================================================= */
/* FEED RSS DEL BLOG                                 */
/* Se genera a mano para no añadir dependencias       */
/* ================================================= */
import type { APIRoute } from "astro";
import { getPosts, CATEGORIAS } from "../../lib/blog";

const escapar = (texto: string) =>
  texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL("https://firsthub.dev")).origin;
  const posts = await getPosts();

  const items = posts
    .map((post) => {
      const url = `${base}/blog/${post.id}`;
      return `    <item>
      <title>${escapar(post.data.titulo)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapar(post.data.resumen)}</description>
      <category>${escapar(CATEGORIAS[post.data.categoria].etiqueta)}</category>
      <author>${escapar(post.data.autor.nombre)}</author>
      <pubDate>${post.data.fecha.toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Blog de FIRSTHub</title>
    <link>${base}/blog</link>
    <description>Noticias, newsletters traducidos al español e insights sobre FTC, FRC y el ecosistema FIRST.</description>
    <language>es-MX</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
