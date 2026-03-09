"use client";
import { motion } from "framer-motion";
import { TechBadge } from "@/components/ui/TechBadge";
import { CTAButton } from "@/components/ui/CTAButton";

export function NexusBanner() {
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
                  PROPRIETARY PRODUCT
                </span>
              </div>
              <h2 className="font-syne text-3xl md:text-4xl font-extrabold text-[#E6EDF3] mb-4">
                Nexus MDS Core
              </h2>
              <p className="text-[#7D8FA3] text-base md:text-lg leading-relaxed mb-6">
                The enterprise AI self-hosted platform. ~16 orchestrated Docker services.
                GDPR-ready. Zero-Trust. Deployable on Kubernetes or bare-metal.
              </p>
              <div className="flex flex-wrap gap-2">
                {["GDPR", "AI Act Ready", "ISO 27001 Ready", "EU Data Residency"].map((b) => (
                  <TechBadge key={b} label={b} variant="cyan" />
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <CTAButton
                label="Discover the platform →"
                href="/platform"
                variant="primary"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
