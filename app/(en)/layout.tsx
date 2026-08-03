import type { Metadata } from "next";
import { fontVariables } from "../fonts";
import { schemaOrg } from "../schema-org";
import "../globals.css";
import { PrivacyBanner } from "@/components/ui/PrivacyBanner";
import { ChatbotWidget } from "@/components/ChatbotWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dynamicsconsulting.it"),
  title: {
    default: "Dynamics Consulting | Sovereign AI Infrastructure",
    template: "%s | Dynamics Consulting",
  },
  description:
    "We build on-premise AI platforms for organisations that cannot afford data sovereignty risk. Healthcare, pharma, energy, enterprise CRM. Nexus MDS Core — 16 services, GDPR-ready, AI Act compliant, aligned with EU Tech Sovereignty Package (CADA, 2026), PLD 2024 ready.",
  keywords: [
    "AI Solution Architect",
    "Sovereign AI Italy",
    "on-premise AI healthcare",
    "RAG architecture",
    "enterprise AI Italy",
    "GDPR AI compliance",
    "self-hosted LLM",
    "agentic AI",
    "AI Act compliance",
    "Nexus MDS Core",
    "pharmaceutical AI",
    "healthcare AI infrastructure",
    "EU Tech Sovereignty Package",
    "CADA 2026",
    "Cloud and AI Development Act",
    "PLD 2024 software",
    "EU AI Act 2026",
    "CEPF methodology",
    "sovereign cloud Italy",
    "Fractional AI CTO",
  ],
  authors: [{ name: "Corrado Patierno", url: "https://www.dynamicsconsulting.it" }],
  creator: "Corrado Patierno",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dynamicsconsulting.it",
    siteName: "Dynamics Consulting",
    title: "Dynamics Consulting | Sovereign AI Infrastructure for Regulated Industries · Italy",
    description:
      "On-premise AI platforms for healthcare and pharma. Nexus MDS Core — 16 services, GDPR-ready, AI Act compliant. Aligned with EU Tech Sovereignty Package (CADA, 2026).",
    images: [
      {
        url: "/og-image.png",
        width: 1400,
        height: 788,
        alt: "Dynamics Consulting — Sovereign AI Infrastructure for Regulated Industries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamics Consulting | Sovereign AI Infrastructure for Regulated Industries · Italy",
    description:
      "On-premise AI platforms for healthcare and pharma. Nexus MDS Core — 16 services, GDPR-ready, AI Act compliant. Aligned with EU Tech Sovereignty Package (CADA, 2026).",
    images: ["/og-image.png"],
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
  alternates: { canonical: "https://www.dynamicsconsulting.it" },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontVariables} dark`}
    >
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
