"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { itHref } from "@/lib/i18n-routes";
import { useIsItalian } from "@/lib/use-is-italian";

/**
 * One footer, two languages. Each item carries both labels and its English
 * path; on an Italian page the label is the Italian one and the path is the
 * Italian counterpart from lib/i18n-routes.ts.
 */
interface FooterLink {
  label: string;
  it: string;
  href: string;
}

const advisoryServices: FooterLink[] = [
  { label: "AI Governance & Compliance Advisory", it: "Consulenza AI, governance e compliance", href: "/services/governance-advisory" },
  { label: "Fractional AI CTO", it: "Fractional AI CTO", href: "/services/fractional-cto" },
  { label: "Exposure assessment — PLD 2024", it: "Assessment di esposizione — PLD 2024", href: "/assessment" },
  { label: "On-premise AI for healthcare", it: "AI on-premise per la sanità", href: "/ai-on-premise-healthcare" },
];

const legal: FooterLink[] = [
  { label: "Nexus MDS Core", it: "Nexus MDS Core", href: "/platform" },
  { label: "CEPF Methodology", it: "Metodologia CEPF", href: "/cepf" },
  { label: "Calibra", it: "Calibra", href: "/calibra" },
  { label: "EU Tech Sovereignty", it: "Sovranità tecnologica UE", href: "/tech-sovereignty" },
  { label: "Case Studies", it: "Case study", href: "/case-studies" },
  { label: "Research", it: "Ricerca", href: "/research" },
  { label: "Answers", it: "Risposte", href: "/answers" },
  { label: "Editorial series — PLD 2024", it: "Serie editoriale — PLD 2024", href: "/research/editorial-series" },
  { label: "About", it: "Chi siamo", href: "/about" },
  { label: "Trust", it: "Trust", href: "/trust" },
  { label: "Privacy Policy", it: "Informativa privacy", href: "/privacy" },
];

const T = {
  en: {
    tagline: "Sovereign AI Infrastructure for Regulated Industries · Italy",
    services: "Services",
    advisory: "Advisory & Strategy",
    company: "Company",
    contact: "Contact",
    preferred: "SMS / WhatsApp preferred",
    conversation: "Start a conversation",
    bottom:
      "Milano, Italy · Controls mapped to GDPR · AI Act · PLD 2024 · ISO 27001 · CADA proposal — no certification claimed · EU data residency",
  },
  it: {
    tagline: "Infrastruttura AI sovrana per settori regolamentati · Italia",
    services: "Servizi",
    advisory: "Consulenza e strategia",
    company: "Azienda",
    contact: "Contatti",
    preferred: "Preferibilmente SMS / WhatsApp",
    conversation: "Inizia una conversazione",
    bottom:
      "Milano, Italia · Controlli mappati su GDPR · AI Act · PLD 2024 · ISO 27001 · proposta CADA — nessuna certificazione dichiarata · residenza dei dati in UE",
  },
};

