import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Pagina rimossa: redirect 301 permanente verso l'elenco applicazioni.
export const Route = createFileRoute("/moca-serbatoi")({
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: { Location: "/applicazioni", "Cache-Control": "public, max-age=3600" },
        }),
    },
  },
});
