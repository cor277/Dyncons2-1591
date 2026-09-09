"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { LanguageSwitch } from "./LanguageSwitch";
import { usePathname } from "next/navigation";
import { assessmentHref, assessmentLabel, isItalianPath } from "@/lib/locale";

interface NavChild {
  label: string;
  href: string;
  desc?: string;
}

interface NavLink {
  label: string;
  href?: string;
  children?: NavChild[];
}

/**
 * Two navigation trees, one per language.
 *
 * The Italian pages used to render the English menu, which meant that from an
 * Italian page every menu item led back out of Italian. They are a section of
 * the site, not a translation of it, so they get their own tree.
 *
 * Where an Italian reader's next step only exists in English — the platform
 * pages, the answers — the item is listed anyway and marked, because hiding it
 * would be worse than sending someone to a page in the wrong language they can
 * still read. Marked, not silent.
 */
const EN_NAV: NavLink[] = [
  {
    label: "Platform",
    children: [
      {
        label: "Nexus MDS Core",
        href: "/platform",
        desc: "Self-hosted AI platform — 16 services",
      },
      {
        label: "CEPF Methodology",
        href: "/cepf",
        desc: "Compliance-Epistemic Project Framework",
      },
      {
        label: "Cross-framework overlaps",
        href: "/cepf/overlaps",
        desc: "The 24 groups where regimes share a control",
      },
      {
        label: "Calibra",
        href: "/calibra",
        desc: "The software built on CEPF",
      },
    ],
  },
  {
    label: "Services",
    children: [
      {
        label: "AI Governance & Compliance Advisory",
        href: "/services/governance-advisory",
        desc: "AI consulting for regulated organisations — AI Act, PLD 2024, NIS2, DORA",
      },
      {
        label: "Fractional AI CTO",
        href: "/services/fractional-cto",
        desc: "Technology strategy and architectural governance, part-time",
      },
      {
        label: "Exposure assessment",
        href: "/assessment",
        desc: "Fixed-scope engagement on PLD 2024 and the AI Act",
      },
      {
        label: "On-premise AI for healthcare",
        href: "/ai-on-premise-healthcare",
        desc: "Hospitals, pharma and clinical research",
      },
      {
        label: "Technical capabilities",
        href: "/capabilities",
        desc: "Data platforms, Kubernetes, integration, Dynamics 365, automation",
      },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Research",
    children: [
      {
        label: "Research & insights",
        href: "/research",
        desc: "Long-form technical and regulatory writing",
      },
      {
        label: "Answers",
        href: "/answers",
        desc: "One question per page, answered in the first block",
      },
      {
        label: "Editorial series — PLD 2024",
        href: "/research/editorial-series",
        desc: "Six articles on the product liability directive, in Italian",
      },
      {
        label: "EU Tech Sovereignty & CADA",
        href: "/tech-sovereignty",
        desc: "The four Union assurance levels, analysed",
      },
    ],
  },
  { label: "About", href: "/about" },
];

const IT_NAV: NavLink[] = [
  {
    label: "Piattaforma",
    children: [
      {
        label: "Nexus MDS Core",
        href: "/platform",
        desc: "Piattaforma AI self-hosted, 16 servizi · in inglese",
      },
      {
        label: "Metodologia CEPF",
        href: "/cepf",
        desc: "Compliance-Epistemic Project Framework · in inglese",
      },
      {
        label: "Catalogo delle sovrapposizioni",
        href: "/cepf/overlaps",
        desc: "I 24 gruppi in cui due regimi condividono un controllo · in inglese",
      },
      {
        label: "Calibra",
        href: "/calibra",
        desc: "Il software costruito su CEPF · in inglese",
      },
    ],
  },
  {
    label: "Servizi",
    children: [
      {
        label: "Consulenza AI, governance e compliance",
        href: "/it/consulenza-ai-governance-compliance",
        desc: "AI Act, GDPR, PLD 2024, NIS2, DORA, ISO 27001",
      },
      {
        label: "Assessment di esposizione",
        href: "/it/assessment",
        desc: "Perimetro e prezzo fissi, deliverable firmato",
      },
      {
        label: "Fractional CTO a Milano",
        href: "/fractional-cto-milano",
        desc: "Leadership tecnologica per PMI e mid-market",
      },
      {
        label: "Modernizzazione legacy con AI",
        href: "/modernizzazione-sistemi-legacy-ai",
        desc: "Reverse engineering assistito e rientro del debito tecnico",
      },
    ],
  },
  {
    label: "Settori",
    children: [
      {
        label: "AI on-premise per la sanità",
        href: "/it/ai-sanitaria-on-premise",
        desc: "Ospedali, ASL, strutture accreditate",
      },
      {
        label: "Consulenza AI per il farmaceutico",
        href: "/it/consulenza-ai-farmaceutico",
        desc: "Distribuzione e industria farmaceutica",
      },
      {
        label: "AI sovrana per il pharma",
        href: "/sovereign-ai-pharma-italia",
        desc: "Il verticale farmaceutico, per esteso",
      },
      {
        label: "Sovereign AI Italia",
        href: "/it/sovereign-ai-italia",
        desc: "I tre modelli di deployment, e come si sceglie",
      },
      {
        label: "AI sui dati aziendali",
        href: "/it/ai-dati-aziendali",
        desc: "Retrieval sui documenti che avete già",
      },
      {
        label: "AI per norme tecniche e ingegneria",
        href: "/it/ai-ingegneria-tecnica",
        desc: "Norme, revisioni, tracciabilità professionale",
      },
      {
        label: "Agenti AI per finanza e compliance",
        href: "/it/ai-agenti-finanziari",
        desc: "DORA, MiFID II, tracciabilità delle decisioni",
      },
    ],
  },
  {
    label: "Casi studio",
    children: [
      {
        label: "Federfarma Lombarda",
        href: "/it/case-studies/federfarma",
        desc: "Nexus MDS Core in produzione, oltre 1.000 farmacie",
      },
      {
        label: "Tutti i casi studio",
        href: "/case-studies",
        desc: "L'elenco completo · in inglese",
      },
    ],
  },
  {
    label: "Ricerca",
    children: [
      {
        label: "Serie PLD 2024",
        href: "/research/editorial-series",
        desc: "Sei articoli sulla direttiva, in italiano",
      },
      {
        label: "Legge 132/2025 e AI in sanità",
        href: "/research/legge-132-2025",
        desc: "Cosa cambia per ospedali, farmacie e aziende farmaceutiche",
      },
      {
        label: "Scadenza CRA — 11 settembre",
        href: "/cra-11-settembre",
        desc: "Articolo 14 del Reg. (UE) 2024/2847",
      },
      {
        label: "Ricerca e analisi",
        href: "/research",
        desc: "L'archivio completo · in gran parte in inglese",
      },
      {
        label: "Risposte dirette",
        href: "/answers",
        desc: "Una domanda per pagina · in inglese",
      },
    ],
  },
  { label: "Chi siamo", href: "/about" },
  { label: "Tutto in italiano", href: "/it" },
];

export function NavBar() {
  const pathname = usePathname();
  const navLinks = isItalianPath(pathname) ? IT_NAV : EN_NAV;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(13,17,23,0.95)] backdrop-blur-md border-b border-[#30363D]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Dynamics Consulting logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-syne text-[#E6EDF3] font-bold text-xs tracking-[0.15em] uppercase leading-none">
                DYNAMICS
              </p>
              <p className="font-syne text-[#00B4D8] font-bold text-xs tracking-[0.15em] uppercase leading-none mt-0.5">
                CONSULTING
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) =>
              l.children ? (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(l.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 text-[#7D8FA3] hover:text-[#E6EDF3] text-sm font-medium transition-colors duration-200"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === l.label}
                  >
                    {l.label}
                    <ChevronDown
                      size={14}
                      className={clsx(
                        "transition-transform duration-200",
                        openDropdown === l.label && "rotate-180"
                      )}
                    />
                  </button>
                  {/*
                    The panel is always in the document and hidden with CSS.
                    Mounting it on state, as it used to be, meant the whole
                    dropdown — every link in the primary navigation — was absent
                    from the served HTML: invisible to a crawler, and to anyone
                    whose JavaScript has not run yet.
                  */}
                  <div
                    className={clsx(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[280px] transition-all duration-150",
                      openDropdown === l.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none",
                    )}
                  >
                    <div className="bg-[#161B22] border border-[#30363D] rounded-xl shadow-lg p-2">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-3 rounded-lg hover:bg-[#1C2333] transition-colors group"
                        >
                          <div className="text-[#E6EDF3] text-sm font-medium group-hover:text-[#00B4D8] transition-colors">
                            {c.label}
                          </div>
                          {c.desc && (
                            <div className="text-[#7D8FA3] text-xs mt-0.5">{c.desc}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.label}
                  href={l.href!}
                  className="text-[#7D8FA3] hover:text-[#E6EDF3] text-sm font-medium transition-colors duration-200"
                >
                  {l.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitch />
            <Link
              href={assessmentHref(pathname)}
              className="inline-flex items-center px-4 py-2 bg-[#00B4D8] text-[#0D1117] rounded-lg text-sm font-semibold hover:bg-[#00c8f0] transition-all duration-200 shadow-[0_0_15px_rgba(0,180,216,0.3)]"
            >
              {assessmentLabel(pathname)}
            </Link>
          </div>

          {/* Mobile: language switch + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitch />
            <button
              className="text-[#7D8FA3] hover:text-[#E6EDF3]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#161B22] border-b border-[#30363D]"
          >
            <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) =>
                l.children ? (
                  <div key={l.label} className="border-b border-[#30363D] last:border-none">
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === l.label ? null : l.label)
                      }
                      className="w-full flex items-center justify-between text-[#7D8FA3] hover:text-[#E6EDF3] text-sm font-medium py-2.5 transition-colors"
                    >
                      <span>{l.label}</span>
                      <ChevronDown
                        size={16}
                        className={clsx(
                          "transition-transform duration-200",
                          mobileExpanded === l.label && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileExpanded === l.label && (
                      <div className="pb-3 pl-3 flex flex-col gap-2">
                        {l.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileExpanded(null);
                            }}
                            className="block py-2"
                          >
                            <div className="text-[#E6EDF3] text-sm font-medium">
                              {c.label}
                            </div>
                            {c.desc && (
                              <div className="text-[#7D8FA3] text-xs mt-0.5">
                                {c.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href!}
                    onClick={() => setMobileOpen(false)}
                    className="text-[#7D8FA3] hover:text-[#E6EDF3] text-sm font-medium py-2.5 border-b border-[#30363D] last:border-none transition-colors"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <Link
                href={assessmentHref(pathname)}
                onClick={() => setMobileOpen(false)}
                className="mt-3 text-center px-4 py-3 bg-[#00B4D8] text-[#0D1117] rounded-lg text-sm font-semibold"
              >
                {assessmentLabel(pathname)}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
