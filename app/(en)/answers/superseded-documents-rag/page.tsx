import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS } from "@/app/answers";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { SOURCES } from "@/app/primary-sources";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerPageLayout, AnswerSection } from "@/components/sections/AnswerPageLayout";

const answer = ANSWERS["superseded-documents-rag"];
const URL = `https://www.dynamicsconsulting.it/answers/${answer.slug}`;

export const metadata: Metadata = {
  title: answer.title,
  description: answer.description,
  keywords: answer.keywords,
  alternates: { canonical: URL },
  openGraph: {
    images: OG_IMAGE,
    title: answer.title,
    description: answer.description,
    url: URL,
    type: "article",
    locale: "en_US",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: answer.title,
    description: answer.description,
  },
};

const schema = [
  articleSchema({
    url: URL,
    type: "TechArticle",
    headline: answer.question,
    description: answer.description,
    datePublished: answer.updated,
    articleSection: answer.topic,
    keywords: answer.keywords,
    about: ["Retrieval-augmented generation", "Document versioning", "Regulatory documents"],
  }),
  breadcrumbSchema(URL, [
    { name: "Home", path: "/" },
    { name: "Answers", path: "/answers" },
    { name: answer.question },
  ]),
];

export default function SupersededDocumentsAnswer() {
  return (
    <>
      <JsonLd data={schema} />
      <AnswerPageLayout
        question={answer.question}
        updated={answer.updated}
        updatedLabel={answer.updatedLabel}
        shortAnswer={
          <p>
            You do not solve it by deleting the old documents, and you cannot solve it with
            similarity search alone — a revoked circular is still textually the best match for a
            question about its subject. The working approach has three parts. Model the corpus as
            chains rather than files: each document belongs to a lineage, carries a version
            identifier and a validity interval, and knows what it replaced. Filter retrieval by
            validity at query time, relative to the date the question is about, not the date it was
            asked. And keep the superseded versions indexed but marked, because &ldquo;what was the
            rule in March&rdquo; is a legitimate question in a regulated environment, and because an
            answer that cannot show what changed is not auditable.
          </p>
        }
        sources={[SOURCES.aiAct, SOURCES.aifa, SOURCES.garante]}
        related={[
          {
            label: "Federfarma Lombarda — the version chain",
            href: "/case-studies/federfarma#version-chain",
            note: "how this is implemented in production",
          },
          {
            label: "How to implement RAG on enterprise data",
            href: "/research/rag-enterprise-data",
          },
          { label: "How do you build a RAG system with an audit trail?", href: "/answers/rag-audit-trail" },
          { label: "Nexus MDS Core", href: "/platform" },
        ]}
        ctaTitle="Currency is an architecture problem"
        ctaSubtitle="If your assistant cannot say which version an answer stood on, the fix is in the ingestion pipeline, not in the prompt."
      >
        <AnswerSection id="why-it-breaks" title="Why the naive system gets this wrong">
          <p>
            A vector index ranks by semantic similarity. Nothing in that operation knows about time,
            authority or revocation. Ask about a procedure and the index returns the passages that
            discuss it best — which will include the 2023 circular that the 2025 one replaced, often
            ranked above it, because the older text is longer and more explicit.
          </p>
          <p>
            The generation step then makes it worse rather than better: it synthesises fluently
            across both, producing an answer that reads as authoritative and quietly merges two
            regimes. This is the failure mode that matters in regulated work, and it is not a
            hallucination in the usual sense — every sentence is grounded in a real document. The
            document is simply no longer in force.
          </p>
        </AnswerSection>

        <AnswerSection id="the-model" title="Model the corpus as chains, not as files">
          <p>
            The unit that matters is not the document, it is the{" "}
            <strong className="text-[#E6EDF3]">lineage</strong>: the sequence of versions through
            which an obligation has passed. Each version needs four properties, and they have to be
            established at ingestion, because reconstructing them later from PDFs is guesswork:
          </p>
          <ul className="space-y-3 text-base list-none">
            {[
              ["Lineage identifier", "What thing is this a version of. Two documents with different titles can belong to the same lineage; two with the same title often do not."],
              ["Version identifier", "Immutable, and referenced by every chunk derived from the document, so a retrieved passage can always name its origin exactly."],
              ["Validity interval", "From when, and until when — where the end is open until a successor closes it. This is what makes 'in force' computable."],
              ["Relation to the predecessor", "Replaces, amends, integrates, or revokes. The distinction changes the answer: an amendment leaves most of the earlier text standing, a revocation does not."],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-3">
                <span className="text-[#00B4D8] mt-1.5 flex-shrink-0">—</span>
                <span>
                  <strong className="text-[#E6EDF3]">{k}.</strong> {v}
                </span>
              </li>
            ))}
          </ul>
          <p>
            Where the source publishes structured metadata, use it. Where it does not — which is
            most sectoral publishing — extraction of these four fields is a task worth doing with
            review in the loop, because an error here propagates into every answer the lineage ever
            grounds. In the{" "}
            <Link href="/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              Federfarma deployment
            </Link>{" "}
            the version chain is explicit and visible in the answer, so the reader can check the
            claim rather than trust it.
          </p>
        </AnswerSection>

        <AnswerSection id="retrieval" title="Filter at retrieval, not in the prompt">
          <p>
            The temptation is to retrieve everything and instruct the model to prefer recent
            documents. This does not work reliably and cannot be audited: the instruction is a
            request, not a constraint, and nothing in the record shows which documents were in play.
          </p>
          <p>
            The correct place is metadata filtering in the retrieval query itself. A question is
            evaluated against a reference date — normally today, but explicitly the date in question
            when a user asks about the past — and only versions valid on that date are eligible.
            Superseded versions remain in the index, retrievable when a historical question calls
            for them, and marked in the result so that neither the model nor the reader can mistake
            one for current.
          </p>
          <p>
            Two refinements matter in production. Retrieve the successor alongside a superseded hit,
            so the system can say what replaced it rather than simply refusing. And keep the
            eligibility decision in the record — an answer that cannot show which versions it was
            allowed to see is not reconstructable, whatever else it logs.
          </p>
        </AnswerSection>

        <AnswerSection id="presentation" title="Show the chain in the answer">
          <p>
            The last part is interface, and it is where the burden actually shifts. An answer that
            cites &ldquo;Circular 12/2025, in force since 3 March 2025, replacing Circular 7/2023&rdquo;
            with a link to both is checkable in ten seconds. An answer that cites a title and a page
            number asks the reader to trust it, and in a regulated environment the reader is the one
            carrying the professional responsibility for acting on it.
          </p>
          <p>
            This is the difference between a system that reduces compliance burden and one that
            merely moves it: the burden of establishing what is current sits in the system, and the
            evidence for it is on the screen.
          </p>
        </AnswerSection>
      </AnswerPageLayout>
    </>
  );
}
