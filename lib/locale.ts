/**
 * Italian-language routes. The (it) route group cannot be read from the URL —
 * route groups are invisible in the path — so the set is listed explicitly.
 * Keep in sync with app/(it)/.
 */
const IT_ROOT_PATHS = new Set([
  "/sovereign-ai-pharma-italia",
  "/fractional-cto-milano",
  "/modernizzazione-sistemi-legacy-ai",
]);

export function isItalianPath(pathname: string): boolean {
  return pathname === "/it" || pathname.startsWith("/it/") || IT_ROOT_PATHS.has(pathname);
}

/** The single primary call to action, in the language of the page it sits on. */
export function assessmentHref(pathname: string): string {
  return isItalianPath(pathname) ? "/it/assessment" : "/assessment";
}

export function assessmentLabel(pathname: string): string {
  return isItalianPath(pathname) ? "Assessment di esposizione →" : "Exposure assessment →";
}
