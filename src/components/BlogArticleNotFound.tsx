import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function BlogArticleNotFound() {
  const { t } = useTranslation("blog");
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-40 pb-24">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-foreground">{t("notFoundTitle")}</h1>
          <p className="mt-3 text-lg text-foreground/80">{t("notFoundText")}</p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 min-h-11 rounded-lg bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> {t("back")}
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
