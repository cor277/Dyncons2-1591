"use client";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CTASection({
  title = "Parliamo del tuo progetto",
  subtitle = "Hai un progetto AI, un'infrastruttura da modernizzare o un ERP da connettere al futuro? Scrivimi.",
  ctaLabel = "Inizia la conversazione →",
  ctaHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 bg-[#0D1117]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold text-[#E6EDF3] mb-6">
            {title}
          </h2>
          <p className="text-[#7D8FA3] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>
          <CTAButton label={ctaLabel} href={ctaHref} variant="primary" />
        </motion.div>
      </div>
    </section>
  );
}
