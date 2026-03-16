"use client";
import { motion } from "framer-motion";

export function DigitalTwinSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#0D1117] via-[#0f1923] to-[#0D1117]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-[#00B4D8]/30 bg-[#161B22] p-8 md:p-12 overflow-hidden"
        >
          {/* Subtle glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/5 via-transparent to-[#0D47A1]/5 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              LIVE DEMO · DIGITAL TWIN
            </p>
            <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-[#E6EDF3] leading-tight mb-6">
              This is not a chatbot.<br />
              This is Nexus running.
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              The assistant below is a digital twin of Corrado Patierno — architect and
              founder of Dynamics Consulting. It runs live on Nexus MDS Core:
              on-premise, GDPR-compliant, zero cloud dependency.
              Ask it anything about the platform, the methodology, or your use case.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
              className="inline-flex items-center px-6 py-3 bg-[#00B4D8] text-[#0D1117] rounded-lg text-sm font-semibold hover:bg-[#00c8f0] transition-all duration-200 shadow-[0_0_15px_rgba(0,180,216,0.3)]"
            >
              Open the Digital Twin →
            </button>
            <p className="mt-6 text-[#7D8FA3] text-xs font-mono">
              Powered by Nexus MDS Core · Hosted on EU infrastructure · No data leaves your session
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
