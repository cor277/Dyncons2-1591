import Link from "next/link";
import { clsx } from "clsx";

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export function CTAButton({
  label,
  href,
  variant = "primary",
  external = false,
  className,
}: CTAButtonProps) {
  const cls = clsx(
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200",
    variant === "primary" &&
      "bg-[#00B4D8] text-[#0D1117] hover:bg-[#00c8f0] shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)]",
    variant === "secondary" &&
      "border border-[#30363D] text-[#E6EDF3] hover:border-[#00B4D8] hover:text-[#00B4D8] bg-transparent",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}
