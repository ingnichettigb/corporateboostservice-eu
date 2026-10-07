import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import it from "./locales/it.json";
import en from "./locales/en.json";
import { corsoIncaricati } from "./locales/pages/corso-gdpr-incaricati";
import { legal } from "./locales/pages/legal";
import { privacyGdpr } from "./locales/pages/privacy-gdpr";
import { smartMaintenance } from "./locales/pages/smart-maintenance";
import { pedflow } from "./locales/pages/pedflow";
import { de } from "./locales/de";
import { es } from "./locales/es";
import { blog } from "./locales/pages/blog";
import { DEFAULT_LANG, splitLangPath, type Lang } from "@/lib/locale";
import commonDe from "./locales/generated/common.de.json";
import commonEs from "./locales/generated/common.es.json";
import legalDe from "./locales/generated/legal.de.json";
import legalEs from "./locales/generated/legal.es.json";
import corsoDe from "./locales/generated/corsoIncaricati.de.json";
import corsoEs from "./locales/generated/corsoIncaricati.es.json";
import privacyDe from "./locales/generated/privacyGdpr.de.json";
import privacyEs from "./locales/generated/privacyGdpr.es.json";
import smartDe from "./locales/generated/smartMaintenance.de.json";
import smartEs from "./locales/generated/smartMaintenance.es.json";
import pedflowDe from "./locales/generated/pedflow.de.json";
import pedflowEs from "./locales/generated/pedflow.es.json";

// Istanza reale di i18next (una sola, condivisa).
const baseI18n = i18n;

type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj => !!v && typeof v === "object" && !Array.isArray(v);
function merge(a: Obj, b: Obj): Obj {
  const out: Obj = { ...a };
  for (const [k, v] of Object.entries(b)) out[k] = isObj(v) && isObj(out[k]) ? merge(out[k] as Obj, v) : v;
  return out;
}

if (!baseI18n.isInitialized) {
  baseI18n.use(initReactI18next).init({
    resources: {
      it: {
        translation: {
          ...it,
          corsoIncaricati: corsoIncaricati.it,
          privacyGdpr: privacyGdpr.it,
          legal: legal.it,
          smartMaintenance: smartMaintenance.it,
        },
        pedflow: pedflow.it,
        blog: blog.it,
      },
      en: {
        translation: {
          ...en,
          corsoIncaricati: corsoIncaricati.en,
          privacyGdpr: privacyGdpr.en,
          legal: legal.en,
          smartMaintenance: smartMaintenance.en,
        },
        pedflow: pedflow.en,
        blog: blog.en,
      },
      de: {
        translation: merge(merge(commonDe, { legal: legalDe }), de as Obj) as Obj & {
          corsoIncaricati?: unknown;
        },
        pedflow: pedflowDe,
        blog: blog.de,
      },
      es: {
        translation: merge(merge(commonEs, { legal: legalEs }), es as Obj),
        pedflow: pedflowEs,
        blog: blog.es,
      },
    },
    lng: "it",
    fallbackLng: { de: ["en"], es: ["en"], default: ["it"] },
    ns: ["translation", "pedflow", "blog"],
    defaultNS: "translation",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
  baseI18n.addResourceBundle("de", "translation", { corsoIncaricati: corsoDe, privacyGdpr: privacyDe, smartMaintenance: smartDe }, true, false);
  baseI18n.addResourceBundle("es", "translation", { corsoIncaricati: corsoEs, privacyGdpr: privacyEs, smartMaintenance: smartEs }, true, false);
}

// Lingua della richiesta corrente.
// - Browser: ricavata dall'URL (/de/... -> "de"), quindi sempre coerente con la pagina mostrata.
// - Server: ricavata dall'AsyncLocalStorage impostato in src/server.ts per ogni richiesta,
//   così richieste simultanee in lingue diverse non si influenzano a vicenda.
type LangStore = { getStore(): { lang: Lang } | undefined };

export function currentLang(): Lang {
  if (typeof window !== "undefined") return splitLangPath(window.location.pathname).lang;
  const store = (globalThis as { __cbsLangStore?: LangStore }).__cbsLangStore;
  return store?.getStore()?.lang ?? DEFAULT_LANG;
}

// L'export di default è un proxy: `i18n.t(...)` e `i18n.language` usano la lingua della richiesta
// invece di una lingua globale condivisa. I componenti React ricevono invece un'istanza clonata
// per lingua tramite <I18nextProvider> (vedi __root.tsx).
const i18nByRequest = new Proxy(baseI18n, {
  get(target, prop) {
    if (prop === "language" || prop === "resolvedLanguage") return currentLang();
    if (prop === "t") {
      return (key: unknown, opts?: unknown) => {
        const options =
          typeof opts === "string" ? { defaultValue: opts } : (opts as Record<string, unknown> | undefined);
        return (target.t as (k: unknown, o: unknown) => unknown)(key, { lng: currentLang(), ...options });
      };
    }
    return Reflect.get(target, prop, target);
  },
}) as typeof baseI18n;

export { baseI18n };
export default i18nByRequest;
