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

const PAGE_URL = "https://www.dynamicsconsulting.it/it/trust";
const TITLE = "Trust — certificazioni, sub-responsabili, verifica dell’audit";
const DESCRIPTION =
  "Cosa possono mostrare Dynamics Consulting e Nexus MDS Core e come verificarlo: nessuna certificazione ottenuta, controlli mappati con CEPF, i sub-responsabili del sito e delle installazioni Nexus, come si verifica il registro di audit concatenato.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/it/trust"),
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "it_IT",
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
    inLanguage: "it",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    about: [{ "@id": ORG_ID }, { "@id": NEXUS_ID }, { "@id": CEPF_ID }],
    breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  },
  breadcrumbSchema(PAGE_URL, [
    { name: "Home", path: "/" },
    { name: "Risorse in italiano", path: "/it" },
    { name: "Trust" },
  ]),
];

const websiteProcessors = [
  {
    name: "Resend",
    purpose: "Invio email: notifiche del modulo di contatto",
    location: "USA",
  },
  {
    name: "Vercel",
    purpose: "Hosting cloud: infrastruttura del sito e distribuzione edge",
    location: "UE / USA",
  },
  {
    name: "Endpoint di inferenza AI",
    purpose: "Generazione delle risposte dell’assistente AI del sito, solo se lo attivi",
    location: "Unione Europea",
  },
];

const nexusExternal = [
  {
    name: "Nebius AI — endpoint UE",
    role: "Generazione della risposta finale",
    detail:
      "È l’endpoint di generazione predefinito, in un datacenter UE, scelto per contenere i costi dell’hardware. È sostituibile: può prenderne il posto un altro provider, e su un server con GPU lo stesso passaggio lo fa il modello locale (llama.cpp), così l’intera catena resta nel perimetro.",
  },
  {
    name: "HyperLog",
    role: "Logging operativo esterno",
    detail:
      "Riceve solo i log operativi del gateway, passando attraverso il gateway stesso. Niente prompt, niente risposte del modello.",
  },
  {
    name: "OpenAI, Anthropic, Gemini",
    role: "Provider di modelli opzionali",
    detail:
      "Disattivi, salvo che il cliente scelga di attivarli. Quando sono attivi passano dalle stesse rotte del gateway e vengono registrati nell’audit service come qualsiasi altra chiamata al modello; le chiamate dirette dalle applicazioni sono bloccate a livello DNS.",
  },
];

const linkCls = "text-[#00B4D8] underline hover:text-[#E6EDF3]";

