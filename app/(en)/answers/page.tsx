import type { Metadata } from "next";
import Link from "next/link";
import { ANSWER_LIST } from "@/app/answers";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { BASE_URL, ORG_ID, PERSON_ID, WEBSITE_ID } from "@/app/schema-org";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";

const URL = `${BASE_URL}/answers`;

const DESCRIPTION =
  "Direct answers to the questions we are actually asked about sovereign AI, RAG in regulated environments, the EU AI Act and AI governance — each one answered in the first paragraph, with the reasoning and the primary sources underneath.";

export const metadata: Metadata = {
  title: "Answers — sovereign AI, RAG and AI governance",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    images: OG_IMAGE,
    title: "Answers — sovereign AI, RAG and AI governance",
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "Answers — sovereign AI, RAG and AI governance",
    description: DESCRIPTION,
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${URL}#webpage`,
    url: URL,
    name: "Answers — sovereign AI, RAG and AI governance",
    description: DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    author: { "@id": PERSON_ID },
    breadcrumb: { "@id": `${URL}#breadcrumb` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: ANSWER_LIST.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.question,
        url: `${URL}/${a.slug}`,
      })),
    },
  },
  breadcrumbSchema(URL, [{ name: "Home", path: "/" }, { name: "Answers" }]),
];

export default function AnswersIndex() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Answers
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Questions we are actually asked
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              One question per page, answered in the first block, with the reasoning and the primary
              sources underneath. They are written from what this practice has built and had to
              defend &mdash; where an answer would require inventing evidence, the page does not
              exist.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {ANSWER_LIST.map((a) => (
              <Link
                key={a.slug}
                href={`/answers/${a.slug}`}
                className="block bg-[#161B22] border border-[#30363D] rounded-xl p-6 hover:border-[#00B4D8] transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <TechBadge label={a.topic} variant="cyan" />
                  <time dateTime={a.updated} className="text-xs text-[#7D8FA3]">
                    updated {a.updatedLabel}
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
              Longer arguments live in{" "}
              <Link href="/research" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                Research
              </Link>
              ; what a deployment looks like in production is in the{" "}
              <Link href="/case-studies" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                case studies
              </Link>
              . If your question is not here, it is worth{" "}
              <Link href="/contact" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                asking directly
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
