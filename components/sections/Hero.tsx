"use client";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

export function Hero() {
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
              AI SOLUTION ARCHITECT · ENTERPRISE INFRASTRUCTURE
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
            Sovereign AI infrastructure for{" "}
            <span className="text-[#00B4D8] glow-cyan-text">enterprises that own their data.</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#7D8FA3] text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Nexus MDS Core — 16 orchestrated services. Self-hosted. GDPR-ready.
            Zero hyperscaler dependency. From healthcare and pharma to energy and enterprise CRM.
            Already in production.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <CTAButton label="See Nexus in production →" href="/platform" variant="primary" />
            <CTAButton label="View services" href="/#services" variant="secondary" />
          </motion.div>

          {/* Chatbot callout */}
          <motion.div
            custom={4}
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
              <span>Digital Twin live — Ask Nexus anything about this platform</span>
              <span className="text-[#00B4D8] animate-pulse">↘</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
