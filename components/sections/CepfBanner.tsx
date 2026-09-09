"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextLink } from "@/components/ui/TextLink";
import { TechBadge } from "@/components/ui/TechBadge";

export function CepfBanner() {
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
                  PROPRIETARY METHODOLOGY
                </span>
              </div>
              <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#E6EDF3] mb-4">
                Compliance-Epistemic Project Framework (CEPF)
              </h2>
              <p className="text-[#7D8FA3] text-base md:text-lg leading-relaxed mb-6">
                CEPF v7, catalogue snapshot July 2026 — 19 frameworks mapped onto the
                operational obligations each one produces: 247 requirements, 24
                cross-framework overlap groups, 695 document templates. It covers
                organisations operating under EU AI Act, GDPR, PLD 2024, NIS2, DORA,
                ISO 27001:2022, Cyber Resilience Act and ISO 56001.
              </p>
              <p className="text-[#7D8FA3] text-base leading-relaxed mb-6">
                CEPF is the methodology;{" "}
                <Link href="/calibra" className="text-[#00B4D8] hover:text-[#E6EDF3] underline">
                  Calibra
                </Link>{" "}
                is the software built on it. Both are used inside{" "}
                <Link
                  href="/services/governance-advisory"
                  className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
                >
                  AI governance and compliance advisory
                </Link>{" "}
                engagements.
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
              <TextLink label="Discover CEPF →" href="/cepf" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
