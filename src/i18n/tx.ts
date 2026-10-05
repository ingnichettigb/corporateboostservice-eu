import i18n from "@/i18n";
import dict from "./locales/generated/static-texts.json";

type Langs = { en?: string; de?: string; es?: string };
const d = dict as Record<string, Langs>;

/** Translate a fixed Italian text; falls back to the Italian original. Call during render. */
export function tx(it: string): string {
  const lang = (i18n.language || "it").slice(0, 2) as keyof Langs | "it";
  if (lang === "it") return it;
  return d[it]?.[lang] ?? d[it]?.en ?? it;
}
