import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/lib/cart";
import "@/i18n";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">La pagina che stai cercando non esiste o è stata spostata.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Qualcosa è andato storto</h1>
        <p className="mt-2 text-sm text-muted-foreground">Riprova o torna alla home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Riprova</button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Applicazioni Digitali e Corsi Certificati per Imprese" },
      { name: "description", content: "Applicazioni digitali e corsi certificati per imprese e professionisti." },
      { property: "og:title", content: "Applicazioni Digitali e Corsi Certificati per Imprese" },
      { name: "twitter:title", content: "Applicazioni Digitali e Corsi Certificati per Imprese" },
      { property: "og:description", content: "Applicazioni digitali e corsi certificati per imprese e professionisti." },
      { name: "twitter:description", content: "Applicazioni digitali e corsi certificati per imprese e professionisti." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/0yS65EUwnpUx9OQts7qM6xTJ5vi2/social-images/social-1780992527903-Copilot_20260609_100822.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/0yS65EUwnpUx9OQts7qM6xTJ5vi2/social-images/social-1780992527903-Copilot_20260609_100822.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CorporateBoostService.eu" },
      { property: "og:locale", content: "it_IT" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Outlet />
        <Toaster richColors position="top-right" />
      </CartProvider>
    </QueryClientProvider>
  );
}
