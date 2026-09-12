/* ================================================= */
/* API DE "ME GUSTA"                                 */
/*                                                   */
/* Función serverless de Vercel. Vive en /api porque */
/* el sitio es estático: Astro compila HTML y esta   */
/* carpeta se despliega aparte como función.         */
/*                                                   */
/* Privacidad: NO se guarda IP, ni cuentas, ni quién */
/* votó. Del lado del servidor solo existe un        */
/* contador por entrada. Quién votó vive únicamente  */
/* en el navegador de cada persona (localStorage).   */
/* Si algún día esto cambia, hay que actualizar      */
/* /privacidad en el mismo cambio.                   */
/* ================================================= */

const PREFIJO = "likes:";

/* Solo minúsculas, números y guiones: son los ids que
   genera la colección del blog. Evita que alguien mande
   una clave arbitraria a Redis. */
const SLUG_VALIDO = /^[a-z0-9][a-z0-9-]{0,99}$/;

/* La integración de Upstash en Vercel inyecta las
   variables con uno u otro nombre según cómo se haya
   instalado. Aceptamos ambos. */
function credenciales() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

async function comando(cred, args) {
  const r = await fetch(cred.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cred.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
  if (!r.ok) throw new Error(`Upstash respondió ${r.status}`);
  const datos = await r.json();
  return datos.result;
}

async function tubería(cred, listaDeArgs) {
  const r = await fetch(`${cred.url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cred.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(listaDeArgs),
  });
  if (!r.ok) throw new Error(`Upstash respondió ${r.status}`);
  const datos = await r.json();
  return datos.map((d) => d.result);
}

function json(cuerpo, estado = 200) {
  return new Response(JSON.stringify(cuerpo), {
    status: estado,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export default {
  async fetch(request) {
    const cred = credenciales();

    /* Sin almacén configurado la API responde 503 y el botón
       se esconde solo en el navegador. El sitio no se rompe. */
    if (!cred) {
      return json({ error: "almacen_no_configurado" }, 503);
    }

    const url = new URL(request.url);

    /* ---------- Leer contadores ---------- */
    if (request.method === "GET") {
      const crudos = (url.searchParams.get("slugs") || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const slugs = [...new Set(crudos)]
        .filter((s) => SLUG_VALIDO.test(s))
        .slice(0, 50);

      if (slugs.length === 0) return json({ conteos: {} });

      try {
        const valores = await tubería(
          cred,
          slugs.map((s) => ["GET", PREFIJO + s])
        );
        const conteos = {};
        slugs.forEach((s, i) => {
          conteos[s] = Number(valores[i]) || 0;
        });
        return json({ conteos });
      } catch (e) {
        return json({ error: "almacen_no_disponible" }, 502);
      }
    }

    /* ---------- Sumar o restar un voto ---------- */
    if (request.method === "POST") {
      let cuerpo;
      try {
        cuerpo = await request.json();
      } catch {
        return json({ error: "cuerpo_invalido" }, 400);
      }

      const slug = String(cuerpo?.slug || "");
      const accion = cuerpo?.accion === "quitar" ? "quitar" : "dar";

      if (!SLUG_VALIDO.test(slug)) {
        return json({ error: "slug_invalido" }, 400);
      }

      const clave = PREFIJO + slug;

      try {
        if (accion === "dar") {
          const total = await comando(cred, ["INCR", clave]);
          return json({ slug, conteo: Number(total) || 0 });
        }

        const total = Number(await comando(cred, ["DECR", clave])) || 0;

        /* El contador nunca baja de cero: alguien podría mandar
           "quitar" sin haber dado like antes. */
        if (total < 0) {
          await comando(cred, ["SET", clave, "0"]);
          return json({ slug, conteo: 0 });
        }

        return json({ slug, conteo: total });
      } catch (e) {
        return json({ error: "almacen_no_disponible" }, 502);
      }
    }

    return json({ error: "metodo_no_permitido" }, 405);
  },
};
