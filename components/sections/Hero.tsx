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
            className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#E6EDF3] leading-[1.05] tracking-tight mb-6"
          >
            Where AI meets <br />
            <span className="text-[#00B4D8] glow-cyan-text">Enterprise</span>
            <br />
            Architecture
          </motion.h1>

          {/* Body */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#7D8FA3] text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            We design AI-ready infrastructure, data platforms, and multi-agent systems
            for organisations that cannot afford to get it wrong.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <CTAButton label="Nexus MDS Core →" href="/platform" variant="primary" />
            <CTAButton label="View services" href="/#services" variant="secondary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
