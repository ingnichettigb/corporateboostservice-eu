import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { localizePath, splitLangPath, type Lang } from "@/lib/locale";

const LARGE_KEY = "cbs.a11y.large";
const CONTRAST_KEY = "cbs.a11y.contrast";
export type SiteLanguage = Lang;

export function useA11ySettings() {
  const [mounted, setMounted] = useState(false);
  const [large, setLargeState] = useState(false);
  const [contrast, setContrastState] = useState(false);

  // La lingua è definita dall'URL (/de/..., /en/..., /es/...; italiano senza prefisso):
  // identica sul server e nel browser, quindi nessun cambio di lingua dopo il caricamento.
  const { lang, path } = useRouterState({ select: (s) => splitLangPath(s.location.publicHref) });

  useEffect(() => {
    const savedLarge = localStorage.getItem(LARGE_KEY) === "1";
    const savedContrast = localStorage.getItem(CONTRAST_KEY) === "1";
    setLargeState(savedLarge);
    setContrastState(savedContrast);
    document.documentElement.classList.toggle("a11y-large", savedLarge);
    document.documentElement.classList.toggle("a11y-contrast", savedContrast);
    setMounted(true);
  }, []);

  /** URL della pagina corrente nella lingua indicata. */
  const hrefForLang = (l: SiteLanguage) => localizePath(path, l);

  /** Cambia lingua aprendo l'URL equivalente (ricarica completa: l'HTML arriva già tradotto). */
  const setLang = (l: SiteLanguage) => {
    if (l !== lang) window.location.assign(hrefForLang(l));
  };

  const toggleLarge = () => {
    const v = !large;
    setLargeState(v);
    localStorage.setItem(LARGE_KEY, v ? "1" : "0");
    document.documentElement.classList.toggle("a11y-large", v);
  };
  const toggleContrast = () => {
    const v = !contrast;
    setContrastState(v);
    localStorage.setItem(CONTRAST_KEY, v ? "1" : "0");
    document.documentElement.classList.toggle("a11y-contrast", v);
  };

  return { mounted, lang, setLang, hrefForLang, large, toggleLarge, contrast, toggleContrast };
}
