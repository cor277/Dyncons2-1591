import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";
import { ServicePageLayout, type Capability } from "@/components/sections/ServicePageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechBadge } from "@/components/ui/TechBadge";

const PATH = "/it/servizi/ai-applicata";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;

export const metadata: Metadata = {
  title: "AI applicata e workflow agentici",
  description:
    "Sistemi multi-agente, pipeline RAG, Voice AI e governance dell'AI per organizzazioni in settori regolamentati. Progettati sui requisiti di GDPR e AI Act fin dall'inizio.",
  keywords: ["AI agentica", "sistemi multi-agente", "architettura RAG enterprise", "voice AI", "AI e GDPR", "AI Act"],
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "AI applicata e workflow agentici | Dynamics Consulting",
    description:
      "Sistemi multi-agente con memoria, orchestrazione e governance. Progettati sui requisiti di GDPR e AI Act fin dall'inizio.",
    url: PAGE_URL,
    locale: "it_IT",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "it",
  mainEntity: [
    {
      "@type": "Question",
      name: "Come si progetta un sistema multi-agente sui requisiti del GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un sistema multi-agente progettato sui requisiti del GDPR ha bisogno di un classificatore NLU in tempo reale che riconosca i dati personali, di meccanismi di cancellazione selettiva della memoria e di un'architettura self-hosted che tenga i dati dentro il perimetro aziendale. Nexus MDS Core applica questi pattern in produzione.",
      },
    },
    {
      "@type": "Question",
      name: "Che differenza c'è fra RAG e fine-tuning sui dati aziendali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il RAG (Retrieval-Augmented Generation) ti permette di interrogare i documenti aziendali senza modificare il modello di base, con aggiornamenti in tempo reale e tracciabilità delle fonti. Il fine-tuning richiede dataset etichettati, cicli di addestramento lunghi e GPU dedicate. Per dati aziendali che cambiano di continuo, il RAG è quasi sempre la scelta giusta.",
      },
    },
    {
      "@type": "Question",
      name: "Nexus MDS Core supporta LLM open source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Nexus MDS Core esegue in locale modelli open-weight tramite llama.cpp, con Open WebUI come interfaccia; con una GPU più grande gira un modello più grande. In un deployment interamente locale nulla di una risposta esce dal perimetro aziendale; in un deployment ibrido solo l'ultimo passaggio, la generazione, chiama un endpoint esterno, e quel componente è sostituibile.",
      },
    },
    {
      "@type": "Question",
      name: "Abbiamo dati ovunque e nessuna struttura: da dove si comincia davvero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da un discovery sprint di 2 settimane: censisci quali dati esistono, dove stanno, in che formato e di che qualità sono. Poi definisci le domande di business a cui devi rispondere. Solo allora costruisci il livello di retrieval: un RAG MVP circoscritto su un corpus definito, validato con utenti reali prima di investire oltre.",
      },
    },
    {
      "@type": "Question",
      name: "Il sistema può ragionare sulle norme ISO e segnalare conflitti con le nostre specifiche di progetto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. Dynamics Consulting costruisce sistemi RAG consapevoli delle versioni: sanno quale revisione di una norma si applica alla data di un progetto e non rispondono con una clausola superata. Gli ingegneri fanno domande in linguaggio naturale e ricevono risposte citate: norma, numero dell'articolo, revisione. Ogni risposta viene registrata, per la tracciabilità ai fini della responsabilità professionale.",
      },
    },
    {
      "@type": "Question",
      name: "Come gestite la governance degli agenti rispetto all'internal audit e al principio dei quattro occhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dynamics Consulting progetta architetture di agenti con approval gate human-in-the-loop prima di qualsiasi azione di scrittura, audit trail a prova di manomissione con retention configurabile, RBAC con separazione fra front office, rischio, compliance e IT, e log completo di ogni chiamata all'LLM (input, output, versione del modello, timestamp) per ogni inferenza. Controlli mappati sui requisiti di DORA, MiFID II e AI Act.",
      },
    },
  ],
};

