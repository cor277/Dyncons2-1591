import type { Metadata } from "next";
import Link from "next/link";
import { ANSWER_LIST_IT } from "@/app/answers-it";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { BASE_URL, ORG_ID, PERSON_ID, WEBSITE_ID } from "@/app/schema-org";
import { breadcrumbSchema } from "@/app/seo";
import { alternatesFor } from "@/lib/i18n-routes";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

const PATH = "/it/risposte";
const URL = `${BASE_URL}${PATH}`;

const TITLE = "Risposte — AI sovrana, RAG e AI governance";

const DESCRIPTION =
  "Risposte dirette alle domande che ci vengono fatte davvero su AI sovrana, RAG in ambienti regolati, AI Act e AI governance: ognuna risolta nel primo paragrafo, con il ragionamento e le fonti primarie subito sotto.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "it",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    author: { "@id": PERSON_ID },
    breadcrumb: { "@id": `${URL}#breadcrumb` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: ANSWER_LIST_IT.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.question,
        url: `${URL}/${a.slug}`,
      })),
    },
  },
  breadcrumbSchema(URL, [{ name: "Risorse in italiano", path: "/it" }, { name: "Risposte" }]),
];

export default function RisposteIndex() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Risposte
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Le domande che ci fanno davvero
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Una domanda per pagina, con la risposta nel primo blocco e sotto il ragionamento e le
              fonti primarie. Sono scritte a partire da ciò che abbiamo costruito e abbiamo dovuto
              difendere &mdash; dove una risposta richiederebbe di inventare prove, la pagina non
              esiste.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {ANSWER_LIST_IT.map((a) => (
              <Link
                key={a.slug}
                href={`${PATH}/${a.slug}`}
                className="block bg-[#161B22] border border-[#30363D] rounded-xl p-6 hover:border-[#00B4D8] transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <TechBadge label={a.topic} variant="cyan" />
                  <time dateTime={a.updated} className="text-xs text-[#7D8FA3]">
                    aggiornato a {a.updatedLabel}
                  </time>
                </div>
                <h2 className="text-xl font-bold text-[#E6EDF3] mb-2">{a.question}</h2>
                <p className="text-[#7D8FA3] text-base leading-relaxed">{a.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-16 px-6">
          <div className="max-w-3xl mx-auto text-[#7D8FA3] text-base leading-relaxed border-t border-[#30363D] pt-8">
            <p>
              Gli approfondimenti più lunghi sono in{" "}
              <Link href="/it/ricerca" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                Ricerca
              </Link>
              ; come appare un deployment in produzione lo raccontano i{" "}
              <Link href="/it/case-studies" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                case study
              </Link>
              . Se la tua domanda non è qui, vale la pena{" "}
              <Link href="/it/contatti" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                farla direttamente
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <CTASection
        title="Parliamo del tuo progetto"
        subtitle="Un’infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Contattaci."
        ctaLabel="Inizia la conversazione →"
        ctaHref="/it/contatti"
      />
      <Footer />
    </>
  );
}
