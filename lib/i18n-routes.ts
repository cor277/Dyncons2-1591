/**
 * Every English page and its Italian counterpart, in one place.
 *
 * The language switch, the language suggestion bar, hreflang alternates and
 * the sitemap all read this table, so a page cannot have a translation that
 * one of them does not know about. When a page is added in one language, add
 * its pair here; a path that appears in no pair has no counterpart and the
 * switch sends readers to the other language's index instead.
 *
 * Italian paths live under /it/ with Italian slugs, without exception. The
 * older top-level Italian pages (/fractional-cto-milano, /cra-11-settembre,
 * /modernizzazione-sistemi-legacy-ai, /sovereign-ai-pharma-italia) moved under
 * /it/ and are 301-redirected in next.config.mjs.
 */

export const BASE_URL = "https://www.dynamicsconsulting.it";

/** English path → Italian path. */
export const ROUTE_PAIRS: Record<string, string> = {
  // Core
  "/": "/it",
  "/about": "/it/chi-siamo",
  "/contact": "/it/contatti",
  "/privacy": "/it/privacy",
  "/platform": "/it/piattaforma-nexus",
  "/cepf": "/it/cepf",
  "/calibra": "/it/calibra",
  "/capabilities": "/it/competenze",
  "/tech-sovereignty": "/it/sovranita-tecnologica",
  "/assessment": "/it/assessment",
  "/ai-on-premise-healthcare": "/it/ai-sanitaria-on-premise",
  "/trust": "/it/trust",

  // Services
  "/services/governance-advisory": "/it/consulenza-ai-governance-compliance",
  "/services/fractional-cto": "/it/servizi/fractional-cto",
  "/services/applied-ai": "/it/servizi/ai-applicata",
  "/services/automation": "/it/servizi/automazione",
  "/services/blockchain": "/it/servizi/blockchain",
  "/services/cloud-kubernetes": "/it/servizi/cloud-kubernetes",
  "/services/data-platforms": "/it/servizi/data-platform",
  "/services/enterprise-integration": "/it/servizi/integrazione-enterprise",
  "/services/microsoft-dynamics": "/it/servizi/microsoft-dynamics",

  // Case studies (same slugs in both languages)
  "/case-studies": "/it/case-studies",
  "/case-studies/dynamics-crm": "/it/case-studies/dynamics-crm",
  "/case-studies/dynamics-data": "/it/case-studies/dynamics-data",
  "/case-studies/federfarma": "/it/case-studies/federfarma",
  "/case-studies/humania-care": "/it/case-studies/humania-care",
  "/case-studies/iatp": "/it/case-studies/iatp",
  "/case-studies/logitrack": "/it/case-studies/logitrack",
  "/case-studies/nespresso": "/it/case-studies/nespresso",
  "/case-studies/sorgenia": "/it/case-studies/sorgenia",

  // Answers
  "/answers": "/it/risposte",
  "/answers/private-ai-vs-sovereign-ai": "/it/risposte/ai-privata-vs-ai-sovrana",
  "/answers/llm-on-premise-hospital": "/it/risposte/llm-on-premise-ospedale",
  "/answers/rag-audit-trail": "/it/risposte/audit-trail-rag",
  "/answers/rag-eu-ai-act": "/it/risposte/rag-ai-act",
  "/answers/superseded-documents-rag": "/it/risposte/documenti-superati-rag",
  "/answers/evaluate-ai-vendor-regulated": "/it/risposte/valutare-fornitore-ai-settori-regolati",

  // Research — written in English
  "/research": "/it/ricerca",
  "/research/editorial-series": "/it/ricerca/serie-editoriale",
  "/research/rag-enterprise-data": "/it/ricerca/rag-dati-aziendali",
  "/research/on-premise-ai": "/it/ricerca/ai-on-premise",
  "/research/governing-ai-outputs": "/it/ricerca/governare-output-ai",
  "/research/rag-vs-fine-tuning": "/it/ricerca/rag-vs-fine-tuning",
  "/research/event-sourcing": "/it/ricerca/event-sourcing",
  "/research/lakehouse-not-enough": "/it/ricerca/lakehouse-non-basta",
  "/research/ai-reverse-engineering": "/it/ricerca/reverse-engineering-ai",

  // Research — written in Italian; the English is the translation
  "/research/law-132-2025": "/it/ricerca/legge-132-2025",
  "/research/pld-2024-five-plus-one-scenarios": "/it/ricerca/pld-2024-cinque-piu-uno-scenari",
  "/research/pld-2024-contracts-and-insurance": "/it/ricerca/pld-2024-contratti-e-polizza",
  "/research/pld-2024-a-decade-of-liability": "/it/ricerca/pld-2024-decennio-responsabilita",
  "/research/pld-2024-jurisdictional-escape": "/it/ricerca/pld-2024-fuga-giurisdizionale",
  "/research/pld-2024-seven-structural-changes": "/it/ricerca/pld-2024-sette-cambi-strutturali",
  "/research/pld-2024-vulnerability-management": "/it/ricerca/pld-2024-vulnerability-management-cve",
  "/research/pld-2024-the-other-half-of-the-problem": "/it/ricerca/pld-2024-altra-meta-del-problema",
  "/research/pld-2024-so-what-now": "/it/ricerca/pld-2024-e-mo",
  "/research/pld-2024-what-to-do-on-monday-morning": "/it/ricerca/pld-2024-cosa-faccio-lunedi-mattina",
  "/research/pld-2024-digital-sovereignty-architecture": "/it/ricerca/pld-2024-sovranita-digitale-architettura",

  // Pages written in Italian first; the English is the counterpart
  "/ai-agents-finance": "/it/ai-agenti-finanziari",
  "/ai-on-company-data": "/it/ai-dati-aziendali",
  "/ai-technical-standards": "/it/ai-ingegneria-tecnica",
  "/sovereign-ai": "/it/sovereign-ai-italia",
  "/sovereign-ai-pharma": "/it/ai-sovrana-pharma",
  "/legacy-modernisation-ai": "/it/modernizzazione-sistemi-legacy-ai",
};

