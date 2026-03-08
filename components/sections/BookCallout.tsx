"use client";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export function BookCallout() {
  return (
    <section className="py-20 md:py-28 bg-[#161B22]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Book cover placeholder */}
          <div className="flex-shrink-0 w-36 h-52 bg-gradient-to-br from-[#1C2333] to-[#0D1117] rounded-xl border border-[#30363D] flex flex-col items-center justify-center gap-2 p-4">
            <p className="text-[#00B4D8] text-[10px] font-mono uppercase tracking-widest text-center">
              Corrado<br />Patierno
            </p>
            <div className="w-full h-px bg-[#30363D]" />
            <p className="text-[#E6EDF3] font-syne text-sm font-bold text-center uppercase tracking-wider">
              Logistica<br />Fluida
            </p>
          </div>

          <div>
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3">
              THOUGHT LEADERSHIP
            </p>
            <h2 className="font-syne text-3xl font-extrabold text-[#E6EDF3] mb-4">
              Logistica Fluida
            </h2>
            <p className="text-[#7D8FA3] text-base leading-relaxed mb-6 max-w-xl">
              Il libro di Corrado Patierno sull&apos;architettura dei sistemi distribuiti
              nell&apos;era dell&apos;intelligenza artificiale.
            </p>
            <CTAButton label="Scopri il libro →" href="/about#book" variant="secondary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
