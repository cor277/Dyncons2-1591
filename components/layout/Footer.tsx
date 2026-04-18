import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const services = [
  { label: "Applied AI & Agentic Workflows", href: "/services/applied-ai" },
  { label: "Cloud & Kubernetes", href: "/services/cloud-kubernetes" },
  { label: "Modern Data Platforms & RAG", href: "/services/data-platforms" },
  { label: "Enterprise Integration & API", href: "/services/enterprise-integration" },
  { label: "Microsoft & Dynamics 365", href: "/services/microsoft-dynamics" },
  { label: "Process & Hyper-Automation", href: "/services/automation" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Nexus MDS Core", href: "/platform" },
];

export function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-[#30363D]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Logo + tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Dynamics Consulting"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-syne text-[#E6EDF3] font-bold text-xs tracking-[0.15em] uppercase leading-none">
                  DYNAMICS
                </p>
                <p className="font-syne text-[#00B4D8] font-bold text-xs tracking-[0.15em] uppercase leading-none mt-0.5">
                  CONSULTING
                </p>
              </div>
            </div>
            <p className="text-[#7D8FA3] text-sm leading-relaxed mb-4">
              Sovereign AI Infrastructure for Regulated Industries · Italy
            </p>
            <p className="text-[#7D8FA3] text-xs font-mono">P.IVA: 10651160961</p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="font-dm font-semibold text-[#E6EDF3] text-xs uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Legal */}
          <div>
            <h4 className="font-dm font-semibold text-[#E6EDF3] text-xs uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-dm font-semibold text-[#E6EDF3] text-xs uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@dynamicsconsulting.it"
                  className="flex items-center gap-2 text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200"
                >
                  <Mail size={14} />
                  info@dynamicsconsulting.it
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393407253246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200"
                >
                  <Phone size={14} />
                  +39 3407253246
                </a>
              </li>
              <li className="text-[#7D8FA3] text-xs font-mono pt-1">
                SMS / WhatsApp preferred
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 border border-[#30363D] hover:border-[#00B4D8] text-[#E6EDF3] hover:text-[#00B4D8] rounded-lg text-sm font-medium transition-all duration-200"
            >
              Start a conversation
            </Link>
          </div>
        </div>

        {/* Italian resources */}
        <div className="mt-10 pt-8 border-t border-[#30363D]">
          <h4 className="font-dm font-semibold text-[#E6EDF3] text-xs uppercase tracking-widest mb-3">
            Risorse in italiano
          </h4>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <Link href="/it/ai-sanitaria-on-premise" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              AI On-Premise per la Sanità
            </Link>
            <Link href="/it/consulenza-ai-farmaceutico" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              Consulenza AI Farmaceutico
            </Link>
            <Link href="/it/sovereign-ai-italia" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              Sovereign AI Italia
            </Link>
            <Link href="/it/ai-dati-aziendali" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              AI Dati Aziendali
            </Link>
            <Link href="/it/ai-ingegneria-tecnica" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              AI Ingegneria Tecnica
            </Link>
            <Link href="/it/ai-agenti-finanziari" className="text-[#7D8FA3] hover:text-[#00B4D8] text-sm transition-colors duration-200">
              AI Agenti Finanziari
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#30363D] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#7D8FA3] text-[10px] sm:text-xs font-mono text-center sm:text-left">
            © {new Date().getFullYear()} Dynamics Consulting — Corrado Patierno — P.IVA 10651160961
          </p>
          <p className="text-[#7D8FA3] text-[10px] sm:text-xs font-mono text-center sm:text-right">
            Milano, Italy · GDPR Compliant · AI Act Ready · EU Data Residency
          </p>
        </div>
      </div>
    </footer>
  );
}