const capabilities: Capability[] = [
  {
    iconName: "Brain",
    name: "Sistemi multi-agente",
    desc: "Memoria a breve e lungo termine su più livelli, riassunto automatico dopo 10 interazioni per ottimizzare l'uso dei token, così le conversazioni lunghe conservano il contesto entro la finestra del modello.",
  },
  {
    iconName: "Mic",
    name: "Voice AI in tempo reale",
    desc: "STT/TTS con gestione intelligente delle interruzioni, che distingue la voce umana dal rumore ambientale. Latenza obiettivo sotto i 200 ms.",
  },
  {
    iconName: "Search",
    name: "Pipeline RAG",
    desc: "Chunking semantico, deduplicazione vettoriale, paginazione a cursore su Weaviate per dataset oltre i 10.000 documenti.",
  },
  {
    iconName: "Shield",
    name: "NLU privacy-first",
    desc: "Classificatore in tempo reale per i dati sensibili, cancellazione selettiva della memoria su richiesta dell'utente, progettazione sui requisiti del GDPR fin dall'inizio.",
  },
  {
    iconName: "Code",
    name: "AI per sviluppatori",
    desc: "Roslyn + LLM per generare automaticamente gli unit test, agenti per la documentazione del codice, workshop aziendali di AI-in-Coding.",
  },
  {
    iconName: "FileSearch",
    name: "Analisi documentale con AI",
    desc: "Analisi di data room, estrazione strutturata da documenti non strutturati, due diligence automatizzata.",
  },
];

const useCases = [
  {
    title: "Aziende con dati non strutturati",
    description: `È il punto di partenza più comune nel mid-market italiano: i dati stanno in cartelle condivise, thread di email, PDF scansionati, export di vecchi ERP e nel file Excel di qualcuno. Nessuna data governance. Nessuna API. Nessuna struttura.

La risposta sbagliata è comprare uno strumento di AI. Quella giusta è capire a quali domande l'azienda deve rispondere con quei dati, e poi costruire il livello di retrieval attorno a quelle domande.

L'approccio: un discovery sprint di 2 settimane per mappare cosa esiste, dove sta e di che qualità è. Poi un RAG MVP di 4 settimane su un corpus definito e circoscritto. Validato con utenti reali prima di qualsiasi ulteriore investimento. È il punto d'ingresso per le organizzazioni che non hanno mai messo in produzione un sistema di AI.`,
    tags: ["PDF", "Archivi email", "Export ERP", "RAG MVP", "Discovery sprint"],
  },
  {
    title: "Ingegneria e documentazione tecnica",
    description: `Gli studi di ingegneria civile, strutturale, aerospaziale e industriale siedono su corpus enormi: norme ISO e UNI, standard EN, specifiche di progetto, capitolati, documentazione degli appaltatori, storici delle revisioni, manuali tecnici. Un ingegnere senior conosce questo corpus d'istinto. Ma il corpus conta migliaia di pagine, cambia di continuo e varia per cliente e per giurisdizione.

Dynamics Consulting costruisce sistemi RAG che ragionano sulla documentazione tecnica. Gli ingegneri fanno domande in linguaggio naturale e ricevono risposte citate: norma, numero dell'articolo, revisione. Il sistema è consapevole delle versioni: sa quale revisione di una norma si applica alla data di un progetto e non risponde con una clausola superata.

Ogni risposta viene registrata: chi ha chiesto, quando, quale documento ha risposto. Dove c'è responsabilità professionale, non è facoltativo.`,
    tags: ["Norme ISO/UNI/EN", "Specifiche tecniche", "Controllo revisioni", "RAG tracciabile", "Versioning documentale"],
  },
  {
    title: "Finanza e data room regolamentate",
    description: `Un agente AI che agisce su dati finanziari non è un chatbot. È un sistema che prende decisioni operative. Internal audit, risk management e compliance chiederanno: chi ha autorizzato questa azione? Quale modello ha deciso? Su quali dati? Il log è immutabile? È stato applicato il principio dei quattro occhi?

Dynamics Consulting progetta architetture di agenti con approval gate human-in-the-loop prima di qualsiasi azione di scrittura, audit trail a prova di manomissione con retention configurabile, RBAC con separazione fra front office / rischio / compliance / IT, e log completo di ogni chiamata all'LLM: input, output, versione del modello, timestamp, per ogni inferenza.

Controlli mappati su: DORA (resilienza operativa, registrazione degli incidenti), MiFID II (tracciabilità delle decisioni), AI Act (requisiti dei sistemi ad alto rischio), GDPR (minimizzazione dei dati, diritto alla spiegazione).`,
    tags: ["Audit trail", "Human-in-the-loop", "DORA", "MiFID II", "RBAC", "AI Act"],
  },
];

