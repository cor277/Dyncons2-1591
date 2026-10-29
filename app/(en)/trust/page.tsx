import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/i18n-routes";
import { OG_IMAGE } from "@/app/og";
import { ORG_ID, NEXUS_ID, CEPF_ID, WEBSITE_ID } from "@/app/schema-org";
import { breadcrumbSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";

const PAGE_URL = "https://www.dynamicsconsulting.it/trust";
const TITLE = "Trust — certifications, sub-processors, audit verification";
const DESCRIPTION =
  "What Dynamics Consulting and Nexus MDS Core can show and how to check it: no certifications held, controls mapped with CEPF, the sub-processors of the website and of Nexus installations, and how the hash-chained audit record is verified.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/trust"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    about: [{ "@id": ORG_ID }, { "@id": NEXUS_ID }, { "@id": CEPF_ID }],
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  breadcrumbSchema(PAGE_URL, [{ name: "Home", path: "/" }, { name: "Trust" }]),
];

const websiteProcessors = [
  {
    name: "Resend",
    purpose: "Email delivery: sending contact-form notification emails",
    location: "USA",
  },
  {
    name: "Vercel",
    purpose: "Cloud hosting: website infrastructure and edge delivery",
    location: "EU / USA",
  },
  {
    name: "AI inference endpoint",
    purpose: "Generating the answers of the site’s AI Assistant, only if you enable it",
    location: "European Union",
  },
];

const nexusExternal = [
  {
    name: "Nebius AI — EU endpoint",
    role: "Generation of the final answer",
    detail:
      "The default generation endpoint, in an EU datacentre, chosen to keep hardware costs down. It is replaceable: another provider can take its place, and on a GPU server the local model (llama.cpp) runs the same step, so the whole chain stays inside the perimeter.",
  },
  {
    name: "HyperLog",
    role: "External operational logging",
    detail:
      "Receives the gateway’s operational logs only, proxied through the gateway. No prompts and no model answers.",
  },
  {
    name: "OpenAI, Anthropic, Gemini",
    role: "Optional model providers",
    detail:
      "Off unless the client chooses to enable them. When enabled they are reached through the same gateway routes and recorded in the audit service like any other model call; direct calls from the applications are blocked at DNS level.",
  },
];

const linkCls = "text-[#00B4D8] underline hover:text-[#E6EDF3]";

