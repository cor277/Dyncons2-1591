import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS } from "@/app/answers";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { SOURCES } from "@/app/primary-sources";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerPageLayout, AnswerSection } from "@/components/sections/AnswerPageLayout";

const answer = ANSWERS["evaluate-ai-vendor-regulated"];
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
    about: ["Vendor assessment", "AI governance", "Product liability"],
  }),
  breadcrumbSchema(URL, [
    { name: "Home", path: "/" },
    { name: "Answers", path: "/answers" },
    { name: answer.question },
  ]),
];

const questions = [
  [
    "Where does the data go, physically and legally?",
    "Not 'is it encrypted' — which datacentres, which subprocessors, under which jurisdiction, and what happens to prompts, retrieved context, telemetry and support snapshots. Ask for the subprocessor list and check whether you are notified of changes or merely informed after them.",
  ],
  [
    "Which model answers, and what happens when it changes?",
    "A model swap behind a stable endpoint changes your system's behaviour without changing your system. Ask whether you are told, whether you can pin a version, and how long a deprecated model remains available. A supplier who cannot answer this is asking you to accept undetectable change.",
  ],
  [
    "What can the system show about an answer it gave six months ago?",
    "Retrieval set, document versions, prompt, model, output, approver. If the product cannot produce that, the obligation does not disappear — it lands on you, and you cannot discharge it.",
  ],
  [
    "What is the ingestion policy for personal data?",
    "Whether personal data can enter the index, whether it can be excluded at ingestion rather than filtered at answer time, and how deletion propagates to embeddings and caches. 'We filter it in the output' is a different and much weaker claim.",
  ],
  [
    "What does the contract actually make them answerable for?",
    "Read the limitation of liability against the value of the failure it would cover. Then read the availability commitment, the incident notification window, and whether accuracy of output is warranted at all — usually it is not, and that is not unreasonable, but you should know it before the incident rather than during it.",
  ],
  [
    "What happens on exit?",
    "Export format for documents, embeddings, configuration and the audit record; how long you have; who deletes what and on what evidence. Exit terms are the cheapest thing to negotiate before signature and the most expensive after.",
  ],
  [
    "Who carries the security obligations you already have?",
    "If you are in scope for NIS2 or DORA, supplier arrangements are part of your own duties, not a separate conversation. Ask how the supplier supports your reporting timelines, because your clock does not stop while you wait for them.",
  ],
  [
    "What are they claiming, in writing, about compliance?",
    "A vendor asserting that their product makes you compliant is describing something that does not exist. What a product can do is carry controls and produce evidence. That distinction usually separates suppliers who have done this in a regulated environment from suppliers who have read about it.",
  ],
];

export default function EvaluateVendorAnswer() {
  return (
    <>
      <JsonLd data={schema} />
      <AnswerPageLayout
        question={answer.question}
        updated={answer.updated}
        updatedLabel={answer.updatedLabel}
        shortAnswer={
          <p>
            Evaluate the supplier on what happens after the demo, not on what the demo shows. Eight
            questions separate a supplier who has operated in a regulated environment from one who
            has not: where the data goes physically and legally, which model answers and what
            happens when it changes, what the system can show about an answer six months later, how
            personal data is kept out of the index, what the contract makes them answerable for,
            what exit looks like, how they support your own security and incident obligations, and
            what they are claiming in writing about compliance. Ask them in that order, in writing,
            before the commercial conversation — the answers are the assessment.
          </p>
        }
        sources={[SOURCES.pld, SOURCES.aiAct, SOURCES.nis2, SOURCES.dora]}
        related={[
          {
            label: "Exposure assessment — PLD 2024 and the AI Act",
            href: "/assessment",
            note: "the engagement that establishes where supplier liability stops and yours begins",
          },
          { label: "AI Governance & Compliance Advisory", href: "/services/governance-advisory" },
          {
            label: "Fractional AI CTO",
            href: "/services/fractional-cto",
            note: "where vendor assessment sits as a standing responsibility",
          },
          { label: "Is a RAG system subject to the EU AI Act?", href: "/answers/rag-eu-ai-act" },
        ]}
        ctaTitle="A supplier assessment your board can read"
        ctaSubtitle="Technical due diligence on an AI supplier, written as a decision document rather than a checklist."
      >
        <AnswerSection id="the-eight" title="The eight questions">
          <dl className="space-y-5">
            {questions.map(([q, a]) => (
              <div key={q} className="border-l-2 border-[#00B4D8] pl-5">
                <dt className="font-semibold text-[#E6EDF3] mb-1">{q}</dt>
                <dd className="text-base">{a}</dd>
              </div>
            ))}
          </dl>
        </AnswerSection>

        <AnswerSection id="liability" title="The question underneath all of them">
          <p>
            From 9 December 2026, the date by which Member States must have transposed the 2024
            product liability directive, software is treated as a product for liability purposes in
            the EU. That does not make suppliers liable for everything, and it does not make buyers
            safe. What it does is make the boundary matter: which defects sit with whoever put the
            product on the market, and which sit with whoever deployed it, configured it, and fed it
            data.
          </p>
          <p>
            In practice most disputes will turn on that boundary rather than on the technology, and
            most organisations have never drawn it. Doing so is the entire content of the{" "}
            <Link href="/assessment" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              exposure assessment
            </Link>
            : three days of work, a signed deliverable stating where the line falls for your
            configuration and what evidence supports it.
          </p>
        </AnswerSection>

        <AnswerSection id="signals" title="Signals in how they answer">
          <p>
            A supplier who has been through an inspection answers in specifics and volunteers the
            limits: what the product does not do, what remains the customer&apos;s responsibility,
            what they would need from you to support an audit. A supplier who has not answers in
            adjectives — enterprise-grade, bank-level, fully compliant — and treats the questions as
            an obstacle rather than as normal diligence.
          </p>
          <p>
            The second signal is who turns up. If nobody in the room can describe the retrieval
            pipeline or name the model, you are talking to the commercial layer of a company whose
            engineering you have not yet met. Ask to meet it before signing, not after the first
            incident.
          </p>
          <p>
            The third is what they ask you. A supplier who does not ask about your data
            classification, your retention obligations or your sector&apos;s reporting duties is
            planning to hand you a generic deployment and let you discover the gaps yourself.
          </p>
        </AnswerSection>
      </AnswerPageLayout>
    </>
  );
}
