interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className="font-syne text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#E6EDF3] leading-[1.1] tracking-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-[#7D8FA3] text-base md:text-lg leading-relaxed",
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// clsx is used inline here
function clsx(...args: (string | boolean | undefined | null)[]) {
  return args.filter(Boolean).join(" ");
}
