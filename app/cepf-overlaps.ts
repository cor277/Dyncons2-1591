/**
 * The cross-framework overlap groups of CEPF v7, published.
 *
 * Derived from the CEPF catalogue (snapshot July 2026): group name, the
 * regulatory regimes each group spans, and how many catalogue requirements sit
 * inside it. Counts and framework attributions come straight from the
 * catalogue — they are not estimated here.
 *
 * What is deliberately NOT published: the requirement codes and titles, the
 * effort model and the shared-control discount percentages. Those are the
 * catalogue itself, and the catalogue is the product. What is published is the
 * shape of it, which is what makes the claim checkable.
 */

export const CEPF_VERSION = "7";
export const CEPF_SNAPSHOT = "July 2026";
export const CEPF_FRAMEWORK_COUNT = 19;
export const CEPF_REQUIREMENT_COUNT = 247;
export const CEPF_TEMPLATE_COUNT = 695;
/** Distinct catalogue requirements that sit in at least one overlap group. */
export const REQUIREMENTS_IN_GROUPS = 75;
/** Group memberships, counting a requirement once per group it belongs to. */
export const GROUP_MEMBERSHIPS = 91;

/** Public labels for the catalogue's framework codes. */
export const FRAMEWORK_LABELS: Record<string, string> = {
  "AI-ACT": "EU AI Act",
  NIS2: "NIS2",
  GDPR: "GDPR",
  DORA: "DORA",
  ISO27001: "ISO/IEC 27001",
  "SOX-IT": "SOX IT (ITGC)",
  PLD: "PLD 2024",
  CRA: "Cyber Resilience Act",
  "CEPF-EXT": "CEPF extensions",
};

export interface OverlapGroup {
  /** Group name, in English. */
  name: string;
  /** Framework codes the group spans, as they appear in the catalogue. */
  frameworks: string[];
  /** Catalogue requirements inside the group. */
  requirements: number;
  /** The shared control, in the vocabulary a CISO or auditor would use. */
  control: string;
}

/**
 * All 24 groups. Ordered as in the catalogue: the first thirteen are the
 * organisational regimes, the last eleven the product-liability and product-
 * security cluster added in v7 for PLD 2024 and the Cyber Resilience Act.
 */
