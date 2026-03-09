import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Dynamics Consulting | AI Solution Architect Italy",
    template: "%s | Dynamics Consulting",
  },
  description:
    "We design AI-ready infrastructure, data platforms, and multi-agent systems for enterprise companies. GDPR, AI Act, Zero-Trust. Nexus MDS Core.",
  keywords: [
    "AI Solution Architect",
    "Kubernetes Architect",
    "Dynamics 365 Architect",
    "RAG architecture",
    "enterprise AI Italy",
    "GDPR AI compliance",
    "self-hosted LLM",
    "agentic AI",
    "AI Act compliance",
    "Nexus MDS Core",
  ],
  authors: [{ name: "Corrado Patierno", url: "https://www.dynamicsconsulting.it" }],
  creator: "Corrado Patierno",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dynamicsconsulting.it",
    siteName: "Dynamics Consulting",
    title: "Dynamics Consulting | AI Solution Architect Italy",
    description:
      "AI-ready infrastructure, data platforms, and multi-agent systems for enterprise. GDPR, AI Act, Zero-Trust.",
    images: [
      {
        url: "/og-image.png",
        width: 1400,
        height: 788,
        alt: "Dynamics Consulting — Architecting the Future of AI & Enterprise Data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamics Consulting | AI Solution Architect",
    description:
      "AI-ready infrastructure, data platforms, and multi-agent systems for enterprise.",
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
    "@type": "Person",
    name: "Corrado Patierno",
    jobTitle: "AI Solution Architect",
    worksFor: { "@type": "Organization", name: "Dynamics Consulting" },
    url: "https://www.dynamicsconsulting.it/about",
    knowsAbout: [
      "Artificial Intelligence",
      "Kubernetes",
      "Dynamics 365",
      "Data Architecture",
      "GDPR",
      "AI Act",
      "Blockchain",
      "Retrieval-Augmented Generation",
      "Multi-Agent Systems",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dynamics Consulting",
    founder: { "@type": "Person", name: "Corrado Patierno" },
    address: { "@type": "PostalAddress", addressCountry: "IT" },
    email: "info@dynamicsconsulting.it",
    telephone: "+393407253246",
    url: "https://www.dynamicsconsulting.it",
    vatID: "10651160961",
    knowsAbout: [
      "Applied AI",
      "Kubernetes",
      "Dynamics 365",
      "RAG",
      "Zero-Trust Security",
      "Enterprise Integration",
      "Data Lakehouse",
      "Blockchain",
    ],
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
      </body>
    </html>
  );
}
