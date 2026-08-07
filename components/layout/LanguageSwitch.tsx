"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Explicit language selector. There is deliberately NO Accept-Language redirect:
 * automatic redirection breaks indexing, because a crawler is served a page whose
 * URL does not match its content.
 *
 * Only paths that genuinely have both versions appear here. A page with no
 * counterpart renders nothing rather than linking to an unrelated translation.
 */
const PAIRS: Record<string, string> = {
  "/": "/it",
  "/ai-on-premise-healthcare": "/it/ai-sanitaria-on-premise",
  "/case-studies/federfarma": "/it/case-studies/federfarma",
  "/assessment": "/it/assessment",
};

const REVERSE: Record<string, string> = Object.fromEntries(
  Object.entries(PAIRS).map(([en, it]) => [it, en])
);

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  const isItalian = pathname in REVERSE;
  const counterpart = isItalian ? REVERSE[pathname] : PAIRS[pathname];

  if (!counterpart) return null;

  return (
    <Link
      href={counterpart}
      hrefLang={isItalian ? "en" : "it"}
      lang={isItalian ? "en" : "it"}
      aria-label={isItalian ? "Read this page in English" : "Leggi questa pagina in italiano"}
      className={`text-[#7D8FA3] hover:text-[#E6EDF3] text-xs font-medium tracking-wider uppercase transition-colors duration-200 border border-[#30363D] rounded px-2 py-1 ${className}`}
    >
      {isItalian ? "EN" : "IT"}
    </Link>
  );
}
