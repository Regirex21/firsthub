---
titulo: "Cómo publicar una entrada en el blog de FIRSTHub"
resumen: "Guía rápida del formato: qué campos lleva cada entrada, cómo se elige la categoría y qué revisar antes de subir una traducción."
fecha: 2026-09-08
categoria: general
tags: ["guía", "equipo"]
autor:
  nombre: "Rex"
  rol: "Founder de FIRSTHub"
destacado: true
---

Esta entrada es la referencia de formato del blog. Sirve como plantilla: copia
el archivo, cámbiale el nombre y reemplaza el contenido.

## Dónde vive cada entrada

Cada publicación es un archivo `.md` dentro de `src/content/blog/`. El nombre
del archivo se convierte en la URL:

```
src/content/blog/team-update-01.md  ->  firsthub.dev/blog/team-update-01
```

Usa nombres en minúsculas y con guiones. Nada de espacios ni acentos en el
nombre del archivo — el título sí lleva acentos, va aparte.

## El bloque de arriba

Las líneas entre `---` son los datos de la entrada. Estos son obligatorios:

| Campo | Qué es |
| --- | --- |
| `titulo` | El título completo, con acentos y mayúsculas normales |
| `resumen` | Una o dos líneas. Aparece en la tarjeta, en el RSS y al compartir el enlace |
| `fecha` | `AAAA-MM-DD` |
| `categoria` | `ftc`, `frc` o `general` |
| `autor` | `nombre` y, opcionalmente, `rol` |

Y estos son opcionales:

- **`tags`** — temas libres para filtrar: `["reglas", "traducción", "scouting"]`.
  Reusa etiquetas que ya existan en vez de inventar una nueva cada vez; el
  filtro del índice se alimenta de ellas.
- **`fuente`** — cuando la entrada traduce o comenta algo publicado en otro
  lado. Lleva `titulo`, `url` y `traduccion: true` si es una traducción.
- **`destacado: true`** — pone la entrada arriba del índice. Solo una a la vez.
- **`borrador: true`** — la entrada se ve en `npm run dev` pero no se publica.

## Cómo elegir la categoría

- **FTC** — reglas, recursos, anuncios y traducciones que solo aplican a
  *FIRST* Tech Challenge.
- **FRC** — lo mismo para *FIRST* Robotics Competition.
- **General** — anuncios de *FIRST* que cruzan ambos programas, becas,
  comunidad, eventos y todo lo que le sirve a cualquier equipo.

Si dudas entre un programa y general, gana el programa: es más fácil encontrar
la entrada desde `/blog/categoria/frc` que desde una lista mezclada.

## Antes de publicar una traducción

1. Enlaza siempre la fuente original en el bloque `fuente` y marca
   `traduccion: true`. La entrada muestra sola el aviso de que el documento
   oficial es el original en inglés.
2. No traduzcas nombres propios de reglas, penalizaciones ni comandos.
   `MINOR FOUL` se queda como `MINOR FOUL`.
3. Si la fuente se actualiza después, actualiza la entrada y menciona el
   cambio al final. Un equipo puede estar leyendo esto a media temporada.

> Una traducción desactualizada hace más daño que no tenerla. Si no vas a
> darle seguimiento a un documento vivo, resume y enlaza en vez de traducir
> completo.

## Publicar

Guarda el archivo, haz commit y push. Vercel reconstruye el sitio solo y la
entrada aparece en el índice, en su página de categoría y en el RSS.
