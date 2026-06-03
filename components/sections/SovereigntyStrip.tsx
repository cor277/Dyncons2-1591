"use client";
import { motion } from "framer-motion";

export function SovereigntyStrip() {
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
              EU Tech Sovereignty Package · CADA — 3 June 2026
            </p>
            <p className="text-[#E6EDF3] text-base md:text-lg leading-relaxed">
              Nexus MDS Core delivers what the European Commission now calls{" "}
              <em className="text-[#00B4D8] not-italic">
                &ldquo;sovereign cloud and AI for sensitive workloads.&rdquo;
              </em>{" "}
              In production at our regulated clients since 2024.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 self-start lg:self-auto">
            <a
              href="/tech-sovereignty"
              className="inline-flex items-center gap-1.5 text-[#0D1117] bg-[#00B4D8] hover:bg-[#00c8f0] text-sm font-semibold rounded-lg px-4 py-2 transition-all duration-200 whitespace-nowrap"
            >
              Read our analysis →
            </a>
            <a
              href="https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1187"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#00B4D8] hover:text-[#E6EDF3] text-sm font-medium border border-[#00B4D8]/40 hover:border-[#00B4D8] rounded-lg px-4 py-2 transition-all duration-200 whitespace-nowrap"
            >
              Commission press release ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
