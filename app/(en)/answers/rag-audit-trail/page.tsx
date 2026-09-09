import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS } from "@/app/answers";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { SOURCES } from "@/app/primary-sources";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerPageLayout, AnswerSection } from "@/components/sections/AnswerPageLayout";

const answer = ANSWERS["rag-audit-trail"];
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
    about: ["Audit trail", "Retrieval-augmented generation", "AI governance"],
  }),
  breadcrumbSchema(URL, [
    { name: "Home", path: "/" },
    { name: "Answers", path: "/answers" },
    { name: answer.question },
  ]),
];

const record = [
  ["Question", "The input as received, including the identity of the person who asked and the access rights that identity carried at that moment."],
  ["Retrieval set", "Which chunks were returned, from which documents, at which version, with the scores. Not just the ones cited in the answer — the ones considered."],
  ["Document state", "For each source: the version identifier and its validity interval, so that 'in force on the date of the question' is a computable statement rather than an assumption."],
  ["Prompt", "The assembled prompt, or a hash of it plus the template identifier and the variables. A template that changed silently is the most common cause of an answer that cannot be reproduced."],
  ["Model identity", "Provider, model name, version, and the generation parameters. If the endpoint is external, this is the only record you will have of what actually answered."],
  ["Output", "The answer as returned, before any post-processing, and the post-processed form if they differ."],
  ["Disposition", "Who saw it, whether a human approved it, and what happened next — the part most systems forget, and the part an inspector asks about first."],
];

export default function RagAuditTrailAnswer() {
  return (
    <>
      <JsonLd data={schema} />
      <AnswerPageLayout
        question={answer.question}
        updated={answer.updated}
        updatedLabel={answer.updatedLabel}
        shortAnswer={
          <p>
            An audit trail for a RAG system is not a log of requests. It is whatever is needed to
            reconstruct a specific answer months later: the question, the identity that asked it,
            the exact set of chunks retrieved and the document versions they came from, the prompt
            that was assembled, the model and parameters that generated the text, the output, and
            what a human did with it. Two design decisions make this possible or impossible, and
            both are taken early: documents must carry immutable version identifiers with validity
            intervals, and the record must be written in the same transaction as the answer, to
            storage the application cannot rewrite. Everything else is detail.
          </p>
        }
        sources={[SOURCES.aiAct, SOURCES.gdpr, SOURCES.dora]}
        related={[
          {
            label: "Federfarma Lombarda — reconstructability in production",
            href: "/case-studies/federfarma#reconstructability",
            note: "the section describing this in a live system",
          },
          {
            label: "Governing AI outputs in regulated industries",
            href: "/research/governing-ai-outputs",
          },
          {
            label: "Event sourcing in practice",
            href: "/research/event-sourcing",
            note: "the persistence pattern underneath a tamper-evident record",
          },
          { label: "Nexus MDS Core", href: "/platform" },
        ]}
        ctaTitle="Reconstructability is designed in, not added"
        ctaSubtitle="If an existing system cannot answer 'what did it say on 14 March, and on what', that is a finding worth having in writing before someone else finds it."
      >
        <AnswerSection id="what-to-record" title="What has to be in the record">
          <p>
            The test is simple and unforgiving: pick an answer from six months ago and reconstruct
            it. If any of the following is missing, you cannot.
          </p>
          <dl className="space-y-4">
            {record.map(([k, v]) => (
              <div key={k} className="border-l-2 border-[#30363D] pl-5">
                <dt className="font-semibold text-[#E6EDF3] mb-1">{k}</dt>
                <dd className="text-base">{v}</dd>
              </div>
            ))}
          </dl>
        </AnswerSection>

        <AnswerSection id="tamper-evidence" title="Tamper-evident, not merely stored">
          <p>
            A log the application can edit proves nothing, because the first question anyone asks of
            it is whether it was edited. The practical bar is tamper-evidence: append-only storage,
            records chained by hash so that altering one invalidates those after it, and write
            credentials separated from the application&apos;s own. Cryptographic timestamping raises
            the bar further where the record may end up in a dispute.
          </p>
          <p>
            This is where an event-sourced substrate earns its keep: the record of what happened is
            the primary artefact and the queryable views are derived from it, rather than the record
            being a by-product of a mutable state that somebody can update. The trade-offs of that
            choice, including the ones people underestimate, are in{" "}
            <Link href="/research/event-sourcing" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              event sourcing in practice
            </Link>
            .
          </p>
          <p>
            Retention has to be decided in the same breath. An audit record kept forever is a
            liability under the GDPR, and one purged on a ninety-day default is useless for an
            obligation that runs for years. The retention period is a governance decision with a
            named owner, not an infrastructure default.
          </p>
        </AnswerSection>

        <AnswerSection id="personal-data" title="The personal data problem inside the audit log">
          <p>
            The audit record is the one component that deliberately keeps everything, which makes it
            the component most likely to become an unlawful processing operation. Three moves keep it
            defensible. Keep identities as stable pseudonymous references resolvable through a
            separate, access-controlled mapping, rather than names in the log. Store the question
            verbatim only where the obligation requires it, and otherwise store a hash plus the
            classification. And exclude personal data from the index in the first place, so that
            retrieval records cannot accumulate it — the design decision behind the{" "}
            <Link href="/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              Federfarma deployment
            </Link>
            , where personal data is excluded at ingestion rather than filtered at answer time.
          </p>
        </AnswerSection>

        <AnswerSection id="what-it-buys" title="What the trail is actually for">
          <p>
            Three things, in ascending order of value. It lets you answer an inspector: what the
            system said, on what basis, and who acted on it. It lets you debug a regression: an
            answer that changed when neither the question nor the documents did means the model or
            the template moved, and without the record you are guessing. And it lets you improve
            retrieval honestly — the set of chunks considered but not cited is the dataset that tells
            you where the index is weak.
          </p>
          <p>
            The organisations that get this right treat the record as a product requirement with an
            owner, not as observability. Observability tells you the system is up. The audit trail
            tells you what it did.
          </p>
        </AnswerSection>
      </AnswerPageLayout>
    </>
  );
}
