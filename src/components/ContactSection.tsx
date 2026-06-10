import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, Phone } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { t } = useTranslation();
  return (
    <section id="contatti" className="py-24 [background:var(--gradient-section-contact)] border-t-2 border-primary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-base font-bold text-primary mb-3 uppercase tracking-wider">{t("contact.kicker")}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">{t("contact.title")}</h2>
          <p className="mt-4 text-foreground/85 max-w-xl mx-auto text-lg">{t("contact.subtitle")}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <a href="mailto:team@corporateboostservice.eu" className="inline-flex items-center gap-2 text-primary font-bold hover:underline focus-visible:underline">
              <Mail className="h-5 w-5" aria-hidden /><span>team@corporateboostservice.eu</span>
            </a>
            <a href="tel:+393396344660" className="inline-flex items-center gap-2 text-primary font-bold hover:underline focus-visible:underline">
              <Phone className="h-5 w-5" aria-hidden /><span>339 634 4660</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success(t("contact.sent"));
            (e.target as HTMLFormElement).reset();
          }}
          className="grid gap-5 p-8 md:p-10 rounded-2xl bg-card border-2 border-primary/15 shadow-[var(--shadow-card)]"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name" className="font-semibold text-base">{t("contact.name")}</Label>
              <Input id="name" required placeholder={t("contact.namePh")} className="h-12 text-base" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="font-semibold text-base">{t("contact.email")}</Label>
              <Input id="email" type="email" required placeholder={t("contact.emailPh")} className="h-12 text-base" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject" className="font-semibold text-base">{t("contact.subject")}</Label>
            <Input id="subject" placeholder={t("contact.subjectPh")} className="h-12 text-base" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="font-semibold text-base">{t("contact.message")}</Label>
            <Textarea id="message" required rows={5} placeholder={t("contact.messagePh")} className="text-base" />
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="hero" size="lg" className="h-12 px-8">
              {t("contact.send")} <Send className="ml-1" aria-hidden />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
