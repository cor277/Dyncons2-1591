"use client";
import { motion } from "framer-motion";
import { itHref } from "@/lib/i18n-routes";

const COPY = {
  en: {
    eyebrow: "EU Tech Sovereignty Package · CADA — 3 June 2026",
    lead: "Nexus MDS Core delivers what the European Commission now calls",
    quote: "sovereign cloud and AI for sensitive workloads.",
    tail: "In production at our regulated clients since 2024.",
    analysis: "Read our analysis →",
    pressRelease: "Commission press release ↗",
  },
  it: {
    eyebrow: "EU Tech Sovereignty Package · CADA — 3 giugno 2026",
    lead: "Nexus MDS Core offre ciò che la Commissione europea oggi chiama",
    quote: "cloud e AI sovrani per i carichi di lavoro sensibili.",
    tail: "In produzione presso i nostri clienti nei settori regolamentati dal 2024.",
    analysis: "Leggi la nostra analisi →",
    pressRelease: "Comunicato della Commissione (in inglese) ↗",
  },
};

export function SovereigntyStrip({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  return (
    <section className="bg-[#0B1220] border-y border-[#00B4D8]/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5"
        >
          <div className="max-w-3xl">
            <p className="text-[#00B4D8] text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.15em] uppercase mb-2">
              {t.eyebrow}
            </p>
            <p className="text-[#E6EDF3] text-base md:text-lg leading-relaxed">
              {t.lead}{" "}
              <em className="text-[#00B4D8] not-italic">{`“${t.quote}”`}</em>{" "}
              {t.tail}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 self-start lg:self-auto">
            <a
              href={locale === "it" ? itHref("/tech-sovereignty") : "/tech-sovereignty"}
              className="inline-flex items-center gap-1 text-[#00B4D8] hover:text-[#E6EDF3] text-sm font-medium underline underline-offset-4 decoration-[#00B4D8]/40 hover:decoration-[#E6EDF3] transition-colors duration-200 whitespace-nowrap"
            >
              {t.analysis}
            </a>
            <a
              href="https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1187"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#00B4D8] hover:text-[#E6EDF3] text-sm font-medium underline underline-offset-4 decoration-[#00B4D8]/40 hover:decoration-[#E6EDF3] transition-colors duration-200 whitespace-nowrap"
            >
              {t.pressRelease}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
