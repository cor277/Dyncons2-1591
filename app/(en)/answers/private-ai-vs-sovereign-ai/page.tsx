import type { Metadata } from "next";
import Link from "next/link";
import { ANSWERS } from "@/app/answers";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { SOURCES } from "@/app/primary-sources";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnswerPageLayout, AnswerSection } from "@/components/sections/AnswerPageLayout";

const answer = ANSWERS["private-ai-vs-sovereign-ai"];
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
    about: ["Sovereign AI", "Private AI", "Data residency"],
  }),
  breadcrumbSchema(URL, [
    { name: "Home", path: "/" },
    { name: "Answers", path: "/answers" },
    { name: answer.question },
  ]),
];

export default function PrivateVsSovereignAnswer() {
  return (
    <>
      <JsonLd data={schema} />
      <AnswerPageLayout
        question={answer.question}
        updated={answer.updated}
        updatedLabel={answer.updatedLabel}
        shortAnswer={
          <p>
            Private AI is a statement about confidentiality: who can read the data and the prompts.
            Sovereign AI is a statement about control: who decides how the system behaves, under
            whose jurisdiction it operates, and whether any single supplier can change or withdraw
            it. A system can be private and not sovereign — a managed service with strong isolation
            guarantees, where the provider still controls the model, the terms and the roadmap. It
            can also be sovereign without being fully on-premise, if the components that hold the
            data and the audit record are under your control and the rest is replaceable. The
            useful question is not which label applies, but which of the three deployment models
            below the organisation actually needs.
          </p>
        }
        sources={[SOURCES.gdpr, SOURCES.aiAct]}
        related={[
          {
            label: "Nexus MDS Core",
            href: "/platform",
            note: "the self-hosted platform these models are implemented on",
          },
          {
            label: "Federfarma Lombarda — sovereign hybrid in production",
            href: "/case-studies/federfarma",
            note: "the reference implementation of the second model",
          },
          {
            label: "Why on-premise AI is not a step backward",
            href: "/research/on-premise-ai",
            note: "the longer architectural argument",
          },
          {
            label: "Fractional AI CTO",
            href: "/services/fractional-cto",
            note: "where this decision usually gets taken",
          },
        ]}
        ctaTitle="Which model does your case actually need?"
        ctaSubtitle="The answer depends on your threat model and your regulatory exposure, not on a preference. That is a conversation worth having before the procurement, not after."
      >
        <AnswerSection id="two-different-claims" title="Two different claims about the same system">
          <p>
            &ldquo;Private&rdquo; answers a confidentiality question. It says that your prompts,
            your documents and your outputs are not visible to other tenants, are not used to train
            a shared model, and are held under a processing agreement that says so. It is a real
            property, and for many use cases it is enough.
          </p>
          <p>
            &ldquo;Sovereign&rdquo; answers a control question, and it has three parts that are
            often conflated. <strong className="text-[#E6EDF3]">Jurisdiction</strong>: which legal
            system can compel access to the data, which is not always the country the servers sit
            in. <strong className="text-[#E6EDF3]">Operational control</strong>: who can change the
            model, the filters or the terms, and on what notice.{" "}
            <strong className="text-[#E6EDF3]">Substitutability</strong>: whether a component can be
            replaced without rebuilding the system, which is what makes the first two enforceable
            rather than contractual.
          </p>
          <p>
            The distinction matters commercially. A supplier can be entirely truthful about privacy
            and still leave you with no answer when the model behind their endpoint is deprecated,
            re-tuned, or repriced — and in a regulated environment, a change in model behaviour is
            a change in your system&apos;s behaviour that you have to be able to detect and explain.
          </p>
        </AnswerSection>

        <AnswerSection id="three-models" title="The three deployment models, named precisely">
          <p>
            This is the taxonomy used across this site. It exists because
            &ldquo;sovereign&rdquo; on its own has become a marketing word, and a specification has
            to be more precise than a word.
          </p>
          <dl className="space-y-5">
            <div className="border-l-2 border-[#00B4D8] pl-5">
              <dt className="font-semibold text-[#E6EDF3] mb-1">Fully local AI</dt>
              <dd className="text-base">
                Indexing, retrieval, identity, audit and generation all run on infrastructure the
                organisation controls. Nothing about an answer leaves the perimeter. The cost is
                hardware and model choice: you get the models you can host, at the throughput your
                GPUs allow.
              </dd>
            </div>
            <div className="border-l-2 border-[#00B4D8] pl-5">
              <dt className="font-semibold text-[#E6EDF3] mb-1">Sovereign hybrid AI</dt>
              <dd className="text-base">
                Data, retrieval, reconciliation, identity and audit stay local; only the final
                generation step calls an external inference endpoint, under policy, with the
                retrieved context passed to it and the record of the call kept locally. The
                component is replaceable: switching provider changes one integration, not the
                architecture. This is the model in production at Federfarma Lombarda.
              </dd>
            </div>
            <div className="border-l-2 border-[#00B4D8] pl-5">
              <dt className="font-semibold text-[#E6EDF3] mb-1">EU private inference</dt>
              <dd className="text-base">
                Inference on private or EU-resident infrastructure with explicitly defined
                residency, retention and access terms. Appropriate where the binding constraint is
                jurisdiction and processing terms rather than physical custody of the hardware.
              </dd>
            </div>
          </dl>
          <p>
            Two things follow from stating it this way. First, the honest description of a hybrid
            system is not &ldquo;fully on-premise&rdquo; and not &ldquo;data never leaves the
            perimeter&rdquo; — the retrieved context does, and saying otherwise is the kind of claim
            that collapses in an audit. Second, the interesting engineering is in the boundary: what
            is sent, what is stripped before sending, and what is recorded about the exchange.
          </p>
        </AnswerSection>

        <AnswerSection id="how-to-choose" title="How to choose between them">
          <p>Five criteria decide it, in roughly this order:</p>
          <ul className="space-y-3 text-base list-none">
            {[
              ["Data class", "Special-category personal data under the GDPR, or data whose disclosure is itself the incident, pushes towards fully local — or towards an architecture where that class of data never reaches the generation step."],
              ["Threat model", "Who are you actually defending against: another tenant, an opportunistic attacker, a supplier's own staff, or a foreign legal process? The last one is a jurisdiction question and no amount of encryption at rest answers it."],
              ["Regulatory exposure", "What you will have to demonstrate, to whom, and how long after the fact. This determines the audit surface, which is usually a stronger constraint than the inference topology."],
              ["Capability requirement", "If the task genuinely needs a frontier model, a fully local deployment is a decision to accept less capability. Sometimes that is correct; it should be a decision, not a discovery."],
              ["Total cost and operational reality", "GPUs, power, redundancy and the people to run them. An architecture nobody can operate at 3 a.m. is not sovereign, it is unavailable."],
            ].map(([k, v]) => (
              <li key={k} className="flex gap-3">
                <span className="text-[#00B4D8] mt-1.5 flex-shrink-0">—</span>
                <span>
                  <strong className="text-[#E6EDF3]">{k}.</strong> {v}
                </span>
              </li>
            ))}
          </ul>
        </AnswerSection>

        <AnswerSection id="claims-to-distrust" title="Claims worth testing before you rely on them">
          <p>
            <strong className="text-[#E6EDF3]">&ldquo;Sovereign cloud.&rdquo;</strong> Ask which of
            the three parts is being claimed. Datacentre location alone is the weakest of them, and
            it is the one most often meant.
          </p>
          <p>
            <strong className="text-[#E6EDF3]">&ldquo;Your data never leaves.&rdquo;</strong> Ask
            what counts as data. Prompts, retrieved context, telemetry, error payloads and support
            snapshots all leave systems that were described this way.
          </p>
          <p>
            <strong className="text-[#E6EDF3]">&ldquo;GDPR compliant by design.&rdquo;</strong>{" "}
            Compliance is a property of a processing operation in its organisational context, not a
            product attribute a vendor can confer. What an architecture can do is carry the controls
            — minimisation at ingestion, retention limits, access separation, an audit record — and
            let the controller demonstrate the rest. That distinction is the whole of the work in{" "}
            <Link
              href="/services/governance-advisory"
              className="text-[#00B4D8] hover:text-[#E6EDF3]"
            >
              governance and compliance advisory
            </Link>
            .
          </p>
        </AnswerSection>
      </AnswerPageLayout>
    </>
  );
}
