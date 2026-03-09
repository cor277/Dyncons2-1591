"use client";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { TechBadge } from "@/components/ui/TechBadge";

export function PlatformHero() {
  return (
    <section className="hero-constellation pt-32 pb-20">
      <div className="hero-content max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="live-dot" />
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase">
              PROPRIETARY PLATFORM
            </p>
          </div>
          <h1 className="font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#E6EDF3] leading-[1.05] tracking-tight mb-6">
            Nexus MDS Core
          </h1>
          <p className="text-[#7D8FA3] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            The enterprise AI platform. Self-hosted. GDPR-ready. Zero-Trust.
            ~16 orchestrated Docker services. Built for healthcare, pharma,
            and regulated industries.
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {["GDPR", "AI Act Ready", "ISO 27001 Ready", "EU Data Residency"].map((b) => (
              <TechBadge key={b} label={b} variant="cyan" />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton label="Request a demo →" href="/contact" variant="primary" />
            <CTAButton label="View services" href="/#services" variant="secondary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
