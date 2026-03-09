"use client";
import { motion } from "framer-motion";

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
          {/* Book cover — Amazon link */}
          <a
            href="https://amzn.eu/d/06ZlECJe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-36 h-52 bg-gradient-to-br from-[#1C2333] to-[#0D1117] rounded-xl border border-[#00B4D8]/30 hover:border-[#00B4D8] transition-colors flex flex-col items-center justify-center gap-2 p-4 group"
          >
            <p className="text-[#00B4D8] text-[10px] font-mono uppercase tracking-widest text-center">
              Corrado<br />Patierno
            </p>
            <div className="w-full h-px bg-[#30363D]" />
            <p className="text-[#E6EDF3] font-syne text-sm font-bold text-center uppercase tracking-wider group-hover:text-[#00B4D8] transition-colors">
              Logistica<br />Fluida
            </p>
            <p className="text-[#7D8FA3] text-[9px] font-mono uppercase tracking-wider mt-1">2026</p>
          </a>

          <div>
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3">
              THOUGHT LEADERSHIP
            </p>
            <h2 className="font-syne text-3xl font-extrabold text-[#E6EDF3] mb-4">
              Logistica Fluida
            </h2>
            <p className="text-[#7D8FA3] text-base leading-relaxed mb-6 max-w-xl">
              A conceptual and operational framework for adaptive logistics systems, focused on
              flow-based decision-making, resilience, and continuous reconfiguration of supply chains.
              The book bridges logistics operations, information systems, and organisational design,
              and serves as a foundation for decision-support and AI-assisted operational reasoning
              in complex environments.
            </p>
            <a
              href="https://amzn.eu/d/06ZlECJe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 border border-[#00B4D8] text-[#00B4D8] rounded-lg text-sm font-semibold hover:bg-[#00B4D8] hover:text-[#0D1117] transition-all duration-200"
            >
              Buy on Amazon →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
