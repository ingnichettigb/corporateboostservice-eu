import { useA11ySettings } from "@/hooks/useA11ySettings";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { lang, setLang } = useA11ySettings();
  const { t } = useTranslation();
  return (
    <div role="group" aria-label={t("a11y.language")} className="inline-flex rounded-md border-2 border-foreground/20 overflow-hidden">
      {(["it", "en", "de", "es"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`min-w-10 min-h-11 px-2 text-sm font-semibold transition-colors sm:min-w-11 sm:px-3 ${
            lang === l ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-accent"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
