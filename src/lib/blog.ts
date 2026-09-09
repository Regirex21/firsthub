import { getCollection, type CollectionEntry } from "astro:content";

/* ================================================= */
/* CATEGORÍAS DEL BLOG                               */
/* Una sola fuente de verdad: colores, etiquetas y   */
/* descripciones se leen desde aquí en todo el sitio */
/* ================================================= */
export const CATEGORIAS = {
  ftc: {
    etiqueta: "FTC",
    nombre: "FIRST Tech Challenge",
    color: "#ff8c42",
    descripcion:
      "Noticias, reglas, recursos y traducciones para equipos de FIRST Tech Challenge.",
  },
  frc: {
    etiqueta: "FRC",
    nombre: "FIRST Robotics Competition",
    color: "#48a9a6",
    descripcion:
      "Team Updates, análisis técnico y material traducido para equipos de FIRST Robotics Competition.",
  },
  general: {
    etiqueta: "General",
    nombre: "Noticias generales",
    color: "#ffcd00",
    descripcion:
      "Anuncios de FIRST, comunidad, becas, eventos y todo lo que cruza ambos programas.",
  },
} as const;

export type Categoria = keyof typeof CATEGORIAS;
export const CATEGORIAS_LISTA = Object.keys(CATEGORIAS) as Categoria[];

export type Post = CollectionEntry<"blog">;

/* Se avisa una sola vez por build, aunque getPosts() se llame desde
   varias páginas */
let borradoresAvisados = false;

/* Entradas publicadas, de la más reciente a la más antigua.
   Los borradores solo aparecen al correr `astro dev`.

   Un `borrador: true` deja la entrada fuera del sitio publicado sin
   ningún otro síntoma: el archivo existe, el build pasa y la entrada
   simplemente no está. Por eso se avisa por consola en cada build de
   producción, con el nombre de cada archivo excluido — el aviso sale
   en el log de Vercel. */
export async function getPosts(): Promise<Post[]> {
  const todas = await getCollection("blog");

  if (import.meta.env.PROD) {
    const borradores = todas.filter((post) => post.data.borrador === true);

    if (borradores.length > 0 && !borradoresAvisados) {
      borradoresAvisados = true;
      console.warn(
        `\n[blog] ${borradores.length} entrada(s) con "borrador: true" NO se publican en este build:\n` +
          borradores.map((post) => `        - ${post.id}`).join("\n") +
          `\n        Cambia borrador a false en el front-matter para publicarlas.\n`
      );
    }

    return ordenar(todas.filter((post) => post.data.borrador !== true));
  }

  return ordenar(todas);
}

function ordenar(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf()
  );
}

/* Fecha larga en español: "14 de marzo de 2026" */
export function formatoFecha(fecha: Date): string {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(fecha);
}

/* Fecha corta para las tarjetas: "14 mar 2026" */
export function formatoFechaCorta(fecha: Date): string {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(fecha);
}

/* Minutos de lectura estimados a 200 palabras por minuto */
export function tiempoLectura(cuerpo: string | undefined): number {
  const palabras = (cuerpo ?? "").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 200));
}

/* Todas las etiquetas usadas, ordenadas por frecuencia */
export function tagsDe(posts: Post[]): string[] {
  const cuenta = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      cuenta.set(tag, (cuenta.get(tag) ?? 0) + 1);
    }
  }
  return [...cuenta.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag]) => tag);
}
