import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

interface LegalLayoutProps {
  badge: string;
  title: string;
  subtitle?: string;
  wide?: boolean;
  children: ReactNode;
}

export function LegalLayout({ badge, title, subtitle, wide = false, children }: LegalLayoutProps) {
  const { t } = useTranslation();
  const widthClass = wide ? "max-w-5xl" : "max-w-3xl";
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-36 md:pt-44">
        <div className={`container mx-auto px-4 ${widthClass}`}>
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/legal">
              <ArrowLeft className="h-4 w-4" /> {t("legal.backToLegal")}
            </Link>
          </Button>
        </div>

        <section className="pb-12 [background:var(--gradient-section-hero)]">
          <div className={`container mx-auto px-4 ${widthClass} text-center`}>
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-white px-4 py-2 text-sm font-semibold mb-6">
              <Scale className="h-4 w-4 text-primary" aria-hidden /> {badge}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 text-lg text-foreground/85 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </section>

        <section className="py-14 bg-background">
          <div className={`container mx-auto px-4 ${widthClass}`}>{children}</div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}


interface LegalSectionProps {
  heading: string;
  children: ReactNode;
}

export function LegalSection({ heading, children }: LegalSectionProps) {
  return (
    <div className="mb-10">
      <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">{heading}</h2>
      <div className="space-y-3 text-foreground/85 leading-relaxed">{children}</div>
    </div>
  );
}
