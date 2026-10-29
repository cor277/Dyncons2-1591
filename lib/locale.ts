import { isItalianPath } from "@/lib/i18n-routes";

/* Which paths are Italian is decided by lib/i18n-routes.ts, the one table of
   EN/IT pairs. Re-exported so existing imports keep working. */
export { isItalianPath };

/** The single primary call to action, in the language of the page it sits on. */
export function assessmentHref(pathname: string): string {
  return isItalianPath(pathname) ? "/it/assessment" : "/assessment";
}

export function assessmentLabel(pathname: string): string {
  return isItalianPath(pathname) ? "Assessment di esposizione →" : "Exposure assessment →";
}
