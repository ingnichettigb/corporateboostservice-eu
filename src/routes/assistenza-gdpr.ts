import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Pagina rimossa: redirect 301 permanente verso il corso privacy/GDPR.
export const Route = createFileRoute("/assistenza-gdpr")({
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: { Location: "https://corporateboostservice.eu/corso-privacy-gdpr", "Cache-Control": "public, max-age=3600" },
        }),
    },
  },
});
