import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { DEFAULT_LANG, localizePath, splitLangPath } from "@/lib/locale";

export const getRouter = () => {
  const queryClient = new QueryClient();
  let routerRef: { latestLocation?: { publicHref: string } } | undefined;

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // URL con prefisso di lingua: /de/pedflow viene letto dal router come /pedflow,
    // e tutti i link generati ricevono il prefisso della lingua corrente.
    rewrite: {
      input: ({ url }) => {
        const { lang, path } = splitLangPath(url.pathname);
        if (lang === DEFAULT_LANG) return undefined;
        url.pathname = path;
        return url;
      },
      output: ({ url }) => {
        const current = splitLangPath(routerRef?.latestLocation?.publicHref ?? "/").lang;
        if (current === DEFAULT_LANG) return undefined;
        if (splitLangPath(url.pathname).lang !== DEFAULT_LANG) return undefined;
        url.pathname = localizePath(url.pathname, current);
        return url;
      },
    },
  });
  routerRef = router;

  return router;
};
