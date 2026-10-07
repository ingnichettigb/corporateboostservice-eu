import { useA11ySettings } from "@/hooks/useA11ySettings";
import { LANGS } from "@/lib/locale";
import { useTranslation } from "react-i18next";

// Link veri (non pulsanti): ogni lingua ha un URL proprio che Google può seguire.
export function LanguageSwitcher() {
  const { lang, hrefForLang } = useA11ySettings();
  const { t } = useTranslation();
  return (
    <nav aria-label={t("a11y.language")} className="inline-flex rounded-md border-2 border-foreground/20 overflow-hidden">
      {LANGS.map((l) => (
        <a
          key={l}
          href={hrefForLang(l)}
          hrefLang={l}
          lang={l}
          aria-current={lang === l ? "true" : undefined}
          className={`inline-flex items-center justify-center min-w-11 min-h-11 px-3 text-sm font-semibold transition-colors ${
            lang === l ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-accent"
          }`}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