export const OVERLAP_GROUPS: OverlapGroup[] = [
  {
    name: "Access controls and IAM",
    frameworks: ["SOX-IT", "NIS2", "ISO27001", "GDPR"],
    requirements: 7,
    control:
      "Logical access, identity management, multi-factor authentication, segregation of duties, user access review, privileged access management.",
  },
  {
    name: "Audit trail and logging",
    frameworks: ["SOX-IT", "NIS2", "ISO27001", "AI-ACT", "CEPF-EXT"],
    requirements: 5,
    control:
      "Immutable audit trail, centralised logging, log integrity. The AI Act requirement lands on the same log infrastructure as the security ones.",
  },
  {
    name: "Change management",
    frameworks: ["SOX-IT", "ISO27001", "AI-ACT"],
    requirements: 3,
    control:
      "Formal change process on in-scope systems: request, test, approval, deployment, traceability of what changed and why.",
  },
  {
    name: "Disaster recovery and business continuity",
    frameworks: ["SOX-IT", "NIS2"],
    requirements: 2,
    control: "Recovery procedures, RTO and RPO targets, continuity plan and periodic test.",
  },
  {
    name: "Risk assessment",
    frameworks: ["SOX-IT", "NIS2", "ISO27001", "GDPR", "DORA", "AI-ACT"],
    requirements: 7,
    control:
      "Formal risk assessment — IT, cyber, privacy, ICT and AI. Six regimes ask for one, and they can share a method and a register without sharing a scope.",
  },
  {
    name: "Vendor and supply chain management",
    frameworks: ["SOX-IT", "NIS2", "GDPR", "DORA"],
    requirements: 5,
    control:
      "Third-party management: service levels, audit rights, data processing agreements, supplier register.",
  },
  {
    name: "Incident notification",
    frameworks: ["NIS2", "GDPR", "DORA"],
    requirements: 3,
    control:
      "Notification duties to authorities — cyber authority, data protection authority, financial regulator. Different clocks, one detection and triage capability.",
  },
  {
    name: "Policy and register production",
    frameworks: ["SOX-IT", "NIS2", "ISO27001", "GDPR", "AI-ACT"],
    requirements: 9,
    control:
      "The documented policies, procedures and registers each regime requires. The largest group in the catalogue, and the one most often duplicated.",
  },
  {
    name: "Testing and validation",
    frameworks: ["SOX-IT", "ISO27001", "GDPR", "DORA", "AI-ACT", "CEPF-EXT"],
    requirements: 7,
    control:
      "User acceptance testing, resilience testing, conformity assessment activity, internal audit.",
  },
  {
    name: "Vulnerability management",
    frameworks: ["NIS2", "ISO27001", "DORA"],
    requirements: 3,
    control: "Vulnerability scanning, patch management, secure development practice.",
  },
  {
    name: "Incident response capability",
    frameworks: ["NIS2", "ISO27001", "DORA"],
    requirements: 3,
    control: "Internal capability to detect, contain, eradicate and recover — distinct from the duty to notify.",
  },
  {
    name: "Security awareness training",
    frameworks: ["NIS2", "ISO27001"],
    requirements: 2,
    control:
      "Security training for staff and for management. ISO/IEC 27001 A.6.3 covers all personnel; NIS2 makes management training an obligation of its own.",
  },
  {
    name: "AI data protection stack",
    frameworks: ["AI-ACT", "GDPR", "CEPF-EXT"],
    requirements: 7,
    control:
      "The technical and legal stack specific to AI projects processing personal data in hybrid architectures: DPIA and fundamental rights impact assessment, quasi-identifier analysis, audited anonymisation.",
  },
  {
    name: "Software bill of materials",
    frameworks: ["PLD", "CRA"],
    requirements: 2,
    control:
      "One SBOM, two regulatory purposes: documentary evidence under the product liability directive, vulnerability management instrument under the Cyber Resilience Act.",
  },
  {
    name: "Product technical documentation",
    frameworks: ["PLD", "CRA", "AI-ACT"],
    requirements: 3,
    control:
      "The technical file. Structure and content are largely shared between PLD 2024, the CRA and the AI Act — written once, indexed three ways.",
  },
  {
    name: "Product risk assessment",
    frameworks: ["PLD", "CRA", "AI-ACT"],
    requirements: 3,
    control:
      "Product safety risk assessment: defectiveness under PLD, cybersecurity under the CRA, AI risk under the AI Act. Shared method, shared register, different acceptance criteria.",
  },
  {
    name: "Vulnerability handling process",
    frameworks: ["PLD", "CRA", "NIS2"],
    requirements: 3,
    control:
      "Product vulnerability handling: PLD obliges a remedy, the CRA obliges a formal process, NIS2 applies to entities in scope. One policy, one toolchain.",
  },
  {
    name: "Security update obligations",
    frameworks: ["PLD", "CRA"],
    requirements: 2,
    control:
      "Post-market security update duties, nearly identical in PLD and the CRA — same procedure, same distribution channel.",
  },
  {
    name: "Post-market surveillance",
    frameworks: ["PLD", "CRA"],
    requirements: 2,
    control: "One surveillance plan, one monitoring system, the same reporting sources.",
  },
  {
    name: "Product incident response and recall",
    frameworks: ["PLD", "CRA", "NIS2"],
    requirements: 3,
    control:
      "Incident response for product defects, serious-incident notification under the CRA, incident management under NIS2 — partially shareable, not identical.",
  },
  {
    name: "Supply chain product security",
    frameworks: ["PLD", "CRA", "NIS2"],
    requirements: 3,
    control:
      "Supplier register for recourse purposes, cyber supply chain due diligence, supply chain security measures. One vendor register serving three duties.",
  },
  {
    name: "Conformity assessment and CE marking",
    frameworks: ["PLD", "CRA"],
    requirements: 3,
    control:
      "Conformity documentation for placing on the market and the CRA conformity assessment and EU declaration — a product in scope of both runs one exercise.",
  },
  {
    name: "Secure product SDLC",
    frameworks: ["CRA", "ISO27001"],
    requirements: 2,
    control:
      "Secure development lifecycle under the CRA and ISO/IEC 27001 A.8.25 — same process, same tooling, same team.",
  },
  {
    name: "Product evidence trail",
    frameworks: ["PLD", "ISO27001"],
    requirements: 2,
    control:
      "Evidence trail that can be defended in litigation under PLD, and security logging under ISO/IEC 27001 A.8.15 — the same log system serving two very different purposes.",
  },
];
