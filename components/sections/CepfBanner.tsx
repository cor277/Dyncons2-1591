"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextLink } from "@/components/ui/TextLink";
import { TechBadge } from "@/components/ui/TechBadge";
import { itHref } from "@/lib/i18n-routes";

const COPY = {
  en: {
    eyebrow: "PROPRIETARY METHODOLOGY",
    lead: "CEPF v7, catalogue snapshot July 2026 — 19 frameworks mapped onto the operational obligations each one produces: 247 requirements, 24 cross-framework overlap groups, 695 document templates. It covers organisations operating under EU AI Act, GDPR, PLD 2024, NIS2, DORA, ISO 27001:2022, Cyber Resilience Act and ISO 56001.",
    methodology: "CEPF is the methodology;",
    builtOn: "is the software built on it. Both are used inside",
    advisory: "AI governance and compliance advisory",
    after: " engagements.",
    cta: "Discover CEPF →",
  },
  it: {
    eyebrow: "METODOLOGIA PROPRIETARIA",
    lead: "CEPF v7, snapshot del catalogo di luglio 2026: 19 framework mappati sugli obblighi operativi che ciascuno produce, cioè 247 requisiti, 24 gruppi di sovrapposizione fra framework, 695 template documentali. Copre le organizzazioni che operano sotto EU AI Act, GDPR, PLD 2024, NIS2, DORA, ISO 27001:2022, Cyber Resilience Act e ISO 56001.",
    methodology: "CEPF è la metodologia;",
    builtOn: "è il software costruito su di essa. Entrambi si usano negli incarichi di",
    advisory: "consulenza AI, governance e compliance",
    after: ".",
    cta: "Scopri CEPF →",
  },
};

export function CepfBanner({ locale = "en" }: { locale?: "en" | "it" }) {
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,180,216,0.07),transparent_60%)] pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="live-dot" />
                <span className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase">
                  {t.eyebrow}
                </span>
              </div>
              <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#E6EDF3] mb-4">
                Compliance-Epistemic Project Framework (CEPF)
              </h2>
              <p className="text-[#7D8FA3] text-base md:text-lg leading-relaxed mb-6">
                {t.lead}
              </p>
              <p className="text-[#7D8FA3] text-base leading-relaxed mb-6">
                {t.methodology}{" "}
                <Link href={href("/calibra")} className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                  Calibra
                </Link>{" "}
                {t.builtOn}{" "}
                <Link
                  href={href("/services/governance-advisory")}
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  {t.advisory}
                </Link>
                {t.after}
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "EU AI Act",
                  "GDPR",
                  "PLD 2024",
                  "NIS2",
                  "DORA",
                  "ISO 27001:2022",
                  "Cyber Resilience Act",
                ].map((b) => (
                  <TechBadge key={b} label={b} variant="cyan" />
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <TextLink label={t.cta} href={href("/cepf")} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
