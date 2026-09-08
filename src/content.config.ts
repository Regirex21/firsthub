import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

/* ================================================= */
/* BLOG                                              */
/* Cada entrada es un archivo .md o .mdx dentro de    */
/* src/content/blog/. El nombre del archivo es la URL */
/* (ej. team-update-1.md -> /blog/team-update-1)      */
/* ================================================= */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    /* Título que se muestra en la tarjeta y en la entrada */
    titulo: z.string(),

    /* Resumen de 1–2 líneas: sale en las tarjetas, en las
       vistas previas de redes sociales y en el RSS */
    resumen: z.string(),

    /* Fecha de publicación en formato YYYY-MM-DD */
    fecha: z.coerce.date(),

    /* Programa al que pertenece la noticia */
    categoria: z.enum(['ftc', 'frc', 'general']),

    /* Etiquetas libres para filtrar: ["reglas", "traducción"] */
    tags: z.array(z.string()).default([]),

    /* Quién escribe */
    autor: z.object({
      nombre: z.string(),
      rol: z.string().optional(),
    }),

    /* Newsletter o publicación original, si la entrada
       traduce o comenta una fuente en inglés */
    fuente: z
      .object({
        titulo: z.string(),
        url: z.string().url(),
        traduccion: z.boolean().default(false),
      })
      .optional(),

    /* Una entrada destacada encabeza el índice del blog */
    destacado: z.boolean().default(false),

    /* true = no se publica en producción, solo se ve en `npm run dev` */
    borrador: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
};
