"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { counterpartOf, isItalianPath } from "@/lib/i18n-routes";

/**
 * Suggests the same page in the reader's language. It never redirects.
 *
 * Automatic redirection by Accept-Language breaks indexing (crawlers mostly
 * send none, so they would see one language only) and sends people who were
 * handed a link somewhere they did not ask to go. This bar only appears when
 * the page has a real counterpart, and only in the browser: the HTML a crawler
 * receives is the same for everyone.
 *
 * The choice is remembered: following the link stores the target language,
 * closing the bar stores the language of the page the reader chose to stay
 * on. It is a functional preference, not tracking, and it never leaves the
 * browser.
 */
export const LANG_PREF_KEY = "dc_lang_pref";

type Lang = "en" | "it";

export function rememberLanguage(lang: Lang) {
  try {
    localStorage.setItem(LANG_PREF_KEY, lang);
  } catch {
    /* storage unavailable: the bar will simply ask again next time */
  }
}

function preferredLanguage(): Lang | null {
  try {
    const stored = localStorage.getItem(LANG_PREF_KEY);
    if (stored === "en" || stored === "it") return stored;
  } catch {
    /* fall through to the browser languages */
  }
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  const first = (langs[0] ?? "").toLowerCase();
  if (!first) return null;
  return first.startsWith("it") ? "it" : "en";
}

const COPY: Record<Lang, { text: string; link: string; stay: string }> = {
  it: {
    text: "Questa pagina è disponibile in italiano.",
    link: "Leggila in italiano →",
    stay: "Resta in inglese",
  },
  en: {
    text: "This page is available in English.",
    link: "Read it in English →",
    stay: "Stay in Italian",
  },
};

export function LanguageSuggest() {
  const pathname = usePathname();
  const [target, setTarget] = useState<{ href: string; lang: Lang } | null>(null);

  useEffect(() => {
    const counterpart = counterpartOf(pathname);
    const pageLang: Lang = isItalianPath(pathname) ? "it" : "en";
    const preferred = preferredLanguage();
    if (!counterpart || !preferred || preferred === pageLang) {
      setTarget(null);
      return;
    }
    setTarget({ href: counterpart, lang: preferred });
  }, [pathname]);

  if (!target) return null;
  const copy = COPY[target.lang];
  const pageLang: Lang = target.lang === "it" ? "en" : "it";

  return (
    <div
      role="region"
      aria-label={copy.text}
      lang={target.lang}
      className="fixed top-[72px] left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-xl bg-[#161B22]/95 backdrop-blur border border-[#30363D] rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 text-sm"
    >
      <p className="text-[#9BA8B9] flex-1">
        {copy.text}{" "}
        <Link
          href={target.href}
          hrefLang={target.lang}
          onClick={() => rememberLanguage(target.lang)}
          className="text-[#00B4D8] hover:text-[#E6EDF3] font-medium whitespace-nowrap"
        >
          {copy.link}
        </Link>
      </p>
      <button
        type="button"
        onClick={() => {
          rememberLanguage(pageLang);
          setTarget(null);
        }}
        aria-label={copy.stay}
        title={copy.stay}
        className="text-[#7D8FA3] hover:text-[#E6EDF3] p-1 -m-1 flex-shrink-0"
      >
        <X size={16} />
      </button>
    </div>
  );
}
