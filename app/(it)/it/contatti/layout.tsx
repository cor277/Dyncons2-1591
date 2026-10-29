import type { Metadata } from "next";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";

const TITLE = "Contatti";
const DESCRIPTION =
  "Contatta Dynamics Consulting. Parliamo del tuo progetto di infrastruttura AI, modernizzazione legacy o integrazione enterprise. Base a Milano, al servizio dei settori regolati in Italia e nell’UE.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/it/contatti"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.dynamicsconsulting.it/it/contatti",
    type: "website",
    locale: "it_IT",
  },
};

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
