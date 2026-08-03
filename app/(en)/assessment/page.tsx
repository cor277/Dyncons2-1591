import type { Metadata } from "next";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import Image from "next/image";
import Link from "next/link";
import { AssessmentForm } from "@/components/assessment/AssessmentForm";

const EN_URL = "https://www.dynamicsconsulting.it/assessment";
const IT_URL = "https://www.dynamicsconsulting.it/it/assessment";

export const metadata: Metadata = {
  title: "Exposure assessment — PLD 2024 and the AI Act",
  description:
    "From 9 December 2026 the European product liability directive treats software as a product. Three days of work to establish where your supplier’s liability stops and yours begins.",
  alternates: {
    canonical: EN_URL,
    languages: {
      en: EN_URL,
      it: IT_URL,
      "x-default": EN_URL,
    },
  },
  openGraph: {
    images: OG_IMAGE,
    title: "Exposure assessment — PLD 2024 and the AI Act",
    description:
      "From 9 December 2026 the European product liability directive treats software as a product. Three days of work to establish where your supplier’s liability stops and yours begins.",
    url: EN_URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "Exposure assessment — PLD 2024 and the AI Act",
    description:
      "From 9 December 2026 the European product liability directive treats software as a product. Three days of work to establish where your supplier’s liability stops and yours begins.",
  },
};

const included = [
  {
    t: "Liability perimeter.",
    b: "Who answers for what, on the basis of the actual contracts and not of commercial statements. Includes analysis of limitation clauses and their effective value against product liability rules.",
  },
  {
    t: "Applicable AI Act obligations.",
    b: "Classification of the system, obligations as a deployer, transparency obligations, staff AI literacy. With the actual deadlines and their status.",
  },
  {
    t: "Composition of the supply.",
    b: "Third-party components, licences, model terms of use, points where declared ownership does not match contractual ownership.",
  },
  {
    t: "Crossing points.",
    b: "Where the conclusions touch obligations already held elsewhere — network security, operational continuity, data protection — with an indication of what to hand to whoever owns them. This assessment does not evaluate those regimes: it flags where they intersect.",
  },
  {
    t: "Sequence of action.",
    b: "What must be done, in what order, with what urgency. Distinguishing what is already overdue from what has a future date.",
  },
];

