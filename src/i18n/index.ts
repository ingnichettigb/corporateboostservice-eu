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
      de: { translation: de, blog: blog.de },
      es: { translation: es, blog: blog.es },
    },
    lng: "it",
    fallbackLng: { de: ["en"], es: ["en"], default: ["it"] },
    ns: ["translation", "pedflow", "blog"],
    defaultNS: "translation",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
