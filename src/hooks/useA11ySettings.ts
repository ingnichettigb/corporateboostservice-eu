import { useEffect, useState } from "react";
import i18n from "@/i18n";

const LANG_KEY = "cbs.lang";
const LARGE_KEY = "cbs.a11y.large";
const CONTRAST_KEY = "cbs.a11y.contrast";
export type SiteLanguage = "it" | "en" | "de" | "es";

const supportedLanguages: SiteLanguage[] = ["it", "en", "de", "es"];

export function useA11ySettings() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLangState] = useState<SiteLanguage>("it");
  const [large, setLargeState] = useState(false);
  const [contrast, setContrastState] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem(LANG_KEY);
    const savedLang = supportedLanguages.includes(storedLang as SiteLanguage)
      ? (storedLang as SiteLanguage)
      : "it";
    const savedLarge = localStorage.getItem(LARGE_KEY) === "1";
    const savedContrast = localStorage.getItem(CONTRAST_KEY) === "1";
    setLangState(savedLang);
    setLargeState(savedLarge);
    setContrastState(savedContrast);
    if (savedLang !== i18n.language) i18n.changeLanguage(savedLang);
    document.documentElement.lang = savedLang;
    document.documentElement.classList.toggle("a11y-large", savedLarge);
    document.documentElement.classList.toggle("a11y-contrast", savedContrast);
    setMounted(true);
  }, []);

  const setLang = (l: SiteLanguage) => {
    setLangState(l);
    localStorage.setItem(LANG_KEY, l);
    i18n.changeLanguage(l);
    document.documentElement.lang = l;
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

  return { mounted, lang, setLang, large, toggleLarge, contrast, toggleContrast };
}
