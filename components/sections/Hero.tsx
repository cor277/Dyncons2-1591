"use client";
import { motion } from "framer-motion";
import { TextLink } from "@/components/ui/TextLink";
import { CTAButton } from "@/components/ui/CTAButton";
import { itHref } from "@/lib/i18n-routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

const COPY = {
  en: {
    eyebrow: "AI CONSULTING · GOVERNANCE · SOVEREIGN INFRASTRUCTURE",
    h1Lead: "Sovereign AI infrastructure for",
    h1Accent: "enterprises that own their data.",
    bridge:
      "Dynamics Consulting provides AI consulting, architecture, governance and compliance for organisations working under regulatory constraint — healthcare, pharma, finance, energy. Advisory and implementation come from the same practice.",
    body: "We design and deploy sovereign AI systems, so that sensitive data, operational control and technical accountability stay inside your perimeter: indexing, retrieval, identity and audit run on your infrastructure, under your governance. Nexus MDS Core — self-hosted, GDPR controls mapped, no hyperscaler lock-in. Already in production.",
    cta: "Exposure assessment →",
    advisory: "AI governance & compliance advisory →",
    nexus: "See Nexus in production →",
    twin: "Digital Twin live — Ask Nexus anything about this platform",
  },
  it: {
    eyebrow: "CONSULENZA AI · GOVERNANCE · INFRASTRUTTURA SOVRANA",
    h1Lead: "Infrastruttura AI sovrana per",
    h1Accent: "le aziende che possiedono i propri dati.",
    bridge:
      "Dynamics Consulting si occupa di consulenza AI, architettura, governance e compliance per organizzazioni che lavorano sotto vincolo normativo: sanità, farmaceutico, finanza, energia. Consulenza e implementazione stanno nello stesso studio.",
    body: "Progettiamo e mettiamo in esercizio sistemi AI sovrani, perché dati sensibili, controllo operativo e responsabilità tecnica restino nel tuo perimetro: indicizzazione, retrieval, identità e audit girano sulla tua infrastruttura, sotto la tua governance. Nexus MDS Core: self-hosted, controlli GDPR mappati, nessun lock-in da hyperscaler. Già in produzione.",
    cta: "Assessment di esposizione →",
    advisory: "Consulenza AI, governance e compliance →",
    nexus: "Nexus in produzione →",
    twin: "Digital Twin attivo: chiedi a Nexus qualsiasi cosa sulla piattaforma",
  },
};

export function Hero({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  const href = (p: string) => (locale === "it" ? itHref(p) : p);
  return (
    <section className="hero-constellation min-h-screen flex items-center">
      <div className="hero-content max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 mb-6"
          >
            <span className="live-dot" />
            <p className="text-[#00B4D8] text-[10px] sm:text-xs font-mono font-medium tracking-[0.1em] sm:tracking-[0.15em] uppercase">
              {t.eyebrow}
            </p>
          </motion.div>

          {/* H1 */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E6EDF3] leading-[1.08] tracking-tight mb-6"
          >
            {t.h1Lead}{" "}
            <span className="text-[#00B4D8] glow-cyan-text">{t.h1Accent}</span>
          </motion.h1>

          {/* Bridge sentence */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#9BA8B9] text-base md:text-lg max-w-2xl leading-relaxed mb-5"
          >
            {t.bridge}
          </motion.p>

          {/* Body */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#7D8FA3] text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            {t.body}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <CTAButton label={t.cta} href={href("/assessment")} variant="primary" />
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:self-center">
              <TextLink label={t.advisory} href={href("/services/governance-advisory")} />
              <TextLink label={t.nexus} href={href("/platform")} />
            </div>
          </motion.div>

          {/* Chatbot callout */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161B22]/80 border border-[#30363D] hover:border-[#00B4D8] text-[#7D8FA3] hover:text-[#E6EDF3] text-sm transition-all duration-200 cursor-pointer"
            >
              <span className="text-base">💬</span>
              <span>{t.twin}</span>
              <span className="text-[#00B4D8] animate-pulse">↘</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
