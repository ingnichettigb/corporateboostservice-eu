import { ShieldCheck, FileLock, HardHat, Newspaper, Wrench, ClipboardCheck, FlaskConical, CalendarClock, KeyRound, Recycle } from "lucide-react";
import taraturaLogo from "@/assets/apps/taratura-serbatoi.png.asset.json";
import ricicloPpwrLogo from "@/assets/apps/riciclo-ppwr.png.asset.json";
import smartMaintenanceLogo from "@/assets/apps/smartmaintenance.jpg.asset.json";
import pedflowLogo from "@/assets/apps/pedflow.png.asset.json";
import minifatLogo from "@/assets/apps/minifat.png.asset.json";

export const corsi = [
  { icon: ShieldCheck, key: "gdprAddetto", wip: false, hasSubtitle: true },
  { icon: FileLock, key: "privacy", wip: false },
  { icon: ShieldCheck, key: "gdpr", wip: true },
  { icon: HardHat, key: "sicurezza", wip: true },
  { icon: Newspaper, key: "news", wip: true },
] as const;

export const applicazioni = [
  { icon: FlaskConical, key: "pedFlow", image: pedflowLogo.url, wip: false },
  { icon: ClipboardCheck, key: "miniFat", image: minifatLogo.url, wip: false },
  { icon: Wrench, key: "smartMaintenance", image: smartMaintenanceLogo.url, wip: false },
  { icon: CalendarClock, key: "agendaShare", wip: false },
  { icon: KeyRound, key: "registroCredenziali", wip: false },
  { icon: Recycle, key: "ricicloPpwr", image: ricicloPpwrLogo.url, wip: false },
  { icon: Recycle, key: "riusoPpwr", wip: true },
  { icon: Recycle, key: "taraturaSerbatoi", image: taraturaLogo.url, wip: false },
] as const;
