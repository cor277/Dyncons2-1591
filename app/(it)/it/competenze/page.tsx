import type { Metadata } from "next";
import { breadcrumbSchema, faqSchema } from "@/app/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { TechBadge } from "@/components/ui/TechBadge";

const URL = "https://www.dynamicsconsulting.it/it/competenze";

export const metadata: Metadata = {
  title: "Competenze tecniche",
  description:
    "L’ingegneria sotto le linee di servizio: AI applicata e workflow agentici, data platform e RAG, cloud e Kubernetes, integrazione enterprise, automazione dei processi. Competenze, non offerte separate.",
  alternates: alternatesFor("/it/competenze"),
  openGraph: {
    images: OG_IMAGE,
    title: "Competenze tecniche | Dynamics Consulting",
    description:
      "L’ingegneria sotto le linee di servizio: AI applicata, data platform e RAG, cloud e Kubernetes, integrazione enterprise, automazione dei processi.",
    url: URL,
    type: "website",
    locale: "it_IT",
  },
};

interface Area {
  /** Anchor; the retired /it/servizi/<x> pages redirect here. */
  id: string;
  title: string;
  lead: string;
  points: string[];
  tech: string[];
  faqs: { q: string; a: string }[];
  links?: { label: string; href: string }[];
}

const areas: Area[] = [
  {
    id: "ai-applicata",
    title: "AI applicata e workflow agentici",
    lead: "Dynamics Consulting non promette AI generica. Progetta sistemi multi-agente con memoria, orchestrazione e governance integrate, e un retrieval che cita le proprie fonti.",
    points: [
      "Sistemi multi-agente con memoria a breve e lungo termine su più livelli; il riassunto automatico dopo 10 interazioni tiene le conversazioni lunghe dentro la finestra di contesto del modello.",
      "Pipeline RAG con chunking semantico, deduplicazione vettoriale e paginazione a cursore su Weaviate per dataset oltre i 10.000 documenti. Sulle norme tecniche il retrieval è consapevole delle versioni: sa quale revisione si applica alla data di un progetto, cita norma, articolo e revisione e registra ogni risposta.",
      "Governance degli agenti per internal audit e principio dei quattro occhi: approval gate human-in-the-loop prima di qualsiasi azione di scrittura, audit trail a prova di manomissione con retention configurabile, RBAC che separa front office, rischio, compliance e IT, e ogni chiamata all’LLM registrata con input, output, versione del modello e timestamp. Controlli mappati su DORA, MiFID II, AI Act e GDPR.",
      "NLU privacy-first: un classificatore in tempo reale per i dati sensibili e la cancellazione selettiva della memoria su richiesta, progettati sui requisiti del GDPR.",
      "Voce in tempo reale: STT/TTS con gestione delle interruzioni che distingue la voce umana dal rumore ambientale, latenza obiettivo sotto i 200 ms.",
      "AI per sviluppatori e documenti: Roslyn + LLM per generare gli unit test, agenti per la documentazione del codice, workshop di AI-in-Coding; analisi di data room, estrazione strutturata da documenti non strutturati, due diligence automatizzata.",
    ],
    tech: ["LLM", "Weaviate", "n8n", "vLLM", "Flutter", "Keycloak", "OpenWebUI", "FastAPI", "transformers"],
    faqs: [
      {
        q: "Abbiamo dati ovunque e nessuna struttura: da dove si comincia davvero?",
        a: "Da un discovery sprint di 2 settimane: censisci quali dati esistono, dove stanno, in che formato e di che qualità sono. Poi definisci le domande di business a cui devi rispondere. Solo allora costruisci il livello di retrieval: un RAG MVP circoscritto su un corpus definito, validato con utenti reali prima di investire oltre.",
      },
      {
        q: "Che differenza c’è fra RAG e fine-tuning sui dati aziendali?",
        a: "Il RAG ti permette di interrogare i documenti aziendali senza modificare il modello di base, con aggiornamenti in tempo reale e tracciabilità delle fonti. Il fine-tuning richiede dataset etichettati, cicli di addestramento lunghi e GPU dedicate. Per dati aziendali che cambiano di continuo, il RAG è quasi sempre la scelta giusta.",
      },
    ],
    links: [
      { label: "AI per norme tecniche e ingegneria", href: "/it/ai-ingegneria-tecnica" },
      { label: "Agenti AI per finanza e compliance", href: "/it/ai-agenti-finanziari" },
    ],
  },
  {
    id: "data-platform",
    title: "Data platform e RAG",
    lead: "Dai silos dell’ERP a un motore di eventi: lakehouse ACID, virtualizzazione Zero-ETL, archivi vettoriali e relazionali fianco a fianco.",
    points: [
      "Data lakehouse ACID: da Dynamics 365 F&O a Synapse Link ad Apache Iceberg, con time travel ed evoluzione dello schema.",
      "Virtualizzazione Zero-ETL con Dremio e Teiid: query federate su Dynamics, PostgreSQL e S3 in un’unica vista, senza spostare i dati.",
      "ERP event-driven: Azure Event Grid e n8n trasformano Dynamics 365 da silo passivo a motore di eventi in tempo reale, che reagisce a creazioni, modifiche e cancellazioni.",
      "Pipeline RAG completa — ingestione, chunking semantico, embedding, Weaviate, retrieval, LLM — con deduplicazione e paginazione a cursore su larga scala.",
      "Amministrazione dati low-code: Budibase su Weaviate con paginazione a cursore oltre i 10.000 record; Directus come data hub via API con Budibase come livello di interfaccia e automazione, trigger applicativi invece che di database.",
    ],
    tech: ["Apache Iceberg", "Weaviate", "Dremio", "Teiid", "PostgreSQL", "EventStoreDB", "MinIO", "n8n", "Azure Event Grid", "Directus", "Budibase"],
    faqs: [
      {
        q: "Che cos’è lo Zero-ETL e quando ha senso?",
        a: "Zero-ETL significa interrogare i dati direttamente alla fonte tramite virtualizzazione (Dremio, Teiid) invece di copiarli in un data warehouse. Ha senso quando i dati cambiano spesso, lo storage costa o la latenza della replica non è accettabile.",
      },
      {
        q: "Come si esporta Dynamics 365 F&O in un data lake moderno?",
        a: "Il percorso consigliato: Synapse Link per l’export incrementale da D365 F&O, poi n8n o Azure Data Factory per la trasformazione, poi Apache Iceberg come formato di storage con transazioni ACID. Analisi in tempo reale senza pesare sulle prestazioni dell’ERP.",
      },
    ],
    links: [{ label: "Il lakehouse non basta", href: "/it/ricerca/lakehouse-non-basta" }],
  },
  {
    id: "cloud-kubernetes",
    title: "Architettura cloud e Kubernetes",
    lead: "Infrastruttura pronta per l’AI: orchestrazione delle GPU, inferenza self-hosted, Zero-Trust di default.",
    points: [
      "Orchestrazione GPU: cluster Kubernetes con runtime su misura per i carichi AI su AKS, GCP e Hetzner bare-metal, dimensionati per l’inferenza degli LLM.",
      "Gateway APISIX: plugin JWT, rate limiting sulle chiamate agli LLM, routing multi-tenant e CORS gestiti a livello di gateway — il livello di sicurezza viene prima del codice.",
      "Zero-Trust: Keycloak e APISIX come un unico livello di sicurezza; nessun servizio esposto senza autenticazione.",
      "AI serverless con Apache OpenWhisk su Kubernetes per carichi intermittenti: scale-to-zero, task su GPU, elaborazione di immagini, inferenza batch.",
      "Stack completo — Redis, RabbitMQ, MinIO, Grafana, Velero, Airflow, n8n — con CI/CD su più ambienti; backup con Velero e strategie multi-region su cloud UE per la continuità operativa.",
    ],
    tech: ["Kubernetes", "APISIX", "Keycloak", "AKS", "GCP", "Hetzner", "OpenWhisk", "vLLM", "Velero", "Grafana"],
    faqs: [
      {
        q: "Come si mette in produzione un LLM su Kubernetes in modo sicuro?",
        a: "Namespace isolati, network policy, autenticazione OIDC tramite Keycloak, rate limiting a livello di APISIX e un node pool GPU dedicato. Nexus MDS Core installa lo strato di identità e di gateway di questo stack — Keycloak, rate limiting su APISIX, una rete di servizi isolata — con un solo script di setup su Docker; portati su Kubernetes, gli stessi servizi aggiungono namespace e network policy.",
      },
      {
        q: "AKS, GKE o Hetzner per i carichi di lavoro AI?",
        a: "AKS e GKE si integrano nativamente con i servizi cloud (storage, IAM, monitoraggio) ma a costi GPU elevati. Hetzner bare-metal offre GPU H100/A100 a prezzi più bassi, ma l’infrastruttura va gestita. La scelta dipende da budget, residenza dei dati in UE e capacità operativa del team.",
      },
    ],
  },
  {
    id: "integrazione-enterprise",
    title: "Integrazione enterprise e modernizzazione",
    lead: "Integrazioni complesse, modernizzazione dei sistemi legacy e architetture event-driven per organizzazioni che non possono permettersi di fermarsi e ricostruire.",
    points: [
      "Migrazione da ESB e middleware — Talend ESB, BizTalk, MuleSoft, Karaf — verso stack moderni e leggeri: i pattern restano, l’architettura si modernizza.",
      "Event sourcing con EventStoreDB e Kafka: log di audit immutabili, query temporali, replay degli eventi e cancellazione selettiva delle proiezioni per le richieste di cancellazione previste dal GDPR.",
      "Modernizzazione dei sistemi legacy con migrazione incrementale secondo il pattern strangler fig, reverse engineering del codice assistito dall’AI e documentazione automatica.",
      "APISIX come API gateway sovrano per deployment on-premise e ibridi: rate limiting, validazione JWT, CORS, architettura a plugin.",
      "n8n self-hosted per l’automazione dei workflow, le pipeline di ingestione documentale e l’orchestrazione dell’AI con human-in-the-loop e audit trail completo.",
    ],
    tech: ["n8n", "APISIX", "Talend ESB", "EventStoreDB", "Kafka", "Azure Logic Apps", "Dynamics 365", "RabbitMQ"],
    faqs: [
      {
        q: "Quando conviene sostituire un ESB legacy invece di estenderlo?",
        a: "Quando il costo di manutenzione supera quello della migrazione, quando l’ESB è un collo di bottiglia per i rilasci o quando non regge pattern event-driven. Dynamics Consulting valuta entrambe le strade prima di consigliarne una.",
      },
      {
        q: "Si può integrare Dynamics 365 con sistemi on-premise senza Azure?",
        a: "Sì. Dynamics Consulting usa middleware self-hosted (n8n, APISIX, connettori su misura) per collegare Dynamics 365 ai sistemi on-premise, senza dipendere dai servizi PaaS di Azure.",
      },
    ],
    links: [
      { label: "Modernizzazione legacy con AI", href: "/it/modernizzazione-sistemi-legacy-ai" },
      { label: "Event sourcing in pratica", href: "/it/ricerca/event-sourcing" },
    ],
  },
  {
    id: "automazione",
    title: "Automazione dei processi",
    lead: "RPA, process mining e AI insieme per togliere il lavoro ripetitivo, con un ritorno che si misura su ogni processo, non si promette in anticipo.",
    points: [
      "Process mining sui log che esistono già (Celonis) per trovare i processi con più volumi, più errori e più costi, poi valutazione dei candidati per fattibilità e ROI.",
      "Bot RPA su UiPath e Power Automate per inserimento dati, riconciliazioni e reportistica, a livello di interfaccia o di API — le API, dove ci sono, hanno la precedenza.",
      "Elaborazione intelligente dei documenti: estrazione, classificazione e validazione di fatture, contratti, moduli ed email, con la variabilità che l’OCR a regole non sa gestire.",
      "Automazione delle decisioni e orchestrazione: modelli inseriti nel routing delle approvazioni e nelle previsioni; Camunda e Airflow per processi a più passaggi fra persone e sistemi, con audit trail.",
      "Esercizio: gestione delle eccezioni, alerting e monitoraggio, perché le automazioni restino affidabili mentre i sistemi cambiano.",
    ],
    tech: ["UiPath", "Power Automate", "Automation Anywhere", "Blue Prism", "Celonis", "Camunda BPM", "Python", "Azure Document Intelligence", "Google Document AI", "Apache Airflow", "n8n", "Zapier"],
    faqs: [
      {
        q: "Come si capisce quali processi automatizzare per primi?",
        a: "Dynamics Consulting parte dal process mining sui log che hai già, per individuare in modo oggettivo i processi con più volumi, più errori e più costi. Poi valuta i candidati per fattibilità dell’automazione e ROI, e ne ricava una roadmap con le priorità.",
      },
      {
        q: "Le automazioni richiedono modifiche ai sistemi esistenti?",
        a: "Di solito no. I bot lavorano a livello di interfaccia o di API, quindi i sistemi non vanno modificati. Dove esistono API Dynamics Consulting le preferisce perché sono più affidabili, ma si possono automatizzare anche sistemi che non ne hanno affatto.",
      },
    ],
  },
];

