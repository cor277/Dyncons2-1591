/**
 * Primary sources, cited by URL rather than paraphrased from memory.
 *
 * EUR-Lex ELI links resolve to the consolidated official text of the act and do
 * not rot the way CELEX search URLs do. Only acts this site actually makes
 * statements about are listed; the list is not a reading list.
 */
export const SOURCES = {
  aiAct: {
    label: "Regulation (EU) 2024/1689 — Artificial Intelligence Act",
    url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
    note: "definitions, risk classification, provider and deployer obligations",
  },
  pld: {
    label: "Directive (EU) 2024/2853 — Product Liability Directive",
    url: "https://eur-lex.europa.eu/eli/dir/2024/2853/oj",
    note: "software as a product; Member State transposition by 9 December 2026",
  },
  nis2: {
    label: "Directive (EU) 2022/2555 — NIS2",
    url: "https://eur-lex.europa.eu/eli/dir/2022/2555/oj",
    note: "cybersecurity risk-management measures and incident reporting",
  },
  dora: {
    label: "Regulation (EU) 2022/2554 — DORA",
    url: "https://eur-lex.europa.eu/eli/reg/2022/2554/oj",
    note: "ICT risk management for the financial sector, applicable since 17 January 2025",
  },
  gdpr: {
    label: "Regulation (EU) 2016/679 — GDPR",
    url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
    note: "lawfulness, purpose limitation, data minimisation, processor obligations",
  },
  cra: {
    label: "Regulation (EU) 2024/2847 — Cyber Resilience Act",
    url: "https://eur-lex.europa.eu/eli/reg/2024/2847/oj",
    note: "security requirements for products with digital elements; staged application",
  },
  cada: {
    label: "COM(2026) 502 final — proposal for a Cloud and AI Development Act",
    url: "https://digital-strategy.ec.europa.eu/en/library/proposal-cloud-and-ai-development-act-cada",
    note: "Commission proposal of 3 June 2026, with its annexes and impact assessment",
  },
  eucs: {
    label: "Regulation (EU) 2019/881 — Cybersecurity Act",
    url: "https://eur-lex.europa.eu/eli/reg/2019/881/oj",
    note: "the basis for the European cybersecurity certification schemes CADA's assurance levels rely on",
  },
  mdr: {
    label: "Regulation (EU) 2017/745 — Medical Devices Regulation",
    url: "https://eur-lex.europa.eu/eli/reg/2017/745/oj",
    note: "when software qualifies as a medical device, and the conformity route that follows",
  },
  edpb: {
    label: "European Data Protection Board",
    url: "https://www.edpb.europa.eu/",
    note: "guidelines and opinions on GDPR interpretation",
  },
  garante: {
    label: "Garante per la protezione dei dati personali",
    url: "https://www.garanteprivacy.it/",
    note: "the Italian supervisory authority, including its decisions on AI services",
  },
  acn: {
    label: "Agenzia per la Cybersicurezza Nazionale (ACN)",
    url: "https://www.acn.gov.it/",
    note: "the Italian NIS2 authority",
  },
  enisa: {
    label: "ENISA",
    url: "https://www.enisa.europa.eu/",
    note: "EU cybersecurity agency — threat landscape and technical guidance",
  },
  aifa: {
    label: "AIFA — Agenzia Italiana del Farmaco",
    url: "https://www.aifa.gov.it/",
    note: "Italian medicines agency: authorisations, pharmacovigilance, regulatory notices",
  },
} as const;
