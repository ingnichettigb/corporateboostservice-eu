import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Phone, MapPin, FileText, Mail } from "lucide-react";

export function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="[background:var(--gradient-section-footer)] text-white pt-14 pb-8">
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold mb-1">{t("brand")}</p>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-3">{t("motto")}</p>
          <p className="text-white/85 leading-relaxed">{t("footer.tagline")}</p>
        </div>

        <address className="not-italic space-y-3 text-white/95">
          <p className="font-bold text-lg">Nichetti Gian Battista</p>
          <p className="inline-flex items-start gap-2"><MapPin className="h-5 w-5 mt-0.5 shrink-0" aria-hidden /><span><span className="sr-only">{t("footer.address")}: </span>Soresina (CR), Italia</span></p>
          <p className="inline-flex items-center gap-2"><Phone className="h-5 w-5 shrink-0" aria-hidden /><a href="tel:+393396344660" className="hover:underline focus-visible:underline font-semibold"><span className="sr-only">{t("footer.phone")}: </span>339 634 4660</a></p>
          <p className="inline-flex items-center gap-2"><FileText className="h-5 w-5 shrink-0" aria-hidden /><span>{t("footer.vat")}: IT 01235350194</span></p>
          <p className="inline-flex items-center gap-2"><Mail className="h-5 w-5 shrink-0" aria-hidden /><a href="mailto:team@corporateboostservice.eu" className="hover:underline focus-visible:underline">team@corporateboostservice.eu</a></p>
        </address>

        <nav className="flex flex-col gap-2 md:items-end" aria-label="Footer">
          <Link to="/" className="hover:underline focus-visible:underline">{t("nav.home")}</Link>
          <Link to="/corsi" className="hover:underline focus-visible:underline">{t("nav.corsi")}</Link>
          <Link to="/applicazioni" className="hover:underline focus-visible:underline">{t("nav.applicazioni")}</Link>
          <Link to="/" hash="contatti" className="hover:underline focus-visible:underline">{t("nav.contatti")}</Link>

          <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/70">{t("legal.footerHeading")}</span>
          <Link to="/prezzi" className="hover:underline focus-visible:underline">{t("legal.navPrezzi")}</Link>
          <Link to="/termini-e-condizioni" className="hover:underline focus-visible:underline">{t("legal.navTermini")}</Link>
          <Link to="/termini-di-servizio" className="hover:underline focus-visible:underline">{t("legal.navServizio")}</Link>
          <Link to="/privacy-policy" className="hover:underline focus-visible:underline">{t("legal.navPrivacy")}</Link>
          <Link to="/politica-di-rimborso" className="hover:underline focus-visible:underline">{t("legal.navRimborso")}</Link>
          <Link to="/pagamenti-merchant-of-record" className="hover:underline focus-visible:underline">{t("legal.navPagamenti")}</Link>
          <Link to="/mappa-del-sito" className="hover:underline focus-visible:underline">Mappa del sito</Link>

        </nav>
      </div>


      <div className="container mx-auto px-4 mt-10 pt-6 border-t border-white/25 text-sm text-white/80 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} {t("brand")} — {t("footer.rights")}.</span>
        <span>P.IVA IT 01235350194</span>
      </div>
    </footer>
  );
}