export default function TrustPage() {
  return (
    <>
      <JsonLd data={schema} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Trust
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              What is certified, what is mapped, and how to check it
            </h1>
            <p className="text-[#7D8FA3] text-lg leading-relaxed">
              This page sets out what Dynamics Consulting can show about itself and about Nexus MDS
              Core, and how a client or an auditor can check it, without having to take anyone’s
              word for it.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-16 text-[#7D8FA3] text-lg leading-relaxed">
            {/* Certifications */}
            <div className="space-y-4">
              <SectionHeader eyebrow="Certifications" title="None held" />
              <p className="pt-2">
                Neither Dynamics Consulting nor Nexus MDS Core holds a certification of any kind.
              </p>
              <p>
                Conformity with a standard or a regulation is established by the assessment that
                standard or regulation provides for — a certification audit, a conformity
                assessment procedure, a supervisory authority — not by the supplier’s own statement.
                When a page on this site says a control is mapped on a requirement, that is exactly
                what it means: mapped, not certified.
              </p>
            </div>

            {/* Mapping */}
            <div className="space-y-4">
              <SectionHeader eyebrow="Method" title="What is mapped, and how" />
              <p className="pt-2">
                Controls are mapped on the GDPR, the EU AI Act, ISO/IEC 27001:2022, the revised
                Product Liability Directive (PLD), NIS2 and other frameworks with the{" "}
                <Link href="/cepf" className={linkCls}>
                  Compliance-Epistemic Project Framework (CEPF)
                </Link>
                . The mapping states, for each requirement, which control answers it and which
                evidence shows that it is in place.
              </p>
              <p className="text-base font-mono text-[#E6EDF3] border-l-2 border-[#00B4D8] pl-4">
                CEPF v7 — 19 frameworks, 247 requirements, 24 cross-framework overlap groups, 695
                document templates — snapshot July 2026
              </p>
              <p>The catalogue itself is not published.</p>
            </div>

            {/* Sub-processors */}
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Sub-processors"
                title="Who else touches the data"
                subtitle="Two different things, kept apart: this website, and the Nexus MDS Core installations that run at clients."
              />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">This website</h3>
                <p>
                  As listed in the{" "}
                  <Link href="/privacy" className={linkCls}>
                    privacy policy
                  </Link>
                  , all bound by data processing agreements:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-base border border-[#30363D]">
                    <thead className="bg-[#161B22] text-[#E6EDF3]">
                      <tr>
                        <th className="text-left p-3 border-b border-[#30363D]">Processor</th>
                        <th className="text-left p-3 border-b border-[#30363D]">Purpose</th>
                        <th className="text-left p-3 border-b border-[#30363D]">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {websiteProcessors.map((p) => (
                        <tr key={p.name} className="border-b border-[#21262D]">
                          <td className="p-3 text-[#E6EDF3]">{p.name}</td>
                          <td className="p-3">{p.purpose}</td>
                          <td className="p-3">{p.location}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-base">
                  Transfers to the United States rely on the EU–US Data Privacy Framework or on
                  Standard Contractual Clauses, as described in the privacy policy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  Nexus MDS Core installations at clients
                </h3>
                <p>
                  Nexus MDS Core runs on the client’s infrastructure. Indexing, retrieval, identity
                  and audit stay inside the client’s perimeter, behind a single gateway. The
                  components outside it are these:
                </p>
                <ul className="space-y-4">
                  {nexusExternal.map((e) => (
                    <li
                      key={e.name}
                      className="bg-[#161B22] border border-[#30363D] rounded-xl p-6"
                    >
                      <p className="text-[#E6EDF3] font-semibold">{e.name}</p>
                      <p className="text-sm text-[#00B4D8] mb-2">{e.role}</p>
                      <p className="text-base">{e.detail}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-base">
                  The full map, service by service, is on the{" "}
                  <Link href="/platform" className={linkCls}>
                    platform page
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Audit chain */}
            <div className="space-y-4">
              <SectionHeader eyebrow="Audit" title="How the hash chain is verified" />
              <p className="pt-2">
                Every model call, local or external, passes through the gateway’s AI routes, which
                hand a record of it to the audit service. Each record is encrypted and chained to
                the one before it by its hash: altering, removing or reordering a record breaks the
                chain from that point on, and the break shows.
              </p>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong className="text-[#E6EDF3]">On demand.</strong> The audit service has a
                  verification endpoint: given a range of records, it recomputes the chain over
                  them and returns whether it is intact or altered.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Independently.</strong> A separate
                  command-line tool, used for restores, verifies the chain from the stored records
                  without relying on the running service to vouch for itself.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Over time.</strong> Records are archived
                  monthly. Each archive comes with a manifest that links it to the active chain, so
                  the chain can be followed from the archive into the live records without a gap.
                </li>
              </ul>
              <p>
                The verification endpoint lives inside each installation and is reachable only
                there; it is not a public service.
              </p>
            </div>

            {/* Security reports */}
            <div className="space-y-4">
              <SectionHeader eyebrow="Security" title="Reporting a security issue" />
              <p className="pt-2">
                If you find a vulnerability in this website or in Nexus MDS Core, write to{" "}
                <a href="mailto:info@dynamicsconsulting.it" className={linkCls}>
                  info@dynamicsconsulting.it
                </a>{" "}
                with what you found, where, and how to reproduce it. For questions about personal
                data, write to{" "}
                <a href="mailto:privacy@dynamicsconsulting.it" className={linkCls}>
                  privacy@dynamicsconsulting.it
                </a>
                .
              </p>
              <div className="pt-4">
                <CTAButton label="Contact →" href="/contact" variant="secondary" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
