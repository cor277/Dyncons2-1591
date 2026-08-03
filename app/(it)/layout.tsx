import type { Metadata } from "next";
import { fontVariables } from "../fonts";
import { schemaOrg } from "../schema-org";
import "../globals.css";
import { PrivacyBanner } from "@/components/ui/PrivacyBanner";
import { ChatbotWidget } from "@/components/ChatbotWidget";

/**
 * Italian root layout.
 *
 * Only a root layout can emit <html lang>, so the Italian-language routes live in
 * their own route group with their own root layout. Route groups do not affect URLs:
 * every path under (it) resolves exactly as it did before.
 *
 * Each page under this group sets its own title, description and canonical; what is
 * defined here are the language-level defaults.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.dynamicsconsulting.it"),
  title: {
    default: "Dynamics Consulting | Infrastruttura AI sovrana",
    template: "%s | Dynamics Consulting",
  },
  description:
    "Piattaforme AI per organizzazioni che non possono permettersi rischi di sovranità del dato. Sanità, farmaceutico, energia, CRM enterprise. Nexus MDS Core — 16 servizi, conforme GDPR, pronto per l'AI Act.",
  authors: [{ name: "Corrado Patierno", url: "https://www.dynamicsconsulting.it" }],
  creator: "Corrado Patierno",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Dynamics Consulting",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ItalianRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${fontVariables} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-dm bg-[#0D1117] text-[#E6EDF3] antialiased">
        {children}
        <ChatbotWidget />
        <PrivacyBanner />
      </body>
    </html>
  );
}
