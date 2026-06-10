import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import it from "./locales/it.json";
import en from "./locales/en.json";
import { assistenzaGdpr } from "./locales/pages/assistenza-gdpr";
import { gps } from "./locales/pages/gps";
import { smartMaintenance } from "./locales/pages/smart-maintenance";
import { telecamere } from "./locales/pages/telecamere";
import { controlli } from "./locales/pages/controlli-gratuiti";
import { pedflow } from "./locales/pages/pedflow";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      it: {
        translation: {
          ...it,
          assistenzaGdpr: assistenzaGdpr.it,
          gps: gps.it,
          smartMaintenance: smartMaintenance.it,
          telecamere: telecamere.it,
          controlli: controlli.it,
        },
        pedflow: pedflow.it,
      },
      en: {
        translation: {
          ...en,
          assistenzaGdpr: assistenzaGdpr.en,
          gps: gps.en,
          smartMaintenance: smartMaintenance.en,
          telecamere: telecamere.en,
          controlli: controlli.en,
        },
        pedflow: pedflow.en,
      },
    },
    lng: "it",
    fallbackLng: "it",
    ns: ["translation", "pedflow"],
    defaultNS: "translation",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
