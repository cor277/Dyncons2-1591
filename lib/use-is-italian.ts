"use client";

import { usePathname } from "next/navigation";
import { isItalianPath } from "@/lib/i18n-routes";

/**
 * Whether the page being rendered is an Italian one, decided by its path and
 * the table in lib/i18n-routes.ts. Shared components use it to pick their
 * labels and link targets; pages never need it, they know their language.
 */
export function useIsItalian(): boolean {
  return isItalianPath(usePathname() ?? "/");
}
