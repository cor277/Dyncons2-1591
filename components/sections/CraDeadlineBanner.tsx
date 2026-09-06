import Link from "next/link";

/**
 * Deadline callout for 11 September 2026 — the date Article 14 of Regulation
 * (EU) 2024/2847 starts applying, and the landing page of the LinkedIn series.
 *
 * Time-boxed by design. After the date, set SHOW to false: one edit, and the
 * strip disappears from every page that renders it. Deleting this file and its
 * single use in app/(en)/page.tsx is the tidier follow-up, not the urgent one.
 */
const SHOW = true;

export function CraDeadlineBanner() {
  if (!SHOW) return null;

  return (
    <section className="pt-16 bg-[#0D1117]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#00B4D8]/50 bg-[#11161D] rounded-lg px-5 py-4 md:px-6 md:py-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div className="max-w-3xl">
            <p className="text-[#00B4D8] text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.15em] uppercase mb-1.5">
              11 September 2026 · Cyber Resilience Act
            </p>
            <p className="text-[#E6EDF3] text-sm md:text-base leading-relaxed">
              Article 14 of Regulation (EU) 2024/2847 starts applying: twenty-four hours to raise
              the alarm on an actively exploited vulnerability. Who in your organisation has the
              authority to do it, and how long before they know?
            </p>
          </div>
          <Link
            href="/cra-11-settembre"
            hrefLang="it"
            lang="it"
            className="inline-flex items-center gap-1 text-[#00B4D8] hover:text-[#E6EDF3] text-sm font-medium underline underline-offset-4 decoration-[#00B4D8]/40 hover:decoration-[#E6EDF3] transition-colors duration-200 whitespace-nowrap self-start lg:self-auto"
          >
            Il test in tre domande →
          </Link>
        </div>
      </div>
    </section>
  );
}
