"use client";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { TechBadge } from "@/components/ui/TechBadge";
import { NEXUS_INFERENCE_EN } from "@/lib/nexus";

interface PlatformHeroProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  badges?: string[];
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function PlatformHero({
  eyebrow = "Nexus MDS Core · proprietary platform",
  title = "Build AI governance once. Run every use case on it — inside your perimeter.",
  subtitle = `Nexus MDS Core is the operating layer for AI in regulated organisations: identity, approval steps and an audit of every model call are set up once, and each new use case inherits them. ${NEXUS_INFERENCE_EN}`,
  badges = ["GDPR controls mapped", "AI Act controls mapped", "ISO/IEC 27001:2022 controls mapped", "EU data residency"],
  primary = { label: "Request a demo →", href: "/contact" },
  secondary = { label: "Start with the exposure assessment", href: "/assessment" },
}: PlatformHeroProps) {
  return (
    <section className="hero-constellation pt-32 pb-20">
      <div className="hero-content max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="live-dot" />
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase">
              {eyebrow}
            </p>
          </div>
          <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#E6EDF3] leading-[1.05] tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-[#7D8FA3] text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {badges.map((b) => (
              <TechBadge key={b} label={b} variant="cyan" />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton label={primary.label} href={primary.href} variant="primary" />
            <CTAButton label={secondary.label} href={secondary.href} variant="secondary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
