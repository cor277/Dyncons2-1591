"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isItalianPath } from "@/lib/locale";

/**
 * Explicit language selector. There is deliberately NO Accept-Language redirect:
 * automatic redirection breaks indexing, because a crawler is served a page whose
 * URL does not match its content.
 *
 * Only paths that genuinely have both versions appear in PAIRS. A page with no
 * counterpart still offers a way across — to the other language's index, not to
 * an unrelated page presented as its translation. The label says which of the
 * two it is.
 */
const PAIRS: Record<string, string> = {
  "/": "/it",
  "/ai-on-premise-healthcare": "/it/ai-sanitaria-on-premise",
  "/case-studies/federfarma": "/it/case-studies/federfarma",
  "/assessment": "/it/assessment",
  "/services/governance-advisory": "/it/consulenza-ai-governance-compliance",
};

const REVERSE: Record<string, string> = Object.fromEntries(
  Object.entries(PAIRS).map(([en, it]) => [it, en])
);

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  const isItalian = pathname in REVERSE || isItalianPath(pathname);
  const counterpart = isItalian ? REVERSE[pathname] : PAIRS[pathname];

  /**
   * With a true counterpart, this is a translation link. Without one it is a
   * way into the other language's section — which is a different promise, and
   * says so in the label rather than pretending the destination is the same
   * page in another language.
   */
  const href = counterpart ?? (isItalian ? "/" : "/it");
  const isTranslation = Boolean(counterpart);

  const ariaLabel = isTranslation
    ? isItalian
      ? "Read this page in English"
      : "Leggi questa pagina in italiano"
    : isItalian
      ? "Go to the English site"
      : "Vai alle risorse in italiano";

  return (
    <Link
      href={href}
      hrefLang={isItalian ? "en" : "it"}
      lang={isItalian ? "en" : "it"}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`text-[#7D8FA3] hover:text-[#E6EDF3] text-xs font-medium tracking-wider uppercase transition-colors duration-200 border border-[#30363D] rounded px-2 py-1 ${className}`}
    >
      {isItalian ? "EN" : "IT"}
    </Link>
  );
}
