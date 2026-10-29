import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n-routes";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { ORG_ID, NEXUS_ID, WEBSITE_ID } from "@/app/schema-org";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { NexusPlatformBody } from "@/components/sections/NexusPlatformBody";

const PAGE_URL = "https://www.dynamicsconsulting.it/it/piattaforma-nexus";
const EN_URL = "https://www.dynamicsconsulting.it/platform";

const TITLE = "Nexus MDS Core — lo strato AI che resta nel tuo perimetro";
const DESCRIPTION =
  "Indicizzazione, retrieval, identità e audit nel tuo perimetro; ogni chiamata al modello in un registro di audit a catena hash che puoi verificare; generazione su modello locale o su endpoint UE sostituibile. Governance configurata una volta: ogni nuovo caso d’uso costa meno.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/it/piattaforma-nexus"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: TWITTER_IMAGE,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: "it",
  isPartOf: { "@id": WEBSITE_ID },
  about: [{ "@id": NEXUS_ID }, { "@id": ORG_ID }],
  breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
};

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Nexus MDS Core" },
]);

export default function PiattaformaNexusPage() {
  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={crumbs} />
      <NavBar />
      <main>
        <NexusPlatformBody locale="it" />
      </main>
      <Footer />
    </>
  );
}
