import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Clock,
  UserCheck,
  KeyRound,
  FileSpreadsheet,
  FileText,
  Lock,
  Copy,
  Users,
  EyeOff,
  CheckCircle2,
  FolderTree,
  MonitorCheck,
  UserMinus,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/registro-credenziali-fornitori")({
  head: () => ({
    title: "Registro Credenziali e Siti Web Fornitori | 040RegistroWEB",
    meta: [
      {
        name: "description",
        content:
          "Il SaaS aziendale per centralizzare password e siti web fornitori. Primo accesso Amministratore, permessi per categoria, copia in 1 clic, backup Excel/PDF blindato.",
      },
      {
        property: "og:title",
        content: "Registro Credenziali e Siti Web Fornitori | 040RegistroWEB",
      },
      {
        property: "og:description",
        content:
          "Basta password disperse. Centralizza l'accesso ai portali fornitori con permessi per categoria e backup riservato all'Amministratore.",
      },
    ],
  }),
  component: RegistroCredenzialiPage,
});

function RegistroCredenzialiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#060a12] text-slate-100 font-sans selection:bg-[#b4ff3c] selection:text-black">
      {/* GLOW DECORATIVI DI SFONDO */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00e5ff]/10 via-[#b4ff3c]/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#00e5ff]/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-24">
        
        {/* ================= HERO SECTION ================= */}
        <section className="text-center space-y-8 max-w-4xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#b4ff3c]/30 bg-[#0a182e]/80 text-[#b4ff3c] text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-[0_0_20px_rgba(180,255,60,0.15)]">
            <Sparkles className="w-4 h-4 text-[#b4ff3c]" />
            Software SaaS 040RegistroWEB
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Tutte le credenziali dei fornitori,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4ff3c] via-[#00e5ff] to-white">
              in un unico registro blindato e sicuro.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Basta perdere tempo tra fogli volanti, chat interne e continui reset di password. 
            Il primo accesso nomina automaticamente l'<strong>Amministratore</strong>, che assegna in un clic 
            credenziali personali e categorie dedicate a ogni collaboratore. Copia rapida in un tocco, password cifrate 
            e <strong>backup Excel/PDF riservato esclusivamente alla direzione</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#prezzi"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-black bg-[#b4ff3c] hover:bg-[#a2ec2e] transition-all shadow-[0_0_30px_rgba(180,255,60,0.3)] hover:scale-[1.02]"
            >
              Attiva la licenza aziendale
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#come-funziona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-200 bg-[#0a182e] border border-slate-700 hover:border-slate-500 hover:bg-[#0f2444] transition-all"
            >
              Come funziona
            </a>
          </div>

          {/* BADGE DI RASSICURAZIONE */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b4ff3c]" />
              <span>Attivazione immediata</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b4ff3c]" />
              <span>Zero server da installare</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b4ff3c]" />
              <span>Crittografia Cloud AES-256</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#b4ff3c]" />
              <span>Backup periodico Excel & PDF</span>
            </div>
          </div>
        </section>

        {/* ================= I 3 PROBLEMI RISOLTI ================= */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Quanto tempo perde ogni giorno la tua azienda?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              La gestione disordinata delle credenziali aziendali è la prima causa di inefficienza e rischi di sicurezza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0a182e]/60 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-xl">
                ✕
              </div>
              <h3 className="text-lg font-bold text-white">Ricerche estenuanti e lavoro bloccato</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dipendenti che chiedono in chat <em>"Chi ha la password del corriere?"</em> o <em>"Qual è l'ID del portale fatture?"</em>. 
                Ore di lavoro perse ogni settimana per recuperare credenziali dimenticate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a182e]/60 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xl">
                !
              </div>
              <h3 className="text-lg font-bold text-white">Tutti vedono tutto (Rischio Privacy)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Condividere fogli Excel con tutte le password espone i dati contabili, bancari e amministrativi anche a chi non dovrebbe 
                avervi accesso. Con RegistroWEB ogni dipendente vede solo la sua categoria.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0a182e]/60 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-xl">
                ⚠
              </div>
              <h3 className="text-lg font-bold text-white">Rischio fuga dati se un collaboratore lascia</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Se un dipendente se ne va, ha già copiato l'intero archivio? Con RegistroWEB solo l'amministratore può esportare 
                i file e per disattivare un collaboratore basta un solo clic sul suo PUK.
              </p>
            </div>
          </div>
        </section>

        {/* ================= FLUSSO OPERATIVO IN 4 PASSAGGI ================= */}
        <section id="come-funziona" className="space-y-12 scroll-mt-20">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#00e5ff] font-semibold">Semplicità Assoluta</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Come funziona il Registro in 4 semplici passaggi
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Nessuna configurazione IT complessa: basta una connessione web e il sistema è operativo in due minuti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* STEP 1 */}
            <div className="p-8 rounded-2xl bg-[#0a182e] border border-slate-800 relative overflow-hidden group hover:border-[#b4ff3c]/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#b4ff3c]/10 text-[#b4ff3c] border border-[#b4ff3c]/30 flex items-center justify-center font-black text-lg">
                  01
                </span>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#b4ff3c]" />
                  Il primo accesso nomina l'Amministratore
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                La direzione o il responsabile aziendale inserisce la Licenza e il primo codice PUK. Il sistema riconosce 
                automaticamente il primo utente come <strong>Amministratore Unico</strong>, abilitando la gestione delle postazioni, 
                i dati ditta e i permessi di sicurezza.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="p-8 rounded-2xl bg-[#0a182e] border border-slate-800 relative overflow-hidden group hover:border-[#00e5ff]/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 flex items-center justify-center font-black text-lg">
                  02
                </span>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#00e5ff]" />
                  Invito dei collaboratori in un clic
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                L'amministratore apre il pannello <em>Gestione Postazioni</em>, inserisce l'email del dipendente, sceglie se dare 
                <strong> Accesso Completo</strong> (può aggiungere o modificare siti) o <strong>Sola Lettura</strong> (può solo consultare e copiare), 
                spunta le categorie consentite e preme <strong>"Invia credenziali"</strong>. Il sistema invia subito un'email automatica con licenza e PUK personale.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="p-8 rounded-2xl bg-[#0a182e] border border-slate-800 relative overflow-hidden group hover:border-[#b4ff3c]/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#b4ff3c]/10 text-[#b4ff3c] border border-[#b4ff3c]/30 flex items-center justify-center font-black text-lg">
                  03
                </span>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Copy className="w-5 h-5 text-[#b4ff3c]" />
                  Accesso rapido con 3 pulsanti copia in 1 clic
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Ogni collaboratore accede al registro vedendo solo i siti del proprio reparto. Con un clic sul pulsante dedicato 
                apre il sito fornitore, con un clic copia il nome utente o ID, con un clic copia la password negli appunti 
                <strong> senza mostrarla in chiaro a video</strong>. Velocità istantanea e zero errori di digitazione.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="p-8 rounded-2xl bg-[#0a182e] border border-slate-800 relative overflow-hidden group hover:border-[#00e5ff]/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 flex items-center justify-center font-black text-lg">
                  04
                </span>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-[#00e5ff]" />
                  Backup periodico & Ripristino blindati
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                <strong>I collaboratori non vedono i pulsanti di esportazione:</strong> non possono scaricare l'archivio. 
                Solo l'Amministratore può scaricare periodicamente la copia di sicurezza in <strong>Excel/CSV</strong> o in 
                <strong> PDF intestato con logo aziendale</strong> da conservare al sicuro. In caso di necessità, il restore 
                avviene in 5 secondi tramite importazione guidata con modalità <em>Unisci</em> o <em>Sostituisci</em>.
              </p>
            </div>
          </div>
        </section>

        {/* ================= FOCUS SICUREZZA & GOVERNANCE ================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0a182e] via-[#060a12] to-[#0a2444] border border-[#00e5ff]/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                Sicurezza Aziendale di Grado Bancario
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Controllo granulare: ogni reparto vede solo ciò che gli compete.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                L'amministratore crea o seleziona le categorie di appartenenza per ciascun fornitore (es. <em>Banche & Fisco, Hosting & Domini, Gestionali, Corrieri, Social Marketing</em>).
              </p>
              
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <FolderTree className="w-5 h-5 text-[#b4ff3c] shrink-0 mt-0.5" />
                  <span><strong>Filtro Categorie ad hoc:</strong> la logistica vede solo i corrieri; il marketing vede solo i social; la direzione vede tutto. Chi non è abilitato non sa neppure che quel fornitore esiste nel registro.</span>
                </li>
                <li className="flex items-start gap-3">
                  <UserMinus className="w-5 h-5 text-[#b4ff3c] shrink-0 mt-0.5" />
                  <span><strong>Offboarding in tempo reale:</strong> un collaboratore lascia l'azienda? L'amministratore elimina o riassegna il suo PUK con un clic. L'accesso viene revocato istantaneamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <EyeOff className="w-5 h-5 text-[#b4ff3c] shrink-0 mt-0.5" />
                  <span><strong>Nessun download non autorizzato:</strong> l'intero archivio non può essere scaricato dai dipendenti. Nessun rischio che un collaboratore salvi tutte le password su una chiavetta USB.</span>
                </li>
              </ul>
            </div>

            {/* BOX GRAFICO SIMULAZIONE INTERFACCIA */}
            <div className="p-6 rounded-2xl bg-[#060a12]/90 border border-slate-700/80 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2">Pannello Amministratore</span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#b4ff3c]/10 text-[#b4ff3c] font-semibold border border-[#b4ff3c]/30">
                  Ruolo: Amministratore
                </span>
              </div>

              {/* SIMULAZIONE RIGA FORNITORE CON 3 TASTI */}
              <div className="p-4 rounded-xl bg-[#0a182e] border border-slate-700/60 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-sm">Aruba Hosting & Server</h4>
                    <span className="text-[11px] text-[#00e5ff] font-mono">Categoria: Hosting & Domini</span>
                  </div>
                  <span className="text-xs text-slate-400">ID: 849204</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs text-slate-300 flex items-center justify-center gap-1">
                    <ExternalLink className="w-3 h-3 text-[#00e5ff]" />
                    <span>Apri Sito</span>
                  </div>
                  <div className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs text-slate-300 flex items-center justify-center gap-1">
                    <Copy className="w-3 h-3 text-[#b4ff3c]" />
                    <span>Copia ID</span>
                  </div>
                  <div className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-[#b4ff3c]/40 text-center text-xs text-[#b4ff3c] font-semibold flex items-center justify-center gap-1">
                    <KeyRound className="w-3 h-3" />
                    <span>Copia Pass</span>
                  </div>
                </div>
              </div>

              {/* SIMULAZIONE BOX GESTIONE POSTAZIONI */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Users className="w-3.5 h-3.5 text-[#00e5ff]" />
                    Postazioni Attive: 6 / 15
                  </span>
                  <span className="text-[#b4ff3c]">PUK-01 (Admin)</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#b4ff3c] to-[#00e5ff] h-full w-[40%]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BOX LANCIATORE DESKTOP PWA ================= */}
        <section className="p-8 rounded-2xl bg-[#0a182e]/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#060a12] border-2 border-[#b4ff3c] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(180,255,60,0.2)]">
              <MonitorCheck className="w-8 h-8 text-[#b4ff3c]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Installabile direttamente come App Desktop (PC & Mac)
              </h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Oltre all'accesso web, grazie alla tecnologia PWA puoi creare l'icona dedicata di <strong>040RegistroWEB</strong> direttamente 
                sul Desktop del tuo computer o sulla schermata Home dello smartphone per aprirlo all'istante con un doppio clic.
              </p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-xl bg-[#060a12] border border-slate-700 text-xs text-slate-300 whitespace-nowrap">
            Nessuna installazione complessa
          </span>
        </section>

        {/* ================= TABELLA PIANI & PREZZI ================= */}
        <section id="prezzi" className="space-y-12 scroll-mt-20">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#b4ff3c] font-semibold">Trasparenza Totale</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Scegli il piano ideale per la tua azienda
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Licenza annuale all-inclusive: nessun costo nascosto, aggiornamenti inclusi e supporto dedicato.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* PIANO 15 UTENTI (BASE / POPOLARE) */}
            <div className="p-8 rounded-3xl bg-[#0a182e] border-2 border-[#b4ff3c] relative flex flex-col justify-between shadow-[0_0_30px_rgba(180,255,60,0.15)]">
              <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full bg-[#b4ff3c] text-black text-xs font-black uppercase tracking-wider">
                Consigliato
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">040RegistroWEB - 015</h3>
                  <p className="text-xs text-slate-400 mt-1">Ideale per studi professionali e PMI</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">50 €</span>
                  <span className="text-slate-400 text-sm">/ anno + IVA</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 border-t border-slate-800 pt-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c]" />
                    <span>Fino a <strong>15 collaboratori (15 PUK)</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c]" />
                    <span>1 Amministratore + 14 Utenti</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c]" />
                    <span><strong>15 Esportazioni PDF/CSV</strong> all'anno</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c]" />
                    <span>Filtro categorie per ogni utente</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c]" />
                    <span>Invito con email automatica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b4ff3c]" />
                    <span>Backup & Restore Excel guidato</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a
                  href="https://040registroweb.corporateboostservice.eu/attivazione"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-black bg-[#b4ff3c] hover:bg-[#a2ec2e] transition-all shadow-md text-center"
                >
                  Attiva Piano 15 Postazioni
                </a>
              </div>
            </div>

            {/* PIANO 50 UTENTI */}
            <div className="p-8 rounded-3xl bg-[#0a182e]/70 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">040RegistroWEB - 050</h3>
                  <p className="text-xs text-slate-400 mt-1">Per aziende strutturate e reparti estesi</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">90 €</span>
                  <span className="text-slate-400 text-sm">/ anno + IVA</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 border-t border-slate-800 pt-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                    <span>Fino a <strong>50 collaboratori (50 PUK)</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                    <span>1 Amministratore + 49 Utenti</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                    <span><strong>50 Esportazioni PDF/CSV</strong> all'anno</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                    <span>Filtro categorie avanzato</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                    <span>Gestione completa multi-reparto</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                    <span>Supporto prioritario via email</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a
                  href="https://040registroweb.corporateboostservice.eu/attivazione"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-center"
                >
                  Attiva Piano 50 Postazioni
                </a>
              </div>
            </div>

            {/* PIANO 200 UTENTI */}
            <div className="p-8 rounded-3xl bg-[#0a182e]/70 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">040RegistroWEB - 200</h3>
                  <p className="text-xs text-slate-400 mt-1">Per grandi organizzazioni e gruppi societari</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">200 €</span>
                  <span className="text-slate-400 text-sm">/ anno + IVA</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 border-t border-slate-800 pt-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                    <span>Fino a <strong>200 collaboratori (200 PUK)</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                    <span>1 Amministratore + 199 Utenti</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                    <span><strong>200 Esportazioni PDF/CSV</strong> all'anno</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                    <span>Tutte le funzionalità enterprise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                    <span>Backup massivo illimitato</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                    <span>Onboarding dedicato</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <a
                  href="https://040registroweb.corporateboostservice.eu/attivazione"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-center"
                >
                  Attiva Piano 200 Postazioni
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ================= FAQ FREQUENTI ================= */}
        <section className="space-y-8 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Domande frequenti sul Registro
            </h2>
            <p className="text-slate-400 text-sm">
              Tutto quello che c'è da sapere su sicurezza, backup e ruoli.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Un collaboratore può scaricarsi l'elenco di tutte le password dell'azienda?",
                a: "Assolutamente no. I pulsanti di esportazione in PDF ed Excel sono visibili e utilizzabili esclusivamente dall'Amministratore. I collaboratori possono unicamente consultare o utilizzare le credenziali delle categorie loro assegnate.",
              },
              {
                q: "Come avviene il backup di sicurezza dei nostri dati aziendali?",
                a: "L'Amministratore può scaricare periodicamente una copia di backup completa in formato Excel/CSV o in PDF con intestazione e dati ditta. È compito dell'amministratore custodire il file Excel in una cartella sicura o su supporto aziendale protetto.",
              },
              {
                q: "Come posso ripristinare il registro in caso di cambio computer o problemi?",
                a: "Basta accedere come Amministratore, cliccare su 'Importa da file' e selezionare il file Excel di backup. Si può scegliere la modalità 'Unisci' (aggiunge i record mancanti senza duplicare gli esistenti) o 'Sostituisci' (ripristina da zero l'intero archivio).",
              },
              {
                q: "Cosa succede se un dipendente o collaboratore lascia l'azienda?",
                a: "L'Amministratore apre il pannello 'Gestione Postazioni' e cancella o riassegna il suo PUK con un solo clic. L'accesso del collaboratore viene revocato all'istante e, non avendo mai avuto accesso alle esportazioni, le password aziendali rimangono al sicuro.",
              },
              {
                q: "Come si assegna il ruolo di Amministratore?",
                a: "In modo completamente automatico: il primo utente che effettua l'accesso inserendo la Licenza aziendale e il primo PUK viene riconosciuto dal sistema come Amministratore Unico e gli viene sbloccato il pannello di controllo completo.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-xl bg-[#0a182e]/80 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-[#b4ff3c] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180 text-[#b4ff3c]" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA FINALE ================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0a182e] via-[#060a12] to-[#0a182e] border border-[#b4ff3c]/40 text-center space-y-6 shadow-[0_0_50px_rgba(180,255,60,0.1)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Metti in sicurezza le credenziali dei tuoi fornitori oggi stesso.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Attiva la licenza per la tua squadra, nomina l'amministratore ed elimina per sempre la dispersione di password aziendali.
          </p>
          <div className="pt-2">
            <a
              href="https://040registroweb.corporateboostservice.eu/attivazione"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-black bg-[#b4ff3c] hover:bg-[#a2ec2e] transition-all shadow-[0_0_30px_rgba(180,255,60,0.3)] text-base hover:scale-105"
            >
              Attiva subito 040RegistroWEB
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
