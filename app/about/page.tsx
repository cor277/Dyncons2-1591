import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About | Dynamics Consulting",
  description:
    "Dynamics Consulting is a Milan-based technology consultancy specialising in AI, cloud, data platforms, and enterprise systems. We work at the intersection of deep technical expertise and pragmatic business thinking.",
  alternates: { canonical: "https://dynamicsconsulting.it/about" },
};

const values = [
  {
    title: "Outcomes over outputs",
    body: "We measure our success by the business impact we create, not the lines of code we write or the slides we produce. Every engagement starts with defining what success looks like.",
  },
  {
    title: "Radical transparency",
    body: "We tell clients what they need to hear, not what they want to hear. If a simpler solution exists, we say so. If a timeline is unrealistic, we say so. Trust requires honesty.",
  },
  {
    title: "Engineering excellence",
    body: "We hold ourselves to the highest technical standards — documented code, automated tests, security-by-default, observable systems. Excellence is non-negotiable, not optional.",
  },
  {
    title: "Continuous learning",
    body: "Technology evolves faster than any fixed curriculum. Every team member dedicates time each week to learning, contributing to open source, and publishing research. Curiosity is a core competency.",
  },
];

const team = [
  {
    name: "Alessandro Ferretti",
    role: "Founder & CEO",
    bio: "Former engineering director at two scale-ups acquired by public companies. Specialist in data architecture and applied AI. Based in Milan.",
  },
  {
    name: "Giulia Romano",
    role: "Head of Engineering",
    bio: "15 years building distributed systems for financial services and healthcare. Certified Kubernetes administrator and platform engineering advocate.",
  },
  {
    name: "Marco Esposito",
    role: "Principal AI Architect",
    bio: "PhD in machine learning from Politecnico di Milano. Previously research engineer at a leading European AI lab. Deep expertise in LLMs and multimodal systems.",
  },
  {
    name: "Sofia Marchetti",
    role: "Director of Delivery",
    bio: "Certified SAFe programme consultant. 10+ years managing complex enterprise programmes across manufacturing, retail, and public sector clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="bg-white dark:bg-slate-950 min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Technology consultancy built on depth, not breadth
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Dynamics Consulting was founded in Milan with a clear conviction: the market was
              full of generalist consultancies that could talk about technology, and short of
              specialists who could actually build it. We set out to be the latter.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-lg">
            <h2>Our story</h2>
            <p>
              Since 2015 we have worked with organisations ranging from venture-backed startups to
              FTSE-listed enterprises, delivering AI systems, data platforms, cloud migrations,
              enterprise integrations, and digital transformation programmes. Every engagement has
              reinforced the same belief: technology only creates value when it is designed around
              real business problems and built to production-grade standards.
            </p>
            <p>
              We are headquartered in Milan and work with clients across Italy, the UK, and wider
              Europe. Our team of 40+ engineers, architects, and delivery specialists combines deep
              technical knowledge with the communication skills to work effectively alongside client
              teams, not around them.
            </p>
            <p>
              In 2023 we launched Nexus, our proprietary AI platform, as both an internal
              accelerator and a commercial product that gives enterprise clients a governed,
              auditable foundation for AI deployment.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                How we work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Our values
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {v.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                The team
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((p) => (
                <div
                  key={p.name}
                  className="flex gap-5 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {p.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{p.name}</div>
                    <div className="text-sm text-cyan-600 dark:text-cyan-400 mb-2">{p.role}</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {p.bio}
                    </p>
                  </div>
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