export default function TrustItPage() {
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
              Cosa è certificato, cosa è mappato, e come verificarlo
            </h1>
            <p className="text-[#7D8FA3] text-lg leading-relaxed">
              Questa pagina dice cosa Dynamics Consulting può mostrare di sé e di Nexus MDS Core,
              e come un cliente o un auditor può verificarlo senza dover credere sulla parola a
              nessuno.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-16 text-[#7D8FA3] text-lg leading-relaxed">
            {/* Certificazioni */}
            <div className="space-y-4">
              <SectionHeader eyebrow="Certificazioni" title="Nessuna" />
              <p className="pt-2">
                Né Dynamics Consulting né Nexus MDS Core hanno ottenuto certificazioni, di alcun
                tipo.
              </p>
              <p>
                La conformità a una norma o a uno standard la stabilisce la valutazione prevista da
                quella norma o da quello standard — un audit di certificazione, una procedura di
                valutazione della conformità, un&apos;autorità di controllo — non una dichiarazione
                del fornitore. Quando una pagina di questo sito dice che un controllo è mappato su
                un requisito, intende esattamente questo: mappato, non certificato.
              </p>
            </div>

            {/* Mappatura */}
            <div className="space-y-4">
              <SectionHeader eyebrow="Metodo" title="Cosa è mappato, e come" />
              <p className="pt-2">
                I controlli sono mappati su GDPR, AI Act, ISO/IEC 27001:2022, la nuova direttiva
                sulla responsabilità da prodotto (PLD), NIS2 e altri framework con il{" "}
                <Link href="/it/cepf" className={linkCls}>
                  Compliance-Epistemic Project Framework (CEPF)
                </Link>
                . La mappatura indica, per ogni requisito, quale controllo lo copre e quale
                evidenza mostra che è in atto.
              </p>
              <p className="text-base font-mono text-[#E6EDF3] border-l-2 border-[#00B4D8] pl-4">
                CEPF v7 — 19 framework, 247 requisiti, 24 gruppi di sovrapposizione tra framework,
                695 template documentali — snapshot luglio 2026
              </p>
              <p>Il catalogo non è pubblicato.</p>
            </div>

            {/* Sub-responsabili */}
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Sub-responsabili"
                title="Chi altro tocca i dati"
                subtitle="Due cose diverse, tenute separate: questo sito, e le installazioni di Nexus MDS Core presso i clienti."
              />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">Questo sito</h3>
                <p>
                  Come indicato nell&apos;
                  <Link href="/it/privacy" className={linkCls}>
                    informativa privacy
                  </Link>
                  , tutti vincolati da accordi sul trattamento dei dati:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-base border border-[#30363D]">
                    <thead className="bg-[#161B22] text-[#E6EDF3]">
                      <tr>
                        <th className="text-left p-3 border-b border-[#30363D]">Responsabile</th>
                        <th className="text-left p-3 border-b border-[#30363D]">Finalità</th>
                        <th className="text-left p-3 border-b border-[#30363D]">Ubicazione</th>
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
                  I trasferimenti verso gli Stati Uniti si basano sull&apos;EU–US Data Privacy
                  Framework o sulle clausole contrattuali standard, come descritto
                  nell&apos;informativa.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#E6EDF3]">
                  Le installazioni di Nexus MDS Core presso i clienti
                </h3>
                <p>
                  Nexus MDS Core gira sull&apos;infrastruttura del cliente. Indicizzazione,
                  retrieval, identità e audit restano nel perimetro del cliente, dietro un unico
                  gateway. I componenti che stanno fuori sono questi:
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
                  La mappa completa, servizio per servizio, è nella{" "}
                  <Link href="/it/piattaforma-nexus" className={linkCls}>
                    pagina della piattaforma
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Catena dell'audit */}
            <div className="space-y-4">
              <SectionHeader eyebrow="Audit" title="Come si verifica la catena hash" />
              <p className="pt-2">
                Ogni chiamata a un modello, locale o esterno, passa dalle rotte AI del gateway, che
                ne consegnano un record all&apos;audit service. Ogni record è cifrato e concatenato
                al precedente tramite il suo hash: alterare, togliere o riordinare un record spezza
                la catena da quel punto in poi, e la rottura si vede.
              </p>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong className="text-[#E6EDF3]">Su richiesta.</strong> L&apos;audit service
                  ha un endpoint di verifica: dato un intervallo di record, ricalcola la catena e
                  restituisce l&apos;esito, integra o alterata.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">In modo indipendente.</strong> Uno strumento
                  a riga di comando separato, usato per il ripristino, verifica la catena a partire
                  dai record archiviati, senza affidarsi al servizio in esecuzione perché garantisca
                  per sé stesso.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Nel tempo.</strong> I record vengono
                  archiviati ogni mese. Ogni archivio ha un manifesto che lo collega alla catena
                  attiva, così la catena si segue dall&apos;archivio ai record correnti senza
                  interruzioni.
                </li>
              </ul>
              <p>
                L&apos;endpoint di verifica vive dentro ciascuna installazione ed è raggiungibile
                solo da lì: non è un servizio pubblico.
              </p>
            </div>

            {/* Segnalazioni di sicurezza */}
            <div className="space-y-4">
              <SectionHeader eyebrow="Sicurezza" title="Segnalare un problema di sicurezza" />
              <p className="pt-2">
                Se trovi una vulnerabilità in questo sito o in Nexus MDS Core, scrivi a{" "}
                <a href="mailto:info@dynamicsconsulting.it" className={linkCls}>
                  info@dynamicsconsulting.it
                </a>{" "}
                indicando cosa hai trovato, dove, e come riprodurlo. Per le questioni sui dati
                personali, scrivi a{" "}
                <a href="mailto:privacy@dynamicsconsulting.it" className={linkCls}>
                  privacy@dynamicsconsulting.it
                </a>
                .
              </p>
              <div className="pt-4">
                <CTAButton label="Contatti →" href="/it/contatti" variant="secondary" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