export default function AssessmentPage() {
  return (
    <div className="bg-[#0D1117] min-h-screen text-[#E6EDF3]">
      {/* Header — logo only, no navigation */}
      <header className="border-b border-[#21262D]">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <Link
            href="/"
            aria-label="Dynamics Consulting — home"
            className="inline-flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Dynamics Consulting"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-syne text-[#E6EDF3] font-bold text-xs tracking-[0.15em] uppercase leading-none">
                DYNAMICS
              </p>
              <p className="font-syne text-[#00B4D8] group-hover:text-[#00C8F0] font-bold text-xs tracking-[0.15em] uppercase leading-none mt-0.5 transition-colors">
                CONSULTING
              </p>
            </div>
          </Link>
        </div>
      </header>

      <main>
        {/* Opening */}
        <section className="px-6 pt-16 pb-14">
          <div className="max-w-2xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-5">
              Exposure assessment — PLD 2024 and the AI Act
            </p>
            <h1 className="font-syne text-3xl md:text-[2.6rem] font-extrabold leading-[1.15] mb-6">
              On 9 December 2026, who answers for defective software changes.
            </h1>
            <p className="text-[#9BA8B9] text-lg leading-relaxed">
              The new European product liability directive includes software among products. From
              that date, a defect is no longer merely a breach of contract. This assessment
              establishes, for your organisation, where your supplier’s liability stops and yours
              begins.
            </p>
            <p className="mt-5 text-sm">
              <a
                href="/it/assessment"
                hrefLang="it"
                lang="it"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                Questa pagina è disponibile in italiano →
              </a>
            </p>
          </div>
        </section>

        <div className="max-w-2xl mx-auto px-6 space-y-14 pb-8 text-[#7D8FA3] text-lg leading-relaxed">
          {/* The problem */}
          <section>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">The problem</h2>
            <p>
              If your organisation has bought, or is buying, a system that incorporates artificial
              intelligence components, there are three questions you probably cannot answer today.
            </p>
            <p className="mt-4">
              Who answers if the system produces an output that causes harm — the supplier, the
              integrator, or you who put it into operation.
            </p>
            <p className="mt-4">
              Which AI Act obligations apply to your organisation as a deployer, regardless of who
              built the system.
            </p>
            <p className="mt-4">
              What exactly the platform you bought contains: which third-party components, under
              which licences, with which language model and under what terms of use.
            </p>
            <p className="mt-4">
              None of these questions is answered in the contract you signed. Almost never.
            </p>
          </section>

          {/* What it covers */}
          <section>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">What it covers</h2>
            <p>
              Three days of work, on documentation you provide: contracts, architecture, supply
              chain, procedures in place.
            </p>
            <div className="mt-6 space-y-5">
              {included.map((c) => (
                <p key={c.t}>
                  <strong className="text-[#E6EDF3]">{c.t}</strong> {c.b}
                </p>
              ))}
            </div>
          </section>

          {/* What you receive */}
          <section>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">What you receive</h2>
            <p>A document. Not a presentation, not a checklist.</p>
            <p className="mt-4">
              It is written to be read by a board and used by a lawyer. Every statement is
              classified: what is verified against the documents, what is inferred, what requires a
              finding beyond this scope.
            </p>
            <p className="mt-4">
              The document is signed. Whoever signs it answers professionally for what it says.
            </p>
          </section>

          {/* Terms */}
          <section>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">Terms</h2>
            <dl className="border-t border-[#21262D]">
              {[
                ["Duration", "3 days."],
                ["Fee", "EUR 4,500 plus VAT."],
                ["Delivery", "within 15 working days of receiving the documentation."],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-col sm:flex-row sm:gap-6 py-3 border-b border-[#21262D]"
                >
                  <dt className="text-[#E6EDF3] font-semibold sm:w-40 flex-shrink-0">{k}:</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6">
              If an implementation or ongoing advisory engagement opens within 90 days of delivery,
              the assessment fee is credited in full.
            </p>
          </section>

          {/* Who signs */}
          <section>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">Who signs</h2>
            <p>
              Corrado Patierno. Twenty-five years of enterprise systems architecture in regulated
              and business-critical environments.
            </p>
            <p className="mt-4">
              Innovation Manager certified by the Italian Ministry of Enterprise. Board member of
              ENTD, the Italian National Agency for Digital Transformation, from 2020 to 2025.
              Speaker at the Italian Chamber of Deputies on artificial intelligence and process
              transformation.
            </p>
            <p className="mt-4">
              Author of <em>Logistica Fluida</em> (2026) and of the first Italian technical manual
              on RFID (Duke Editore, 2006).
            </p>
            <p className="mt-4">Designs and maintains two proprietary tools:</p>
            <p className="mt-4">
              <strong className="text-[#E6EDF3]">Nexus MDS Core</strong> — an artificial
              intelligence platform for regulated environments, sixteen orchestrated services, in
              production at Federfarma Lombarda, the association of pharmacy owners of the provinces
              of Milan, Lodi and Monza Brianza: over one thousand pharmacies, around two thousand
              queries per day, an explicit regulatory version chain, personal data never indexed.
            </p>
            <p className="mt-4">
              <strong className="text-[#E6EDF3]">CEPF</strong> — a regulatory crossing catalogue,
              version 7, twenty-one regulatory regimes mapped onto their operational obligations. It
              is the instrument this assessment is based on.
            </p>
          </section>
        </div>

        {/* Form */}
        <section className="px-6 py-14 border-y border-[#21262D] bg-[#11161D] mt-14">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              Request the assessment
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              I reply personally within two working days. If the first conversation shows that the
              assessment is not the right instrument for your situation, I will tell you.
            </p>
            <AssessmentForm locale="en" />
          </div>
        </section>

        {/* Close */}
        <section className="px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-[#9BA8B9] text-lg leading-relaxed">
              Exposure is not assessed when the claim arrives. It is assessed before, while there is
              still time to act.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#21262D]">
        <div className="max-w-2xl mx-auto px-6 py-10 text-sm text-[#7D8FA3] space-y-1">
          <p className="text-[#E6EDF3] font-semibold">Dynamics Consulting</p>
          <p>
            <a
              href="mailto:info@dynamicsconsulting.it"
              className="hover:text-[#00B4D8] transition-colors"
            >
              info@dynamicsconsulting.it
            </a>
          </p>
          <p>
            <a href="tel:+393407253246" className="hover:text-[#00B4D8] transition-colors">
              +39 340 725 3246
            </a>
          </p>
          <p className="pt-3">
            <a
              href="/privacy"
              target="_blank"
              rel="noopener"
              className="hover:text-[#00B4D8] transition-colors underline"
            >
              Privacy notice
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
