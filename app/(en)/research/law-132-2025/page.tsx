import type { Metadata } from "next";
import { alternatesFor } from "@/lib/i18n-routes";
import Link from "next/link";
import { RESEARCH_ARTICLES } from "@/app/research-articles";
import { articleSchema, breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import { NEXUS_INFERENCE_EN } from "@/lib/nexus";

export const metadata: Metadata = {
  title: "Law 132/2025 and AI in Healthcare: What Changes",
  description:
    "An analysis of Law no. 132 of 23 September 2025, Italy's first comprehensive law on artificial intelligence. Implications for healthcare and pharmaceutical organisations.",
  alternates: alternatesFor("/research/law-132-2025"),
};

const article = RESEARCH_ARTICLES["law-132-2025"];
const ARTICLE_URL = "https://www.dynamicsconsulting.it/research/law-132-2025";

const schema = [
  articleSchema({
    url: ARTICLE_URL,
    type: article.type,
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: "2026-10-29",
    inLanguage: article.inLanguage,
    articleSection: article.section,
    keywords: article.keywords,
  }),
  breadcrumbSchema(ARTICLE_URL, [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: article.headline },
  ]),
];

export default function Law132Article() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <article>
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link href="/research" className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1">
              ← All articles
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <TechBadge label="AI Governance" variant="cyan" />
              <time dateTime="2025-10" className="text-xs text-[#7D8FA3]">
                {article.dateLabel}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Law 132/2025 and AI in healthcare: what changes for hospitals, pharmacies and pharmaceutical companies
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              Law no. 132 of 23 September 2025 (Italy&apos;s AI law) is the country&apos;s first
              comprehensive legislation on artificial intelligence. For healthcare and
              pharmaceutical organisations, it sets rules on governance, clinical decision-making
              and secondary use of data. Understanding the operational implications is
              now a priority for anyone planning or already running AI projects.
            </p>
            <p className="text-sm text-[#7D8FA3] mt-4">
              By{" "}
              <Link href="/about" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                Corrado Patierno
              </Link>
              {" · "}
              <Link href="/it/ricerca/legge-132-2025" lang="it" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                Translated from the Italian original
              </Link>
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-[#7D8FA3] text-lg leading-relaxed">
            <aside className="rounded-lg border border-[#30363D] bg-[#161B22] px-6 py-5 text-base leading-relaxed">
              <p className="text-sm font-semibold text-[#E6EDF3] mb-2">Update — 29 October 2026</p>
              <p>
                This article was published in October 2025. We have corrected it where it was wrong
                or out of date: its relationship with the AI Act, the date it came into force, the
                competent authorities, who classifies high-risk systems, data residency, training
                and the AI Act&apos;s dates.
              </p>
              <p className="mt-3">
                Since then Italy has adopted{" "}
                <Link href="/it/normativa/dlgs-160-2026" lang="it" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Legislative Decree 160/2026
                </Link>{" "}
                (in Italian; in force since 30 September 2026: new Art. 437-bis of the Criminal
                Code, Art. 25-vicies of Legislative Decree 231/2001, civil liability with a presumed
                causal link and orders to disclose logs) and{" "}
                <Link href="/it/normativa/dlgs-179-2026" lang="it" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Legislative Decree 179/2026
                </Link>{" "}
                (in Italian; in force since 23 October 2026: authorities, penalties, no employment
                decisions based solely on automated processing, training), and the EU&apos;s Digital
                Omnibus, Regulation (EU) 2026/1744, has moved the high-risk dates. Our updated page
                on the law is{" "}
                <Link href="/it/normativa/legge-132-2025" lang="it" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  Law 132/2025
                </Link>{" "}
                (in Italian).
              </p>
            </aside>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">What Law 132/2025 provides</h2>
              <p>
                Law 132/2025 does not transpose the European AI Regulation (AI Act, Regulation (EU)
                2024/1689), which like any regulation applies directly: it accompanies and
                supplements it within the Italian legal framework, without adding obligations
                beyond the regulation (Art. 1(2), Art. 3(5)). For AI in healthcare it sets its own
                principles (Arts. 7-10); classifying systems as high-risk remains a matter for the
                AI Act (Art. 6 and Annexes I and III), not the Italian law.
              </p>
              <p className="mt-4">
                For healthcare organisations with high-risk systems, the AI Act&apos;s key points
                include: documenting the entire lifecycle of the AI system (from design to
                deployment), keeping risk management up to date, and effective human oversight of
                the outputs. The Italian law adds that in clinical settings the decision always
                rests with the doctor (Art. 7(5)).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Implications for those buying AI in healthcare</h2>
              <p>
                For hospitals, local health authorities (ASL), pharmacy chains and pharmaceutical
                companies, Law 132/2025, read together with the AI Act and GDPR, raises three
                operational questions:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-[#7D8FA3]">
                <li>
                  <strong className="text-[#E6EDF3]">Data residency, a choice rather than an obligation:</strong>{" "}
                  the law does not require data to reside in Italy or the EU. The only related
                  provision is a preference criterion for public-sector e-procurement platforms (Art.
                  5(1)(d)). GDPR rules on transfers outside the EU still apply: you still need to know,
                  and document, where health data is processed.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Output governance:</strong> in a clinical setting
                  AI is a support and the decision stays with the doctor (Art. 7); for high-risk
                  systems the AI Act requires logs (Art. 12) and human oversight (Art. 14). A
                  disclaimer is not enough: you need an architecture that implements these controls
                  by design.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Secondary use of data:</strong> Art. 8 allows
                  research to make secondary use of data without direct identifiers without new
                  consent, after notifying the Garante; a legal basis and documented anonymisation or
                  pseudonymisation measures are still required.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">How Nexus MDS Core addresses these requirements</h2>
              <p>
                Nexus MDS Core was designed with these regulatory constraints as architectural
                requirements, not as features added after the fact. In practice:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-[#7D8FA3]">
                <li>
                  <strong className="text-[#E6EDF3]">Controlled perimeter:</strong>{" "}
                  {NEXUS_INFERENCE_EN} No hyperscaler lock-in.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">End-to-end audit trail:</strong> every interaction
                  with the system — query, response, source used, model invoked — is recorded in an
                  tamper-evident log, available for regulatory inspections.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Pipeline designed around GDPR requirements:</strong> anonymisation
                  of personal data at ingestion, encryption at rest and in transit, Zero-Trust
                  authentication with Keycloak OIDC/PKCE.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Grounded RAG:</strong> the RAG system uses only
                  curated and verified document sources, reducing the risk of hallucination on
                  clinical content.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Timeline and deadlines</h2>
              <p>
                Law 132/2025 lands in an already crowded regulatory calendar. Healthcare and
                pharmaceutical organisations have to find their way through overlapping deadlines:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-[#7D8FA3]">
                <li>
                  <strong className="text-[#E6EDF3]">February 2025:</strong> the AI Act&apos;s outright
                  prohibitions take effect (prohibited AI practices, Art. 5).
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">August 2025:</strong> compliance obligations
                  for general-purpose AI (GPAI) models under the AI Act (Arts. 51-56).
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">September-October 2025:</strong> Law 132/2025 is
                  published in the Gazzetta Ufficiale (Italy&apos;s official journal) no. 223 of 25
                  September 2025, and comes into force on 10 October 2025.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">December 2027:</strong> the obligations for
                  high-risk AI systems under Annex III of the AI Act apply, including some healthcare
                  uses such as emergency triage (from 2 December 2027: Regulation (EU) 2026/1744
                  moved the date, previously August 2026).
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">August 2028:</strong> deadline for compliance
                  with the AI Act&apos;s requirements for AI systems embedded in medical devices and
                  in vitro diagnostics (Annex I, from 2 August 2028 after Regulation (EU) 2026/1744).
                </li>
              </ul>
              <p className="mt-4">
                The message for healthcare organisations is clear: even with the dates moved, the
                window to adapt is measured in months, not years. Anyone starting an AI project in healthcare today has to design it for
                compliance from the outset, not plan to retrofit it later.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">How it compares with the European framework</h2>
              <p>
                Law 132/2025 does not replace the AI Act — it embeds it in the Italian context.
                The distinction matters: the AI Act sets the general framework (risk classification,
                obligations for providers and deployers, governance of GPAI models), while the
                Italian law adds national specifics.
              </p>
              <p className="mt-4">
                The main Italian additions concern:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-[#7D8FA3]">
                <li>
                  <strong className="text-[#E6EDF3]">National authorities:</strong> AgID (Agenzia per
                  l&apos;Italia Digitale, the Agency for Digital Italy) is the notifying authority and
                  ACN (Agenzia per la Cybersicurezza Nazionale, the National Cybersecurity Agency) the
                  market surveillance authority and single point of contact (Art. 20); the Bank of
                  Italy, CONSOB and IVASS remain competent in their sectors. The Garante Privacy (the
                  Italian data protection authority) keeps its powers but is not an AI authority under
                  the law: Legislative Decree 179/2026 gives it supervision only for Art. 74(8) of
                  the AI Act.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Public healthcare:</strong> principles for AI
                  systems used in the SSN (Servizio Sanitario Nazionale, Italy&apos;s national health
                  service): the decision rests with the doctor, patients are informed, systems and
                  data are checked periodically (Art. 7), and an AI platform run by AGENAS supports
                  community care (Art. 10).
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Professional training:</strong> the AI Act
                  already provides for AI literacy measures (Art. 4, softened by Regulation (EU)
                  2026/1744). The Italian law delegates to the Government; the concrete obligations,
                  such as an AI share of continuing medical education (ECM) for healthcare staff,
                  arrive with Legislative Decree 179/2026.
                </li>
              </ul>
              <p className="mt-4">
                For pharmaceutical companies, the combination of the AI Act, Law 132/2025, GDPR and
                NIS2 creates a regulatory framework that makes{" "}
                <Link href="/sovereign-ai-pharma" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  sovereign AI
                </Link>{" "}
                infrastructure the most direct way to know, and show, where data runs and who
                controls it. None of these rules requires data residency; but organisations on public
                cloud that do not know where health data is processed struggle to document transfers
                and controls. For more on the specific implications for
                healthcare, see our focus on{" "}
                <Link href="/ai-on-premise-healthcare" className="text-[#00B4D8] underline hover:text-[#E6EDF3]">
                  on-premise AI for healthcare
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Conclusion</h2>
              <p>
                Law 132/2025 is not an obstacle to AI innovation in healthcare — it is a framework
                that makes explicit requirements that AI architectures should have met anyway. For
                organisations evaluating AI platforms, the question to ask is no longer &quot;which
                language model should we use&quot; but &quot;which infrastructure lets us use it in a
                compliant, sovereign and verifiable way&quot;.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {["AI Act", "Law 132/2025", "Healthcare AI", "GDPR", "Italy"].map((tag) => (
                <TechBadge key={tag} label={tag} variant="cyan" />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="What changes for your AI project?"
          subtitle="Let's talk about what the law asks of your system, and how Nexus MDS Core carries the controls that follow from it."
          ctaLabel="Request a Nexus demo →"
          ctaHref="/contact"
        />
        </article>
      </main>
      <Footer />
    </>
  );
}
