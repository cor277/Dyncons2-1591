import { notFound } from "next/navigation";

/**
 * Catch-all that funnels unmatched URLs into this route group, so the branded
 * not-found.tsx renders with NavBar and Footer.
 *
 * Needed because the site has two root layouts — (en) and (it). With multiple
 * root layouts there is no layout at app/ level, so an unmatched path has no
 * layout to render into and Next falls back to its bare built-in 404.
 *
 * Real routes always win: Next matches specific segments before a catch-all.
 * Route handlers and metadata routes (api, sitemap, robots) are unaffected.
 */
export default function CatchAllNotFound() {
  notFound();
}