const crumbs = breadcrumbSchema(URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Competenze tecniche" },
]);

const faq = faqSchema(
  URL,
  areas.flatMap((a) => a.faqs),
);

const linkClass = "text-[#00B4D8] hover:text-[#E6EDF3] underline";

export default function CompetenzePage() {
  return (
    <>
      <JsonLd data={[crumbs, faq]} />
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Ingegneria
            </p>
            <h1 className="font-syne text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              Competenze tecniche
            </h1>
            <p className="text-lg text-[#7D8FA3] leading-relaxed">
              Sono competenze, non offerte separate. Sono l’ingegneria su cui poggiano le tre linee
              di servizio — consulenza sulla governance, fractional CTO e la piattaforma di AI
              sovrana — e sono elencate qui perché ciò che un progetto richiede davvero sia visibile,
              non sottinteso.
            </p>
          </div>
        </section>

        <section className="px-6 pt-12">
          <nav
            aria-label="In questa pagina"
            className="max-w-3xl mx-auto border border-[#30363D] rounded-xl bg-[#161B22] p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#00B4D8] mb-4">
              In questa pagina
            </h2>
            <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-base list-decimal list-inside marker:text-[#7D8FA3]">
              {areas.map((a) => (
                <li key={a.id}>
                  <a href={`#${a.id}`} className="text-[#00B4D8] hover:text-[#E6EDF3]">
                    {a.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#dynamics-365" className="text-[#00B4D8] hover:text-[#E6EDF3]">
                  Integrazione con ERP e CRM
                </a>
              </li>
            </ol>
          </nav>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-14">
            {areas.map((a) => (
              <div
                key={a.id}
                className="border-b border-[#21262D] pb-14 last:border-none last:pb-0"
              >
                <h2
                  id={a.id}
                  className="scroll-mt-24 text-2xl font-bold text-[#E6EDF3] mb-4"
                >
                  {a.title}
                </h2>
                <p className="text-[#7D8FA3] leading-relaxed text-lg mb-5">{a.lead}</p>
                <ul className="list-disc pl-5 space-y-2 text-[#7D8FA3] leading-relaxed marker:text-[#30363D] mb-6">
                  {a.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-8">
                  {a.tech.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
                <dl className="space-y-5">
                  {a.faqs.map((f) => (
                    <div key={f.q}>
                      <dt className="font-semibold text-[#E6EDF3] mb-1">{f.q}</dt>
                      <dd className="text-[#7D8FA3] leading-relaxed">{f.a}</dd>
                    </div>
                  ))}
                </dl>
                {a.links && (
                  <p className="mt-6 text-[#7D8FA3]">
                    Per approfondire:{" "}
                    {a.links.map((l, i) => (
                      <span key={l.href}>
                        {i > 0 && " · "}
                        <Link href={l.href} className={linkClass}>
                          {l.label}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto border-t border-[#30363D] pt-10 space-y-6 text-[#7D8FA3] leading-relaxed">
            <div>
              <h2 id="dynamics-365" className="scroll-mt-24 text-xl font-bold text-[#E6EDF3] mb-2">
                Integrazione con ERP e CRM, Dynamics 365 compreso
              </h2>
              <p>
                I connettori bidirezionali verso Dynamics 365 CE e F&amp;O e l’export con Synapse Link
                verso un lakehouse fanno parte del lavoro di integrazione e di data platform descritto
                sopra. Programmi precedenti:{" "}
                <Link href="/it/case-studies/dynamics-data" className={linkClass}>
                  Dynamics 365 F&amp;O e data platform
                </Link>
                ,{" "}
                <Link href="/it/case-studies/dynamics-crm" className={linkClass}>
                  Dynamics 365 CRM
                </Link>
                ,{" "}
                <Link href="/it/case-studies/sorgenia" className={linkClass}>
                  Sorgenia — Dynamics 365 Marketing
                </Link>
                .
              </p>
            </div>
            <p id="blockchain" className="scroll-mt-24 text-base">
              La blockchain resta una competenza di ingegneria da lavori precedenti (Solidity su
              Polygon, servizi event-sourced) e si usa solo dove serve davvero un registro condiviso
              fra più parti, come nella certificazione di autenticità di{" "}
              <Link href="/it/case-studies/logitrack" className={linkClass}>
                LogiTrack
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#7D8FA3] text-base">
              Cerchi invece le linee di servizio?{" "}
              <Link href="/it" className={linkClass}>
                Sono nella home in italiano
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
