import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { ChevronRight } from "lucide-react";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: i18n.t("legal.index.metaTitle") },
      { name: "description", content: i18n.t("legal.index.metaDesc") },
      { property: "og:title", content: i18n.t("legal.index.metaTitle") },
      { property: "og:description", content: i18n.t("legal.index.metaDesc") },
    ],
  }),
  component: LegalIndex,
});

const links = [
  { to: "/prezzi", key: "navPrezzi" },
  { to: "/termini-e-condizioni", key: "navTermini" },
  { to: "/termini-di-servizio", key: "navServizio" },
  { to: "/privacy-policy", key: "navPrivacy" },
  { to: "/politica-di-rimborso", key: "navRimborso" },
] as const;

function LegalIndex() {
  const { t } = useTranslation();
  return (
    <LegalLayout badge={t("legal.index.badge")} title={t("legal.index.title")} subtitle={t("legal.index.subtitle")}>
      <p className="text-foreground/85 mb-8">{t("legal.index.intro")}</p>
      <h2 className="text-xl font-bold mb-4">{t("legal.index.linksHeading")}</h2>
      <ul className="divide-y divide-border rounded-xl border border-border overflow-hidden">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="flex items-center justify-between px-5 py-4 hover:bg-muted transition-colors font-medium"
            >
              {t(`legal.${l.key}`)}
              <ChevronRight className="h-5 w-5 text-primary" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </LegalLayout>
  );
}
