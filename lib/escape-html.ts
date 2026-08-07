/**
 * Escape a value before interpolating it into an HTML notification email.
 *
 * Form fields reach these emails unmodified, so anything not escaped here is
 * markup the sender controls: disguised links, text impersonating the site.
 * The mailbox reading the notification is the target, not the website.
 */
export function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
