import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About | Dynamics Consulting",
  description:
    "Dynamics Consulting is a Milan-based AI and technology consultancy founded by Corrado Patierno. We build sovereign, on-premise AI infrastructure for healthcare, pharma, and enterprise clients across Italy and Europe.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/about" },
};

const values = [
  {
    title: "Outcomes over outputs",
    body: "We measure success by business impact, not by lines of code or slide decks. Every engagement starts with a clear definition of what success looks like — and ends when it is achieved.",
  },
  {
    title: "Radical transparency",
    body: "We tell clients what they need to hear. If a simpler solution exists, we say so. If a timeline is unrealistic, we say so. Long-term trust is built on honesty, not on telling people what they want to hear.",
  },
  {
    title: "Sovereign AI by default",
    body: "We believe organisations in regulated industries have the right to run AI on their own infrastructure, under their own governance, without dependency on hyperscalers. This conviction shapes every architecture we design.",
  },
  {
    title: "Deep specialisation",
    body: "We work with a selective network of proven specialists rather than growing a large generalist team. Every project gets the right expertise — not the next available consultant.",
  },
];

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Built on conviction, not convenience
            </h1>
            <p className="text-lg text-[#7D8FA3] leading-relaxed">
              Dynamics Consulting was founded with a clear conviction: organisations in healthcare,
              pharma, and regulated industries deserve AI infrastructure they own, govern, and trust —
              not rented black boxes running on someone else&apos;s cloud.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Our story
            </p>
            <div className="space-y-5 text-[#7D8FA3] leading-relaxed text-lg">
              <p>
                Corrado Patierno founded Dynamics Consulting after years leading complex technology
                programmes for major enterprises including ATOS, Avanade, and AESYS — working
                across ERP, data platforms, cloud, and enterprise integration in sectors where
                reliability and compliance are non-negotiable.
              </p>
              <p>
                That experience made one thing clear: the real constraint for organisations in
                regulated industries was never capability — it was trust. Trust in the data, trust
                in the system, trust in who controls it.
              </p>
              <p>
                In parallel, Corrado developed a body of thought on operational agility and
                technology-driven transformation, culminating in the publication of{" "}
                <span className="text-[#E6EDF3] font-semibold">Logistica Fluida</span> — a book
                on fluid logistics and adaptive operations that became a reference point for
                Italian professionals navigating supply chain and digital transformation.
              </p>
              <p>
                This thinking shaped Nexus MDS Core: a modular, on-premise AI infrastructure
                platform purpose-built for the Italian healthcare and pharma mid-market. Today,
                Nexus powers production deployments at clients including Federfarma Lombardia and
                CureSicure — organisations that need sovereign AI, not SaaS dependencies.
              </p>
              <p>
                We work with a curated network of senior specialists across AI engineering, data
                architecture, cloud infrastructure, and enterprise integration. Every engagement
                is led directly by Corrado, with full accountability from brief to delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 px-6 bg-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-10">
              Leadership
            </p>
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4D8] to-[#0D47A1] flex items-center justify-center text-white font-bold text-xl shrink-0">
                CP
              </div>
              <div>
                <div className="text-xl font-bold text-[#E6EDF3] mb-1">Corrado Patierno</div>
                <div className="text-sm text-[#00B4D8] mb-4">Founder &amp; CEO</div>
                <p className="text-[#7D8FA3] leading-relaxed">
                  Technology consultant, AI architect, and author of{" "}
                  <em>Logistica Fluida</em>. Corrado has led enterprise technology programmes for
                  clients including ATOS, Avanade, AESYS, illimity, and Banco Mediolanum.
                  He specialises in on-premise AI infrastructure, data platforms, and enterprise
                  integration for healthcare, pharma, and regulated industries. Based in Milan.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["AI Infrastructure", "Data Platforms", "Enterprise Integration", "Cloud & Kubernetes", "Healthcare & Pharma"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono font-semibold px-3 py-1 rounded-full border border-[#30363D] text-[#7D8FA3]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              How we work
            </p>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">
              A principal-led firm, not a staffing model
            </h2>
            <p className="text-[#7D8FA3] leading-relaxed text-lg mb-6">
              Every Dynamics Consulting engagement is led directly by Corrado Patierno.
              Depending on scope, we bring in a curated network of senior independent specialists —
              AI engineers, data architects, cloud engineers, and integration experts — each with
              production track records in regulated industries.
            </p>
            <p className="text-[#7D8FA3] leading-relaxed text-lg">
              This model means clients never get handed off to juniors after the sale.
              The person who scopes the work is the person who delivers it.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 bg-[#161B22]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-3">
                Principles
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#E6EDF3]">Our values</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-[#0D1117] rounded-2xl p-8 border border-[#30363D]"
                >
                  <h3 className="text-lg font-bold text-[#E6EDF3] mb-3">{v.title}</h3>
                  <p className="text-[#7D8FA3] leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
