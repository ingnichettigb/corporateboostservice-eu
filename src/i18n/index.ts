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

type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj => !!v && typeof v === "object" && !Array.isArray(v);
function merge(a: Obj, b: Obj): Obj {
  const out: Obj = { ...a };
  for (const [k, v] of Object.entries(b)) out[k] = isObj(v) && isObj(out[k]) ? merge(out[k] as Obj, v) : v;
  return out;
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
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
  i18n.addResourceBundle("de", "translation", { corsoIncaricati: corsoDe, privacyGdpr: privacyDe, smartMaintenance: smartDe }, true, false);
  i18n.addResourceBundle("es", "translation", { corsoIncaricati: corsoEs, privacyGdpr: privacyEs, smartMaintenance: smartEs }, true, false);
}

export default i18n;
