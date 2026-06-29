import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { Building2, MapPin, Phone, Hash, Mail } from "lucide-react";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: i18n.t("legal.privacy.metaTitle") },
      { name: "description", content: i18n.t("legal.privacy.metaDesc") },
      { property: "og:title", content: i18n.t("legal.privacy.metaTitle") },
      { property: "og:description", content: i18n.t("legal.privacy.metaDesc") },
    ],
  }),
  component: PrivacyPage,
});

const related = [
  { to: "/prezzi", key: "navPrezzi" },
  { to: "/termini-e-condizioni", key: "navTermini" },
  { to: "/termini-di-servizio", key: "navServizio" },
  { to: "/politica-di-rimborso", key: "navRimborso" },
] as const;

function PrivacyPage() {
  const { t } = useTranslation();
  const sections = t("legal.privacy.sections", { returnObjects: true }) as {
    heading: string;
    body: string;
  }[];

  return (
    <LegalLayout badge={t("legal.privacy.badge")} title={t("legal.privacy.title")} subtitle={t("legal.privacy.subtitle")}>
      <div className="mb-10 rounded-xl border border-border bg-muted/40 p-5">
        <div className="flex items-center gap-2 mb-4 font-bold text-lg">
          <Building2 className="h-5 w-5 text-primary" aria-hidden /> {t("legal.privacy.titolareHeading")}
        </div>
        <p className="font-semibold mb-3">{t("legal.privacy.titolare")}</p>
        <ul className="space-y-2 text-sm text-foreground/85">
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" aria-hidden />
            <span><strong>{t("legal.privacy.indirizzoLabel")}:</strong> {t("legal.privacy.indirizzo")}</span>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" aria-hidden />
            <span><strong>{t("legal.privacy.telefonoLabel")}:</strong> {t("legal.privacy.telefono")}</span>
          </li>
          <li className="flex items-center gap-2">
            <Hash className="h-4 w-4 text-primary" aria-hidden />
            <span><strong>{t("legal.privacy.pivaLabel")}:</strong> {t("legal.privacy.piva")}</span>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" aria-hidden />
            <a href={`mailto:${t("legal.privacy.email")}`} className="text-primary underline underline-offset-4">
              {t("legal.privacy.email")}
            </a>
          </li>
        </ul>
      </div>

      {sections.map((s) => (
        <LegalSection key={s.heading} heading={s.heading}>
          <p>{s.body}</p>
        </LegalSection>
      ))}

      <LegalSection heading={t("legal.paddleHeading")}>
        <p>{t("legal.paddleBody")}</p>
        <p>
          {t("legal.paddleRefPrivacy")}{" "}
          <Link to="/pagamenti-merchant-of-record" className="text-primary underline underline-offset-4 hover:opacity-80">
            → {t("legal.paddleRefLink")}
          </Link>
        </p>
      </LegalSection>

      <div className="mt-6 border-t border-border pt-6">
        <h2 className="text-lg font-bold mb-3">{t("legal.privacy.relatedHeading")}</h2>
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
