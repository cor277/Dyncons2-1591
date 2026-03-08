"use client";
import { clsx } from "clsx";

type BadgeVariant = "default" | "cyan" | "green" | "amber";

interface TechBadgeProps {
  label: string;
  variant?: BadgeVariant;
}

export function TechBadge({ label, variant = "default" }: TechBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-1 rounded text-xs font-medium tracking-wide font-mono border transition-colors duration-200",
        {
          "bg-[#1C2333] text-[#7D8FA3] border-[#30363D] hover:border-[#00B4D8] hover:text-[#E6EDF3]":
            variant === "default",
          "bg-[rgba(0,180,216,0.08)] text-[#00B4D8] border-[rgba(0,180,216,0.3)]":
            variant === "cyan",
          "bg-[rgba(0,200,83,0.08)] text-[#00C853] border-[rgba(0,200,83,0.3)]":
            variant === "green",
          "bg-[rgba(255,152,0,0.08)] text-[#FF9800] border-[rgba(255,152,0,0.3)]":
            variant === "amber",
        }
      )}
    >
      {label}
    </span>
  );
}
