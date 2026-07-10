import { ShieldCheck, FileLock, HardHat, Newspaper, Wrench, Factory, ClipboardCheck, BookOpen, FlaskConical, Container } from "lucide-react";
import smartMaintenanceLogo from "@/assets/apps/smartmaintenance.jpg.asset.json";
import pedflowLogo from "@/assets/apps/pedflow.png.asset.json";
import minifatLogo from "@/assets/apps/minifat.png.asset.json";
import mocaSerbatoiLogo from "@/assets/apps/moca-serbatoi.png.asset.json";

export const corsi = [
  { icon: ShieldCheck, key: "gdprAddetto", wip: false, hasSubtitle: true },
  { icon: FileLock, key: "privacy", wip: true },
  { icon: ShieldCheck, key: "gdpr", wip: true },
  { icon: HardHat, key: "sicurezza", wip: true },
  { icon: Newspaper, key: "news", wip: true },
] as const;

export const applicazioni = [
  { icon: FlaskConical, key: "pedFlow", image: pedflowLogo.url, wip: false },
  { icon: ClipboardCheck, key: "miniFat", image: minifatLogo.url, wip: false },
  { icon: Container, key: "mocaSerbatoi", image: mocaSerbatoiLogo.url, wip: false },
  { icon: Wrench, key: "smartMaintenance", image: smartMaintenanceLogo.url, wip: false },
  { icon: Factory, key: "fat", wip: true },
  { icon: ClipboardCheck, key: "sat", wip: true },
  { icon: BookOpen, key: "lp", wip: true },
] as const;
