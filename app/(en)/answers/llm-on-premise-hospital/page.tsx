import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS } from "@/app/answers";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { SOURCES } from "@/app/primary-sources";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerPageLayout, AnswerSection } from "@/components/sections/AnswerPageLayout";

const answer = ANSWERS["llm-on-premise-hospital"];
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
    about: ["On-premise LLM", "Healthcare AI", "Data protection"],
  }),
  breadcrumbSchema(URL, [
    { name: "Home", path: "/" },
    { name: "Answers", path: "/answers" },
    { name: answer.question },
  ]),
];

export default function HospitalLlmAnswer() {
  return (
    <>
      <JsonLd data={schema} />
      <AnswerPageLayout
        question={answer.question}
        updated={answer.updated}
        updatedLabel={answer.updatedLabel}
        shortAnswer={
          <p>
            Start with a use case that is documentary rather than clinical — internal procedures,
            regulatory circulars, purchasing, administrative correspondence — because it delivers
            value in weeks and keeps the first deployment outside both medical device territory and
            the highest-risk data. Build it as retrieval over a curated corpus with a self-hosted
            model, not as a chatbot over the clinical record. Exclude personal and health data at
            ingestion rather than filtering it at answer time. Put identity, retrieval, audit and
            retention inside the hospital&apos;s perimeter from the first day, because those are the
            parts that cannot be retrofitted. Then, and only then, evaluate whether a clinical use
            case is worth the regulatory route it requires.
          </p>
        }
        sources={[SOURCES.gdpr, SOURCES.aiAct, SOURCES.mdr, SOURCES.nis2]}
        related={[
          {
            label: "On-premise AI for healthcare",
            href: "/ai-on-premise-healthcare",
            note: "the fuller argument, with the architecture",
          },
          {
            label: "AI On-Premise per la Sanità Italiana",
            href: "/it/ai-sanitaria-on-premise",
            note: "in Italian, with the Italian regulatory context",
          },
          {
            label: "Federfarma Lombarda — a documentary assistant in production",
            href: "/case-studies/federfarma",
          },
          { label: "Nexus MDS Core", href: "/platform" },
        ]}
        ctaTitle="The first deployment decides the second"
        ctaSubtitle="A documentary assistant that is properly bounded becomes the platform for everything after it. One that is not becomes the reason the next project is refused."
      >
        <AnswerSection id="sequence" title="Sequence: what to build first">
          <p>
            The failure pattern in hospital AI is not technical. It is starting with the case that
            excites the clinical directorate, discovering eighteen months of governance work
            underneath it, and losing the budget before anything reaches a ward.
          </p>
          <p>
            The sequence that works starts where the documents are dense, the errors are visible and
            the data is not health data: internal protocols and procedures, regional and national
            circulars, tenders and purchasing rules, accreditation documentation, HR and
            administrative policy. These corpora are large, badly searchable, constantly superseded,
            and cost real staff time every week. A retrieval assistant over them pays for itself and,
            more importantly, builds the platform — identity, ingestion, audit, retention, operations
            — that a clinical use case would otherwise have to build from zero.
          </p>
          <p>
            The same reasoning is why the reference deployment on this site is a{" "}
            <Link href="/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              regulatory assistant for pharmacies
            </Link>{" "}
            rather than a clinical tool: documentary currency is a real, expensive problem, and it
            can be solved without touching a patient record.
          </p>
        </AnswerSection>

        <AnswerSection id="data-boundary" title="The data boundary, decided at ingestion">
          <p>
            Health data is special-category data under the GDPR, and the cheapest way to hold that
            obligation is to keep it out of the index entirely. Exclusion at ingestion is stronger
            than suppression at answer time in every respect that matters: it is verifiable, it
            survives a prompt injection, it leaves nothing to purge, and it is far easier to explain
            to a data protection officer than a filter that mostly works.
          </p>
          <p>
            Where a use case genuinely requires patient data, treat it as a different system with a
            different lawful basis, a different retention policy and a different approval path —
            not as an expansion of scope on the existing one. The architectural boundary should match
            the legal one, otherwise the first will erode until it no longer supports the second.
          </p>
          <p>
            Two questions decide the rest: does personal data ever reach the generation step, and
            does it ever leave the perimeter. In a{" "}
            <Link
              href="/answers/private-ai-vs-sovereign-ai"
              className="text-[#00B4D8] hover:text-[#E6EDF3]"
            >
              sovereign hybrid deployment
            </Link>{" "}
            the honest answer to the second is that retrieved context does leave, which is precisely
            why the first answer has to be no.
          </p>
        </AnswerSection>

        <AnswerSection id="stack" title="What the stack has to include">
          <p>
            A hospital deployment is not a model with a web page in front of it. The components that
            determine whether it survives its first audit are the unglamorous ones:
          </p>
          <ul className="space-y-3 text-base list-none">
            {[
              ["Identity and access", "Integration with the hospital directory, role segregation that mirrors clinical and administrative separation, and least privilege enforced at retrieval — not only in the interface."],
              ["Curated ingestion", "A pipeline that knows document lineage, versions and validity intervals, so answers can state what is in force. Regulatory corpora are superseded constantly, and similarity search has no opinion about that."],
              ["Audit and reconstructability", "A tamper-evident record of question, retrieval set, versions, model and disposition, with a retention period someone owns."],
              ["Human oversight", "Explicit approval gates wherever an output has consequences, with the approver recorded. This is a workflow requirement, not a disclaimer in the footer."],
              ["Operations", "Backup, monitoring, GPU capacity planning and a named on-call. An unavailable system in a 24-hour environment is a clinical risk of its own kind."],
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
            On hardware, the useful correction is that a documentary assistant does not need a
            research cluster. Production deployments of this shape run on modest GPU capacity because
            the expensive part is retrieval quality, not parameter count &mdash; the{" "}
            <Link href="/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              Federfarma system
            </Link>{" "}
            runs its local model, privacy filter and embeddings on a single 8 GB GPU while serving
            over a thousand pharmacies. Size the hardware after the
            retrieval design, not before it.
          </p>
        </AnswerSection>

        <AnswerSection id="regulatory" title="Where the regulatory line sits">
          <p>
            Two regimes decide how heavy the project becomes. Software intended for diagnosis,
            prevention, monitoring, prediction or treatment can qualify as a{" "}
            <strong className="text-[#E6EDF3]">medical device</strong> under Regulation (EU)
            2017/745, with the conformity assessment route that follows. Separately, the AI Act
            attaches obligations by intended purpose and role, and a system that is a safety
            component of a regulated product sits in its most demanding class.
          </p>
          <p>
            A documentary assistant used by staff to find and interpret administrative and regulatory
            texts is a different object from a tool that proposes a diagnosis, and the distinction
            turns on intended purpose as declared and as actually used. Which means scope creep is a
            regulatory event: the moment a &ldquo;procedure assistant&rdquo; starts answering
            clinical questions, the classification conversation has to reopen. Build the boundary
            into the system, not into the training material.
          </p>
          <p>
            Italian hospitals have a further layer &mdash; national AI legislation and the sector
            rules on secondary use of health data &mdash; discussed in{" "}
            <Link href="/research/legge-132-2025" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              the analysis of Legge 132/2025
            </Link>
            . And for organisations in scope of NIS2, an AI platform is part of the entity&apos;s own
            security posture and incident duties, not a project running beside them.
          </p>
        </AnswerSection>
      </AnswerPageLayout>
    </>
  );
}
