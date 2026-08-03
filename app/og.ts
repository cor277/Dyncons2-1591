/**
 * Shared social preview image.
 *
 * Next's Metadata API does NOT merge `openGraph` field by field: a page that
 * defines its own `openGraph` block replaces the parent's entirely, and the
 * `opengraph-image` file convention is overridden too. So any page declaring
 * `openGraph` must declare `images` as well, or it ships without a preview.
 *
 * Spread these into every page-level `openGraph` / `twitter` block.
 */
export const OG_IMAGE = [
  {
    url: "/og-image.png",
    width: 1424,
    height: 752,
    alt: "Dynamics Consulting — Sovereign AI Infrastructure for Regulated Industries",
  },
];

export const TWITTER_IMAGE = ["/og-image.png"];
