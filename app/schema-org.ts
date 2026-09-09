/* Shared JSON-LD, emitted by both root layouts. */

/**
 * Stable node identifiers. Page-level JSON-LD references these instead of
 * repeating the entity, so a consumer merges the graph rather than reading
 * several disconnected copies of the same organisation.
 */
export const BASE_URL = "https://www.dynamicsconsulting.it";
export const ORG_ID = `${BASE_URL}/#organization`;
export const PERSON_ID = `${BASE_URL}/#corrado-patierno`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const NEXUS_ID = `${BASE_URL}/platform#software`;
export const CEPF_ID = `${BASE_URL}/cepf#framework`;
export const CALIBRA_ID = `${BASE_URL}/calibra#software`;

export const schemaOrg = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: "Dynamics Consulting",
    alternateName: "Dynamics Consulting — Corrado Patierno",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.jpg`,
    founder: { "@id": PERSON_ID },
    foundingDate: "2019",
    areaServed: ["IT", "EU"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Torino 2",
      addressLocality: "Milano",
      postalCode: "20123",
      addressCountry: "IT",
    },
    vatID: "IT10651160961",
    knowsAbout: [
      "AI consulting",
      "AI governance",
      "AI compliance",
      "Sovereign AI Infrastructure",
      "On-premise LLM deployment",
      "Enterprise AI architecture",
      "Healthcare AI",
      "Pharmaceutical AI",
      "GDPR-ready AI",
      "AI Act compliance",
      "PLD 2024 product liability for software",
      "RAG pipelines",
      "Multi-agent systems",
      "n8n orchestration",
      "Docker enterprise AI stack",
    ],
    description:
      "Italian AI consulting and engineering practice: AI governance and compliance advisory, AI architecture, and sovereign on-premise AI platforms for organisations in regulated industries. Author of the Compliance-Epistemic Project Framework (CEPF) and builder of Nexus MDS Core.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+39-340-725-3246",
      contactType: "sales",
      email: "info@dynamicsconsulting.it",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Corrado Patierno",
    jobTitle: "AI Solution Architect & Founder",
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "Enterprise AI Architecture",
      "AI governance and compliance",
      "Sovereign AI",
      "Healthcare AI Infrastructure",
      "On-premise LLM",
      "RAG Systems",
      "n8n agentic workflows",
      "Kubernetes",
      "Zero-Trust security",
      "Microsoft Dynamics 365",
    ],
    sameAs: [
      "https://www.linkedin.com/in/corradopatierno",
      "https://amzn.eu/d/06ZlECJe",
    ],
    author: {
      "@type": "Book",
      name: "Logistica Fluida",
      datePublished: "2026",
    },
  },
  {
    /* Full node — version, feature list — lives on /platform, under the same @id. */
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": NEXUS_ID,
    name: "Nexus MDS Core",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Linux, Kubernetes, Docker",
    description:
      "Enterprise self-hosted AI platform. ~16 orchestrated Docker services including LLM inference, RAG pipeline, Zero-Trust auth, vector search, workflow engine, and observability stack. GDPR-ready and architected for AI Act requirements. Designed for healthcare, pharma, and regulated industries.",
    creator: { "@id": ORG_ID },
    url: `${BASE_URL}/platform`,
  },
  {
    /* CEPF — the methodology. Calibra, the software built on it, is a separate node. */
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": CEPF_ID,
    name: "Compliance-Epistemic Project Framework",
    alternateName: "CEPF",
    url: `${BASE_URL}/cepf`,
    version: "7",
    inLanguage: "en",
    creator: { "@id": ORG_ID },
    description:
      "Proprietary compliance methodology: a regulatory crossing catalogue mapping regulatory regimes onto the operational obligations each one produces and onto the points where those obligations overlap. Version 7, snapshot July 2026 — 19 frameworks, 247 requirements, 24 cross-framework overlap groups, 695 document templates.",
    about: [
      "EU AI Act",
      "GDPR",
      "PLD 2024",
      "NIS2",
      "DORA",
      "ISO/IEC 27001:2022",
      "Cyber Resilience Act",
      "ISO 56001:2024",
    ],
  },
  {
    /* Calibra — the software implementing CEPF. */
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": CALIBRA_ID,
    name: "Calibra",
    applicationCategory: "BusinessApplication",
    url: `${BASE_URL}/calibra`,
    creator: { "@id": ORG_ID },
    isBasedOn: { "@id": CEPF_ID },
    description:
      "Software built on the Compliance-Epistemic Project Framework (CEPF). Beyond the regulatory catalogue it carries risk, scheduling, operational flow, Gantt and milestones. A reduced demo runs on the CEPF page.",
  },
];
