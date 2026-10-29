"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextLink } from "@/components/ui/TextLink";
import { TechBadge } from "@/components/ui/TechBadge";
import { itHref } from "@/lib/i18n-routes";

const COPY = {
  en: {
    eyebrow: "PROPRIETARY PRODUCT",
    lead: "Build AI governance once and run every use case on it, inside your perimeter. Identity, approval steps and an audit of every model call are set up once; each new use case inherits them. Generation runs on a local model or a replaceable EU endpoint.",
    engagementBefore: "It is normally deployed inside a wider engagement covering AI architecture,",
    engagementLink: "governance and compliance",
    engagementAfter: "and regulated operation — not sold as a standalone licence.",
    badges: [
      "GDPR controls mapped",
      "AI Act controls mapped",
      "PLD 2024 controls mapped",
      "ISO 27001 controls mapped",
      "EU data residency",
      "CADA criteria mapped (proposal)",
    ],
    cta: "Discover the platform →",
  },
  it: {
    eyebrow: "PRODOTTO PROPRIETARIO",
    lead: "Costruisci la governance dell’AI una volta e fai girare ogni caso d’uso su di essa, nel tuo perimetro. Identità, passaggi di approvazione e audit di ogni chiamata al modello si configurano una volta sola; ogni nuovo caso d’uso li eredita. La generazione gira su un modello locale o su un endpoint UE sostituibile.",
    engagementBefore: "Di norma viene messo in esercizio dentro un incarico più ampio che copre architettura AI,",
    engagementLink: "governance e compliance",
    engagementAfter: "e gestione in ambiente regolamentato: non si vende come licenza a sé.",
    badges: [
      "Controlli GDPR mappati",
      "Controlli AI Act mappati",
      "Controlli PLD 2024 mappati",
      "Controlli ISO 27001 mappati",
      "Residenza dei dati in UE",
      "Criteri CADA mappati (proposta)",
    ],
    cta: "Scopri la piattaforma →",
  },
};

export function NexusBanner({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  const href = (p: string) => (locale === "it" ? itHref(p) : p);
  return (
    <section className="py-20 md:py-28 bg-[#0D1117]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#161B22] border border-[#00B4D8] rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          {/* Glow overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,180,216,0.07),transparent_60%)] pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="live-dot" />
                <span className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase">
                  {t.eyebrow}
                </span>
              </div>
              <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#E6EDF3] mb-4">
                Nexus MDS Core
              </h2>
              <p className="text-[#7D8FA3] text-base md:text-lg leading-relaxed mb-4">
                {t.lead}
              </p>
              <p className="text-[#7D8FA3] text-base leading-relaxed mb-6">
                {t.engagementBefore}{" "}
                <Link
                  href={href("/services/governance-advisory")}
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  {t.engagementLink}
                </Link>{" "}
                {t.engagementAfter}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.badges.map((b) => (
                  <TechBadge key={b} label={b} variant="cyan" />
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <TextLink label={t.cta} href={href("/platform")} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