export function Footer() {
  const isItalian = useIsItalian();
  const t = isItalian ? T.it : T.en;
  const label = (l: FooterLink) => (isItalian ? l.it : l.label);
  const href = (path: string) => (isItalian ? itHref(path) : path);

  return (
    <footer className="bg-[#0D1117] border-t border-[#30363D]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Logo + tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Dynamics Consulting"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-syne text-[#E6EDF3] font-bold text-xs tracking-[0.15em] uppercase leading-none">
                  DYNAMICS
                </p>
                <p className="font-syne text-[#00B4D8] font-bold text-xs tracking-[0.15em] uppercase leading-none mt-0.5">
                  CONSULTING
                </p>
              </div>
            </div>
            <p className="text-[#7D8FA3] text-sm leading-relaxed mb-4">
              {t.tagline}
            </p>
            <p className="text-[#7D8FA3] text-xs font-mono">P.IVA: 10651160961</p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="font-dm font-semibold text-[#E6EDF3] text-xs uppercase tracking-widest mb-4">
              {t.services}
            </h4>
            <p className="text-[#00B4D8] text-[10px] font-mono tracking-widest uppercase mb-2">
              {t.advisory}
            </p>
            <ul className="space-y-2">
              {advisoryServices.map((s) => (
                <li key={s.href}>
                  <Link
                    href={href(s.href)}
                    className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200"
                  >
                    {label(s)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <h4 className="font-dm font-semibold text-[#E6EDF3] text-xs uppercase tracking-widest mb-4">
              {t.company}
            </h4>
            <ul className="space-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={href(l.href)}
                    className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200"
                  >
                    {label(l)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-dm font-semibold text-[#E6EDF3] text-xs uppercase tracking-widest mb-4">
              {t.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@dynamicsconsulting.it"
                  className="flex items-center gap-2 text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200"
                >
                  <Mail size={14} />
                  info@dynamicsconsulting.it
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393407253246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200"
                >
                  <Phone size={14} />
                  +39 3407253246
                </a>
              </li>
              <li className="text-[#7D8FA3] text-xs font-mono pt-1">
                {t.preferred}
              </li>
            </ul>
            <Link
              href={href("/contact")}
              className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 border border-[#30363D] hover:border-[#00B4D8] text-[#E6EDF3] hover:text-[#00B4D8] rounded-lg text-sm font-medium transition-all duration-200"
            >
              {t.conversation}
            </Link>
          </div>
        </div>

        {/* Italian resources */}
        <div className="mt-10 pt-8 border-t border-[#30363D]">
          <h4 className="font-dm font-semibold text-[#E6EDF3] text-xs uppercase tracking-widest mb-3">
            Risorse in italiano
          </h4>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <Link href="/it" hrefLang="it" className="text-[#00B4D8] hover:text-[#E6EDF3] text-sm font-medium transition-colors duration-200">
              Tutte le risorse in italiano
            </Link>
            <Link href="/it/consulenza-ai-governance-compliance" hrefLang="it" className="text-[#00B4D8] hover:text-[#E6EDF3] text-sm font-medium transition-colors duration-200">
              Consulenza AI, governance e compliance
            </Link>
            <Link href="/it/assessment" hrefLang="it" className="text-[#00B4D8] hover:text-[#E6EDF3] text-sm font-medium transition-colors duration-200">
              Assessment di esposizione
            </Link>
            <Link href="/it/normativa" hrefLang="it" className="text-[#00B4D8] hover:text-[#E6EDF3] text-sm font-medium transition-colors duration-200">
              Normativa: AI, dati e sicurezza
            </Link>
            <Link href="/it/piattaforma-nexus" hrefLang="it" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              Nexus MDS Core — la piattaforma
            </Link>
            <Link href="/it/case-studies/federfarma" hrefLang="it" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              Case study: Federfarma Lombarda
            </Link>
            <Link href="/it/ai-sanitaria-on-premise" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              AI On-Premise per la Sanità
            </Link>
            <Link href="/it/sovereign-ai-italia" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              Sovereign AI Italia
            </Link>
            <Link href="/it/ai-dati-aziendali" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              AI Dati Aziendali
            </Link>
            <Link href="/it/ai-ingegneria-tecnica" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              AI Ingegneria Tecnica
            </Link>
            <Link href="/it/ai-agenti-finanziari" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              AI Agenti Finanziari
            </Link>
            <Link href="/it/fractional-cto-milano" hrefLang="it" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              Fractional CTO Milano
            </Link>
            <Link href="/it/ai-sovrana-pharma" hrefLang="it" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              AI Sovrana per il Pharma
            </Link>
            <Link href="/it/modernizzazione-sistemi-legacy-ai" hrefLang="it" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              Modernizzazione sistemi legacy
            </Link>
            <Link href="/it/ricerca/serie-editoriale" hrefLang="it" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              Serie PLD 2024 — dieci articoli
            </Link>
            <Link href="/it/cra-11-settembre" hrefLang="it" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              CRA: segnalazione in 24 ore
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#30363D] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#7D8FA3] text-[10px] sm:text-xs font-mono text-center sm:text-left">
            © {new Date().getFullYear()} Dynamics Consulting — Corrado Patierno — P.IVA 10651160961
          </p>
          <p className="text-[#7D8FA3] text-[10px] sm:text-xs font-mono text-center sm:text-right">
            {t.bottom}
          </p>
        </div>
      </div>
    </footer>
  );
}
