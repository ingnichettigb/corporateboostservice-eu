import { ClipboardCheck, FileCheck2, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const FORM_AUTOVALUTAZIONE =
  "https://docs.google.com/forms/d/e/1FAIpQLSflM2xH_wCxKb51Ne_95sabvKBGaS9UgcEMMYYrf_AXvR9EtQ/viewform";
export const FORM_VERIFICA =
  "https://docs.google.com/forms/d/e/1FAIpQLSdeVt3RDMdj-pD8ADGGV6SujATj-7T_TD2Gs7DP-OmKIJ2HDQ/viewform";

function openInNewWindow(url: string) {
  if (typeof window === "undefined") return;
  const w = Math.min(1100, window.screen.availWidth - 100);
  const h = Math.min(900, window.screen.availHeight - 100);
  const left = Math.max(0, (window.screen.availWidth - w) / 2);
  const top = Math.max(0, (window.screen.availHeight - h) / 2);
  window.open(
    url,
    "_blank",
    `popup=yes,width=${w},height=${h},left=${left},top=${top},scrollbars=yes,resizable=yes,noopener,noreferrer`,
  );
}

export function ChecklistCTAs({
  variant = "light",
  className = "mt-8",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const { t } = useTranslation();
  const isDark = variant === "dark";
  const handleClick = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    openInNewWindow(url);
  };
  const base =
    "group flex items-center gap-3 rounded-full border-2 px-5 py-4 font-bold shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all";
  const theme = isDark
    ? "bg-white/10 border-white/40 text-white hover:bg-white/15"
    : "bg-white border-primary text-primary hover:bg-primary hover:text-primary-foreground";
  return (
    <div className={`grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto ${className}`}>
      <a href={FORM_AUTOVALUTAZIONE} onClick={handleClick(FORM_AUTOVALUTAZIONE)} className={`${base} ${theme}`}>
        <ClipboardCheck className="h-5 w-5 shrink-0" aria-hidden />
        <span className="flex-1 text-sm md:text-base leading-tight text-left">
          {t("checklist.autovalutazione")}
        </span>
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </a>
      <a href={FORM_VERIFICA} onClick={handleClick(FORM_VERIFICA)} className={`${base} ${theme}`}>
        <FileCheck2 className="h-5 w-5 shrink-0" aria-hidden />
        <span className="flex-1 text-sm md:text-base leading-tight text-left">
          {t("checklist.verifica")}
        </span>
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </a>
    </div>
  );
}
