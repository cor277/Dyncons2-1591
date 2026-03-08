"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Cloud,
  Database,
  GitBranch,
  Server,
  Zap,
  Blocks,
  Search,
} from "lucide-react";
import { TechBadge } from "./TechBadge";

const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  Cloud,
  Database,
  GitBranch,
  Server,
  Zap,
  Blocks,
  Search,
};

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  techBadges?: string[];
  ctaHref: string;
}

export function ServiceCard({
  iconName,
  title,
  description,
  techBadges = [],
  ctaHref,
}: ServiceCardProps) {
  const Icon = ICON_MAP[iconName] ?? Search;

  return (
    <motion.div
      whileHover={{ scale: 1.02, borderColor: "#00B4D8" }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col gap-4 bg-[#161B22] border border-[#30363D] rounded-xl p-6 cursor-pointer hover:border-[#00B4D8] transition-colors duration-200"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[rgba(0,180,216,0.08)] border border-[rgba(0,180,216,0.2)] flex items-center justify-center flex-shrink-0">
          <Icon size={20} className="text-[#00B4D8]" />
        </div>
        <h3 className="font-dm font-semibold text-[#E6EDF3] text-base leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-[#7D8FA3] text-sm leading-relaxed flex-1">{description}</p>
      {techBadges.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {techBadges.map((b) => (
            <TechBadge key={b} label={b} />
          ))}
        </div>
      )}
      <Link
        href={ctaHref}
        className="text-[#00B4D8] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
      >
        Scopri di più →
      </Link>
    </motion.div>
  );
}