/**
 * Italian pages with no English counterpart, by decision: /it/cra-11-settembre
 * is the landing of an Italian LinkedIn series; /it/fractional-cto-milano
 * argues a different case for the Milan mid-market and is not a translation of
 * /services/fractional-cto (which has its own Italian version).
 */
export const IT_ONLY_PATHS = ["/it/cra-11-settembre", "/it/fractional-cto-milano"];

const IT_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTE_PAIRS).map(([en, it]) => [it, en])
);

const IT_TOP_LEVEL = new Set(
  [...Object.values(ROUTE_PAIRS), ...IT_ONLY_PATHS].filter((p) => !p.startsWith("/it"))
);

function normalise(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function isItalianPath(path: string): boolean {
  const p = normalise(path);
  return p === "/it" || p.startsWith("/it/") || IT_TOP_LEVEL.has(p);
}

/** The same page in the other language, or undefined when there is none. */
export function counterpartOf(path: string): string | undefined {
  const p = normalise(path);
  return isItalianPath(p) ? IT_TO_EN[p] : ROUTE_PAIRS[p];
}

/** The Italian address of an English page, falling back to the English one. */
export function itHref(enPath: string): string {
  return ROUTE_PAIRS[normalise(enPath)] ?? enPath;
}

/** The English address of an Italian page, falling back to the Italian one. */
export function enHref(itPath: string): string {
  return IT_TO_EN[normalise(itPath)] ?? itPath;
}

const abs = (p: string) => (p === "/" ? BASE_URL : `${BASE_URL}${p}`);

/**
 * `alternates` for a page's metadata: canonical plus hreflang for both
 * languages when the page has a counterpart. English is x-default.
 */
export function alternatesFor(path: string) {
  const p = normalise(path);
  const other = counterpartOf(p);
  if (!other) return { canonical: abs(p) };
  const en = isItalianPath(p) ? other : p;
  const it = isItalianPath(p) ? p : other;
  return {
    canonical: abs(p),
    languages: { en: abs(en), it: abs(it), "x-default": abs(en) },
  };
}
