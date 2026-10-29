import { notFound } from "next/navigation";

/**
 * Italian twin of app/(en)/[...notfound]: any unmatched path under /it lands in
 * the (it) route group, so app/(it)/not-found.tsx renders the 404 in Italian,
 * inside <html lang="it">, with the Italian NavBar and Footer.
 *
 * Real routes always win: every existing /it/* page is matched before this
 * catch-all.
 */
export default function ItalianCatchAllNotFound() {
  notFound();
}
