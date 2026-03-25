import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PrivacyBanner } from "@/components/ui/PrivacyBanner";
import { ChatbotWidget } from "@/components/ChatbotWidget";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dynamicsconsulting.it"),
  title: {
    default: "Dynamics Consulting | Sovereign AI Infrastructure",
    template: "%s | Dynamics Consulting",
  },
  description:
    "We build on-premise AI platforms for organisations that cannot afford data sovereignty risk. Healthcare, pharma, energy, enterprise CRM. Nexus MDS Core — 16 services, GDPR-ready, AI Act compliant.",
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
      "We build on-premise AI platforms for organisations that cannot afford data sovereignty risk. Healthcare, pharma, energy, enterprise CRM. Nexus MDS Core — 16 services, GDPR-ready, AI Act compliant.",
    images: [
      {
        url: "/og-image.png",
        width: 1400,
        height: 788,
        alt: "Dynamics Consulting — Sovereign AI Infrastructure for Healthcare & Pharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamics Consulting | Sovereign AI Infrastructure for Regulated Industries · Italy",
    description:
      "On-premise AI platforms for healthcare and pharma. Nexus MDS Core — 16 services, GDPR-ready, AI Act compliant.",
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

const schemaOrg = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dynamics Consulting",
    url: "https://www.dynamicsconsulting.it",
    logo: "https://www.dynamicsconsulting.it/logo.jpg",
    founder: {
      "@type": "Person",
      name: "Corrado Patierno",
    },
    foundingDate: "2019",
    areaServed: ["IT", "EU"],
    knowsAbout: [
      "Sovereign AI Infrastructure",
      "On-premise LLM deployment",
      "Healthcare AI",
      "Pharmaceutical AI",
      "GDPR-compliant AI",
      "AI Act compliance",
      "RAG pipelines",
      "Multi-agent systems",
      "n8n orchestration",
      "Docker enterprise AI stack",
    ],
    description:
      "Italian AI infrastructure consultancy specialising in sovereign, on-premise AI platforms for healthcare and pharma mid-market. Builders of Nexus MDS Core.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+39-340-725-3246",
      contactType: "sales",
      email: "info@dynamicsconsulting.it",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Corrado Patierno",
    jobTitle: "AI Solution Architect & Founder",
    worksFor: {
      "@type": "Organization",
      name: "Dynamics Consulting",
    },
    knowsAbout: [
      "Enterprise AI Architecture",
      "Sovereign AI",
      "Healthcare AI Infrastructure",
      "On-premise LLM",
      "RAG Systems",
      "n8n agentic workflows",
      "Kubernetes",
      "Zero-Trust security",
      "Microsoft Dynamics 365",
    ],
    sameAs: [
      "https://www.linkedin.com/in/corradopatierno",
      "https://amzn.eu/d/06ZlECJe",
    ],
    author: {
      "@type": "Book",
      name: "Logistica Fluida",
      datePublished: "2026",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Nexus MDS Core",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Linux, Kubernetes, Docker",
    description:
      "Enterprise self-hosted AI platform. ~16 orchestrated Docker services including LLM inference, RAG pipeline, Zero-Trust auth, vector search, workflow engine, and observability stack. GDPR-ready and AI Act compliant. Designed for healthcare, pharma, and regulated industries.",
    creator: {
      "@type": "Organization",
      name: "Dynamics Consulting",
    },
    featureList: [
      "On-premise LLM inference (vLLM)",
      "RAG pipeline with Weaviate",
      "Zero-Trust auth with Keycloak OIDC/PKCE",
      "n8n agentic workflow engine",
      "MinIO S3-compatible storage",
      "GDPR-compliant data pipeline",
      "AI Act ready",
      "EU data residency",
      "Kubernetes and bare-metal deployable",
    ],
    url: "https://www.dynamicsconsulting.it/platform",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} dark`}
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
