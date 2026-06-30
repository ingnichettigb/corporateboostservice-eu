import { Link } from "@tanstack/react-router";
import { ShieldCheck, Menu, X, ChevronDown, Scale, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AccessibilityToggles } from "@/components/AccessibilityToggles";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const legalLinks = [
  { to: "/termini-e-condizioni", key: "legal.navTermini" },
  { to: "/termini-di-servizio", key: "legal.navServizio" },
  { to: "/privacy-policy", key: "legal.navPrivacy" },
  { to: "/politica-di-rimborso", key: "legal.navRimborso" },
  { to: "/pagamenti-merchant-of-record", key: "legal.navPagamenti" },
] as const;

export function SiteHeader() {
  const { t } = useTranslation();
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-b-2 border-primary/20">
      <nav className="container mx-auto flex items-center justify-between gap-3 px-4 py-3" aria-label="Main">
        <Link to="/" className="flex items-center gap-3 font-bold tracking-tight shrink-0">
          <span className="h-11 w-11 rounded-lg [background:var(--gradient-hero)] flex items-center justify-center shadow-[var(--shadow-card)]">
            <ShieldCheck className="h-6 w-6 text-primary-foreground" aria-hidden />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-base md:text-lg text-foreground">{t("brand")}</span>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{t("motto")}</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <AccessibilityToggles />
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/carrello"
            aria-label={t("legal.cart.title")}
            className="relative min-w-11 min-h-11 inline-flex items-center justify-center rounded-md border-2 border-foreground/20 text-foreground hover:bg-primary/15"
            activeProps={{ className: "bg-primary text-primary-foreground border-primary" }}
          >
            <ShoppingCart className="h-5 w-5" aria-hidden />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                {count}
              </span>
            )}
          </Link>
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden min-w-11 min-h-11 inline-flex items-center justify-center rounded-md border-2 border-foreground/20"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Barra pagine principali - sempre visibile, scrollabile su mobile */}
      <div className="border-t border-primary/15 bg-primary/5">
        <div className="container mx-auto px-2 overflow-x-auto">
          <ul className="flex items-center gap-1 min-h-12 text-sm md:text-base font-semibold whitespace-nowrap">
            <li>
              <Link
                to="/"
                activeOptions={{ exact: true }}
                activeProps={{ className: "bg-primary text-primary-foreground" }}
                className="inline-flex items-center min-h-11 px-4 rounded-md text-foreground hover:bg-primary/15"
              >
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/corsi"
                activeProps={{ className: "bg-primary text-primary-foreground" }}
                className="inline-flex items-center min-h-11 px-4 rounded-md text-foreground hover:bg-primary/15"
              >
                {t("nav.corsi")}
              </Link>
            </li>
            <li>
              <Link
                to="/applicazioni"
                activeProps={{ className: "bg-primary text-primary-foreground" }}
                className="inline-flex items-center min-h-11 px-4 rounded-md text-foreground hover:bg-primary/15"
              >
                {t("nav.applicazioni")}
              </Link>
            </li>
            <li>
              <Link
                to="/prezzi"
                activeProps={{ className: "bg-primary text-primary-foreground" }}
                className="inline-flex items-center min-h-11 px-4 rounded-md text-foreground hover:bg-primary/15"
              >
                {t("legal.navPrezzi")}
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="inline-flex items-center gap-1 min-h-11 px-4 rounded-md text-foreground hover:bg-primary/15 outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  <Scale className="h-4 w-4" aria-hidden /> {t("legal.navLegalMenu")}
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-56">
                  {legalLinks.map((l) => (
                    <DropdownMenuItem key={l.to} asChild>
                      <Link to={l.to} className="w-full cursor-pointer">
                        {t(l.key)}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link
                to="/"
                hash="contatti"
                className="inline-flex items-center min-h-11 px-4 rounded-md text-foreground hover:bg-primary/15"
              >
                {t("nav.contatti")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-primary/20 bg-background px-4 py-4 flex flex-col gap-3">
          <Link
            to="/prezzi"
            onClick={() => setOpen(false)}
            className="inline-flex items-center min-h-11 px-3 rounded-md font-semibold text-foreground hover:bg-primary/15"
          >
            {t("legal.navPrezzi")}
          </Link>
          <div className="border-t border-primary/15 pt-3">
            <p className="flex items-center gap-2 px-3 mb-1 text-sm font-bold text-primary uppercase tracking-wider">
              <Scale className="h-4 w-4" aria-hidden /> {t("legal.navLegalMenu")}
            </p>
            {legalLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block min-h-11 px-3 py-2 rounded-md text-foreground hover:bg-primary/15"
              >
                {t(l.key)}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-primary/15 pt-3">
            <AccessibilityToggles />
          </div>
        </div>
      )}
    </header>
  );
}
