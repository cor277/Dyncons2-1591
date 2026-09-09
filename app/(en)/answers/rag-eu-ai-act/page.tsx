import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS } from "@/app/answers";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { SOURCES } from "@/app/primary-sources";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerPageLayout, AnswerSection } from "@/components/sections/AnswerPageLayout";

const answer = ANSWERS["rag-eu-ai-act"];
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
    about: ["EU AI Act", "Retrieval-augmented generation", "AI governance"],
  }),
  breadcrumbSchema(URL, [
    { name: "Home", path: "/" },
    { name: "Answers", path: "/answers" },
    { name: answer.question },
  ]),
];

export default function RagAiActAnswer() {
  return (
    <>
      <JsonLd data={schema} />
      <AnswerPageLayout
        question={answer.question}
        updated={answer.updated}
        updatedLabel={answer.updatedLabel}
        shortAnswer={
          <p>
            The AI Act does not regulate techniques, so there is no rule about retrieval-augmented
            generation as such. It regulates AI systems by intended purpose and by the role you play
            in relation to them. A RAG assistant is an AI system within the meaning of Regulation
            (EU) 2024/1689 in the ordinary case; what varies is the risk class, which follows from
            what the system is used for, and the obligations, which follow from whether you are its
            provider or its deployer. Most organisations building an internal RAG assistant on a
            third-party model are deployers of a system whose provider is themselves — they built
            it — using a general-purpose model whose provider is someone else. Getting those roles
            right, in writing, is the first piece of work.
          </p>
        }
        sources={[SOURCES.aiAct, SOURCES.gdpr, SOURCES.pld]}
        related={[
          {
            label: "AI Governance & Compliance Advisory",
            href: "/services/governance-advisory",
            note: "the engagement that answers this for a specific system",
          },
          {
            label: "Governing AI outputs in regulated industries",
            href: "/research/governing-ai-outputs",
            note: "the technical playbook behind the controls named here",
          },
          {
            label: "How do you build a RAG system with an audit trail?",
            href: "/answers/rag-audit-trail",
          },
          {
            label: "Exposure assessment",
            href: "/assessment",
            note: "fixed-scope engagement on where supplier liability stops",
          },
        ]}
        ctaTitle="Classification is a decision someone has to sign"
        ctaSubtitle="The assessment establishes what your system is, in the terms the regulation uses, and what the architecture has to be able to show."
      >
        <AnswerSection id="what-the-act-regulates" title="What the Act actually attaches to">
          <p>
            Three attachment points decide almost every practical question. The first is whether
            what you have is an <strong className="text-[#E6EDF3]">AI system</strong> as the
            Regulation defines it — a machine-based system that infers, from input, how to generate
            outputs such as predictions, content or recommendations. A retrieval pipeline whose last
            step is a language model producing text sits inside that definition without much
            argument.
          </p>
          <p>
            The second is <strong className="text-[#E6EDF3]">intended purpose</strong>. The
            obligations that bite hardest are reserved for uses listed as high-risk, and those are
            described by what the system decides about people — access to employment, creditworthiness,
            essential services, and similar — or by its role as a safety component in a regulated
            product. An assistant that answers &ldquo;which version of this circular is in force&rdquo;
            for a professional who then decides is a very different object from one that scores an
            applicant, even if the code is nearly identical.
          </p>
          <p>
            The third is <strong className="text-[#E6EDF3]">role</strong>. Provider and deployer
            carry different duties, and an organisation frequently occupies both at once: provider
            of the assistant it built, deployer of that assistant in its own operations, and
            customer of a general-purpose model provider upstream. Roles can also shift — putting
            your name on a system, or changing its intended purpose, can make you its provider.
          </p>
        </AnswerSection>

        <AnswerSection id="what-changes-in-practice" title="What this changes in the build">
          <p>
            For the non-high-risk case, which is most internal knowledge assistants, the practical
            requirements are lighter than the discourse suggests but they are not zero. Transparency
            obligations apply where people interact with an AI system or where content is generated
            — a user should not have to guess. AI literacy expectations apply to the people
            operating it. And nothing in the Act displaces the GDPR: if personal data is in the
            index, it is a processing operation with a lawful basis, a retention period and a data
            subject who has rights over it.
          </p>
          <p>
            For the high-risk case the architecture is the compliance work. Risk management, data
            governance over training and input data, technical documentation, logging, human
            oversight and post-market monitoring are all properties a system either has by
            construction or does not have at all. Retrofitting an audit log onto a system that was
            not built to keep one is, in practice, a rebuild — which is why the classification
            question belongs at the start of a project rather than at the end of it.
          </p>
        </AnswerSection>

        <AnswerSection id="rag-specific" title="The parts specific to RAG">
          <p>
            Retrieval changes where the risk sits. A model that hallucinates is a familiar problem;
            a retrieval layer that confidently returns a superseded document is a worse one, because
            the output is well-formed, sourced, and wrong in a way that looks right. Systems in
            regulated environments therefore have to be able to state not just what they answered
            but{" "}
            <Link
              href="/answers/superseded-documents-rag"
              className="text-[#00B4D8] hover:text-[#E6EDF3]"
            >
              which version of which document the answer stood on
            </Link>
            , and whether that version was in force on the date of the question.
          </p>
          <p>
            The second RAG-specific point is the index itself. Whatever the classification, an index
            built from documents nobody filtered is a data protection problem before it is an AI
            problem. The cheapest control in this entire field is excluding personal data at
            ingestion rather than trying to suppress it at answer time — it is the design decision
            behind the{" "}
            <Link href="/case-studies/federfarma" className="text-[#00B4D8] hover:text-[#E6EDF3]">
              Federfarma deployment
            </Link>
            , where personal data is never indexed at all.
          </p>
          <p>
            The third is model substitution. If the generation step is an external endpoint, a
            change of model behind it changes the behaviour of your system. Whatever your
            classification, you need to know which model answered, when, and with what
            configuration — which is an architectural requirement long before it is a regulatory one.
          </p>
        </AnswerSection>

        <AnswerSection id="what-we-do-not-say" title="What this page does not claim">
          <p>
            It does not tell you your classification. That depends on the intended purpose you
            actually declare, the sector you operate in, the deployment context and, for some
            sectors, product legislation that sits alongside the AI Act. It is established through
            the procedures the Regulation sets out, not by a consultant&apos;s opinion and not by a
            deployment topology.
          </p>
          <p>
            What is worth saying plainly: nobody can certify your compliance in a sentence, and a
            supplier who offers to is telling you something about the supplier. The deliverable that
            has value is a signed statement of what you have, what you are missing and in what order
            to close the gap — with the architecture described precisely enough that your lawyers
            can work from it.
          </p>
        </AnswerSection>
      </AnswerPageLayout>
    </>
  );
}
