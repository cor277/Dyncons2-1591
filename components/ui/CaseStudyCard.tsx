"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { TechBadge } from "./TechBadge";

interface CaseStudyCardProps {
  sector: string;
  title: string;
  summary: string;
  metrics: string[];
  href: string;
}

export function CaseStudyCard({
  sector,
  title,
  summary,
  metrics,
  href,
}: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col gap-4 bg-[#161B22] border border-[#30363D] rounded-xl p-6 hover:border-[#00B4D8] transition-colors duration-200"
    >
      <div>
        <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase">
          {sector}
        </p>
        <h3 className="mt-2 font-dm font-bold text-[#E6EDF3] text-lg leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-[#7D8FA3] text-sm leading-relaxed flex-1">{summary}</p>
      <div className="flex flex-wrap gap-1.5">
        {metrics.map((m) => (
          <TechBadge key={m} label={m} variant="green" />
        ))}
      </div>
      <Link
        href={href}
        className="text-[#00B4D8] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
      >
        Leggi il case study →
      </Link>
    </motion.div>
  );
}
