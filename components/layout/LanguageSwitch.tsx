"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { counterpartOf, isItalianPath } from "@/lib/i18n-routes";
import { rememberLanguage } from "@/components/ui/LanguageSuggest";

/**
 * Explicit language selector. There is deliberately NO Accept-Language redirect:
 * automatic redirection breaks indexing, because a crawler is served a page whose
 * URL does not match its content.
 *
 * Only paths that genuinely have both versions appear in lib/i18n-routes.ts. A page with no
 * counterpart still offers a way across — to the other language's index, not to
 * an unrelated page presented as its translation. The label says which of the
 * two it is.
 */
export function LanguageSwitch({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  const isItalian = isItalianPath(pathname);
  const counterpart = counterpartOf(pathname);

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
      onClick={() => rememberLanguage(isItalian ? "en" : "it")}
      lang={isItalian ? "en" : "it"}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`text-[#7D8FA3] hover:text-[#E6EDF3] text-xs font-medium tracking-wider uppercase transition-colors duration-200 border border-[#30363D] rounded px-2 py-1 ${className}`}
    >
      {isItalian ? "EN" : "IT"}
    </Link>
  );
}
