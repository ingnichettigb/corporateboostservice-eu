import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/termini-e-condizioni")({
  head: () => ({
    meta: [
      { title: i18n.t("legal.termini.metaTitle") },
      { name: "description", content: i18n.t("legal.termini.metaDesc") },
      { property: "og:title", content: i18n.t("legal.termini.metaTitle") },
      { property: "og:description", content: i18n.t("legal.termini.metaDesc") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TerminiPage,
});

const related = [
  { to: "/prezzi", key: "navPrezzi" },
  { to: "/termini-di-servizio", key: "navServizio" },
  { to: "/privacy-policy", key: "navPrivacy" },
  { to: "/politica-di-rimborso", key: "navRimborso" },
] as const;

function TerminiPage() {
  const { t } = useTranslation();
  const sections = t("legal.termini.sections", { returnObjects: true }) as {
    heading: string;
    body: string;
  }[];

  return (
    <LegalLayout badge={t("legal.termini.badge")} title={t("legal.termini.title")} subtitle={t("legal.termini.subtitle")}>
      {sections.map((s) => (
        <LegalSection key={s.heading} heading={s.heading}>
          <p>{s.body}</p>
        </LegalSection>
      ))}

      <div className="mt-6 border-t border-border pt-6">
        <h2 className="text-lg font-bold mb-3">{t("legal.termini.relatedHeading")}</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          {related.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-primary underline underline-offset-4 hover:opacity-80">
                {t(`legal.${l.key}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </LegalLayout>
  );
}
