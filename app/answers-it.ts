/**
 * The Italian answer pages: the same six questions as app/answers.ts, phrased
 * the way they are asked in Italian. Keys are the Italian slugs from
 * ROUTE_PAIRS in lib/i18n-routes.ts.
 *
 * This registry is the source for the /it/risposte index and the Italian answer
 * pages. Facts must stay identical to the English registry.
 */
import type { AnswerPage } from "@/app/answers";
import type { AnswerSource } from "@/components/sections/AnswerPageLayout";

export const ANSWERS_IT: Record<string, AnswerPage> = {
  "ai-privata-vs-ai-sovrana": {
    slug: "ai-privata-vs-ai-sovrana",
    question: "Che differenza c’è tra AI privata e AI sovrana?",
    title: "AI privata e AI sovrana: la differenza che conta",
    description:
      "L’AI privata riguarda chi può vedere i dati. L’AI sovrana riguarda chi può decidere, e sotto quale giurisdizione. I tre modelli di deployment — AI completamente locale, ibrido sovrano, inferenza privata in UE — e cosa garantisce davvero ciascuno.",
    updated: "2026-09",
    updatedLabel: "settembre 2026",
    topic: "AI sovrana",
    keywords: [
      "AI privata",
      "AI sovrana",
      "AI on-premise",
      "inferenza privata UE",
      "sovranità dei dati",
    ],
  },
  "rag-ai-act": {
    slug: "rag-ai-act",
    question: "Un sistema RAG rientra nell’AI Act?",
    title: "Un sistema RAG rientra nell’AI Act?",
    description:
      "L’AI Act classifica per finalità prevista e per ruolo, non per tecnica. Cosa significa per un sistema di retrieval-augmented generation, quali obblighi ricadono sul deployer anziché sul fornitore del modello, e cosa l’architettura deve essere in grado di dimostrare.",
    updated: "2026-09",
    updatedLabel: "settembre 2026",
    topic: "AI governance",
    keywords: [
      "RAG",
      "AI Act",
      "classificazione AI Act",
      "obblighi del deployer",
      "Regolamento 2024/1689",
    ],
  },
  "audit-trail-rag": {
    slug: "audit-trail-rag",
    question: "Come si costruisce un sistema RAG con audit trail?",
    title: "Costruire un sistema RAG con un audit trail vero",
    description:
      "Cosa va registrato perché una risposta sia ricostruibile a distanza di mesi: insieme recuperato, versioni dei documenti, prompt, identità del modello e approvazione. Le scelte di progetto che lo rendono possibile, e quelle che lo rendono impossibile.",
    updated: "2026-09",
    updatedLabel: "settembre 2026",
    topic: "AI governance",
    keywords: [
      "audit trail RAG",
      "ricostruibilità",
      "tracciabilità AI",
      "registro di audit",
      "AI governance",
    ],
  },
  "documenti-superati-rag": {
    slug: "documenti-superati-rag",
    question: "Come gestire i documenti normativi superati in un sistema RAG?",
    title: "Documenti normativi superati in un sistema RAG",
    description:
      "Un sistema di retrieval che ordina per similarità restituisce senza problemi una circolare revocata due anni fa. Catene di versioni, intervalli di validità e la differenza tra un documento pertinente e un documento in vigore.",
    updated: "2026-09",
    updatedLabel: "settembre 2026",
    topic: "AI applicata",
    keywords: [
      "versionamento RAG",
      "catena di versioni documentali",
      "documenti normativi",
      "qualità del retrieval",
      "norma in vigore",
    ],
  },
  "valutare-fornitore-ai-settori-regolati": {
    slug: "valutare-fornitore-ai-settori-regolati",
    question: "Come valutare un fornitore di AI in un settore regolamentato?",
    title: "Valutare un fornitore di AI in un settore regolamentato",
    description:
      "Le domande che separano un fornitore che ha ragionato sulla responsabilità da uno che non l’ha fatto: flussi di dati, sub-responsabili, sostituzione del modello, superficie di audit, obblighi in caso di incidente e dove si ferma davvero la responsabilità.",
    updated: "2026-09",
    updatedLabel: "settembre 2026",
    topic: "AI governance",
    keywords: [
      "valutazione fornitore AI",
      "due diligence AI",
      "responsabilità del fornitore",
      "PLD 2024",
      "settori regolamentati",
    ],
  },
  "llm-on-premise-ospedale": {
    slug: "llm-on-premise-ospedale",
    question: "Come si implementa un LLM on-premise in ospedale?",
    title: "Implementare un LLM on-premise in ospedale",
    description:
      "Sequenza, hardware, perimetro dei dati e governance per un deployment ospedaliero: da cosa partire, quali dati personali non devono mai entrare nell’indice, e quali parti dello stack decidono se il progetto sopravvive al primo audit.",
    updated: "2026-09",
    updatedLabel: "settembre 2026",
    topic: "AI in sanità",
    keywords: [
      "LLM on-premise ospedale",
      "infrastruttura AI sanitaria",
      "governance AI clinica",
      "GDPR dati sanitari",
      "AI sovrana in sanità",
    ],
  },
};

export const ANSWER_LIST_IT = Object.values(ANSWERS_IT);

/**
 * Primary sources cited by the Italian answer pages: same URLs as
 * app/primary-sources.ts, labels and notes in Italian. EUR-Lex ELI links are
 * language-neutral and resolve to the reader's language.
 */
export const FONTI_IT = {
  aiAct: {
    label: "Regolamento (UE) 2024/1689 — Regolamento sull’intelligenza artificiale (AI Act)",
    url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
    note: "definizioni, classificazione del rischio, obblighi di fornitori e deployer",
  },
  pld: {
    label: "Direttiva (UE) 2024/2853 — Direttiva sulla responsabilità per danno da prodotti difettosi",
    url: "https://eur-lex.europa.eu/eli/dir/2024/2853/oj",
    note: "il software come prodotto; recepimento negli Stati membri entro il 9 dicembre 2026",
  },
  nis2: {
    label: "Direttiva (UE) 2022/2555 — NIS2",
    url: "https://eur-lex.europa.eu/eli/dir/2022/2555/oj",
    note: "misure di gestione del rischio di cybersicurezza e notifica degli incidenti",
  },
  dora: {
    label: "Regolamento (UE) 2022/2554 — DORA",
    url: "https://eur-lex.europa.eu/eli/reg/2022/2554/oj",
    note: "gestione del rischio ICT nel settore finanziario, applicabile dal 17 gennaio 2025",
  },
  gdpr: {
    label: "Regolamento (UE) 2016/679 — GDPR",
    url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
    note: "liceità, limitazione della finalità, minimizzazione dei dati, obblighi del responsabile del trattamento",
  },
  mdr: {
    label: "Regolamento (UE) 2017/745 — Regolamento sui dispositivi medici (MDR)",
    url: "https://eur-lex.europa.eu/eli/reg/2017/745/oj",
    note: "quando un software si qualifica come dispositivo medico, e il percorso di conformità che ne consegue",
  },
  garante: {
    label: "Garante per la protezione dei dati personali",
    url: "https://www.garanteprivacy.it/",
    note: "l’autorità italiana di controllo sulla protezione dei dati (GDPR), comprese le sue decisioni sui servizi di AI (le autorità nazionali per l’IA sono AgID e ACN)",
  },
  aifa: {
    label: "AIFA — Agenzia Italiana del Farmaco",
    url: "https://www.aifa.gov.it/",
    note: "autorizzazioni, farmacovigilanza, comunicazioni regolatorie",
  },
} satisfies Record<string, AnswerSource>;