const tech = ["LLM", "Weaviate", "n8n", "vLLM", "Flutter", "Keycloak", "OpenWebUI", "FastAPI", "transformers"];

const faqs = [
  {
    q: "Come si progetta un sistema multi-agente sui requisiti del GDPR?",
    a: "Un sistema multi-agente progettato sui requisiti del GDPR ha bisogno di un classificatore NLU in tempo reale che riconosca i dati personali, di meccanismi di cancellazione selettiva della memoria e di un'architettura self-hosted che tenga i dati dentro il perimetro aziendale. Nexus MDS Core applica questi pattern in produzione.",
  },
  {
    q: "Che differenza c'è fra RAG e fine-tuning sui dati aziendali?",
    a: "Il RAG ti permette di interrogare i documenti aziendali senza modificare il modello di base, con aggiornamenti in tempo reale e tracciabilità delle fonti. Per dati aziendali che cambiano di continuo, il RAG è quasi sempre la scelta giusta.",
  },
  {
    q: "Nexus MDS Core supporta LLM open source?",
    a: "Sì. Nexus MDS Core esegue in locale modelli open-weight tramite llama.cpp, con Open WebUI come interfaccia; con una GPU più grande gira un modello più grande. In un deployment interamente locale nulla di una risposta esce dal perimetro aziendale; in un deployment ibrido solo l'ultimo passaggio, la generazione, chiama un endpoint esterno, e quel componente è sostituibile.",
  },
  {
    q: "Abbiamo dati ovunque e nessuna struttura: da dove si comincia davvero?",
    a: "Da un discovery sprint di 2 settimane: censisci quali dati esistono, dove stanno, in che formato e di che qualità sono. Poi definisci le domande di business a cui devi rispondere. Solo allora costruisci il livello di retrieval: un RAG MVP circoscritto su un corpus definito, validato con utenti reali prima di investire oltre.",
  },
  {
    q: "Il sistema può ragionare sulle norme ISO e segnalare conflitti con le nostre specifiche di progetto?",
    a: "Sì. Dynamics Consulting costruisce sistemi RAG consapevoli delle versioni: sanno quale revisione di una norma si applica alla data di un progetto e non rispondono con una clausola superata. Gli ingegneri fanno domande in linguaggio naturale e ricevono risposte citate: norma, numero dell'articolo, revisione. Ogni risposta viene registrata, per la tracciabilità ai fini della responsabilità professionale.",
  },
  {
    q: "Come gestite la governance degli agenti rispetto all'internal audit e al principio dei quattro occhi?",
    a: "Dynamics Consulting progetta architetture di agenti con approval gate human-in-the-loop prima di qualsiasi azione di scrittura, audit trail a prova di manomissione con retention configurabile, RBAC con separazione fra front office, rischio, compliance e IT, e log completo di ogni chiamata all'LLM (input, output, versione del modello, timestamp) per ogni inferenza. Controlli mappati sui requisiti di DORA, MiFID II e AI Act.",
  },
];

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Competenze tecniche", path: "/it/competenze" },
  { name: "AI applicata e workflow agentici" },
]);

export default function AiApplicataPage() {
  return (
    <ServicePageLayout
      locale="it"
      title="AI applicata e workflow agentici"
      intro="Dynamics Consulting non promette AI generica. Progetta sistemi multi-agente con memoria, orchestrazione e governance."
      tech={tech}
      capabilities={capabilities}
      faqs={faqs}
      ctaTitle="Parliamo del tuo progetto"
      ctaSubtitle="Un'infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Scrivici."
      faqSchema={faqSchema}
      breadcrumbSchema={crumbs}
    >
      {/* Who this is for */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader eyebrow="Casi d'uso" title="Per chi è" />
          </div>
          <div className="space-y-10 max-w-3xl">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-[#161B22] border border-[#30363D] rounded-xl p-8">
                <h3 className="font-dm font-bold text-[#E6EDF3] text-xl mb-4">{uc.title}</h3>
                <div className="text-[#7D8FA3] text-sm leading-relaxed space-y-4">
                  {uc.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {uc.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} variant="cyan" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
