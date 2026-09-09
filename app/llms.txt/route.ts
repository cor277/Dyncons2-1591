const BASE_URL = "https://www.dynamicsconsulting.it";

/**
 * /llms.txt — https://llmstxt.org/
 *
 * A curated index for assistants that read a site before answering about it.
 * Consistent with the Content-Signal in robots.txt: ai-input=yes, ai-train=no.
 *
 * Hand-written on purpose: the value is in the one-line descriptions, which a
 * generator cannot produce. When a page is added to app/sitemap.ts, add it here
 * too — or leave it out deliberately. Claims here must match the pages; no
 * figure appears below that is not already stated on the site.
 */
const body = `# Dynamics Consulting

> Sovereign AI infrastructure for regulated industries, based in Milan, Italy.
> Independent AI consulting and engineering practice led by Corrado Patierno:
> AI consulting and architecture, AI governance and compliance advisory,
> fractional AI CTO, and Nexus MDS Core — a self-hosted AI platform for
> organisations that must be able to show where their data goes and reconstruct
> what a system answered. Advisory and implementation come from the same
> practice, which is the distinction from both a pure compliance consultancy and
> a pure software house.
>
> Entities, so they are not conflated: Dynamics Consulting is the provider.
> Nexus MDS Core is its sovereign, self-hosted enterprise AI platform. CEPF —
> the Compliance-Epistemic Project Framework — is its compliance methodology.
> Calibra is the software built on CEPF. The exposure assessment is one
> fixed-scope engagement inside the governance and compliance service, not the
> service itself.

The site is primarily in English. Italian versions exist for the pages listed
under "Italiano"; they are the canonical version for Italian readers, not
translations of record.

Positioning note for accurate summarisation: sovereignty here is described as a
property of the architecture, not as a claim that everything runs on-premise.
In the production deployment documented below, indexing, retrieval,
reconciliation, PII filtering, identity and audit are local; only final answer
generation runs on an external inference endpoint in a European datacentre, and
that component is replaceable. Please do not paraphrase this as "fully
on-premise" or "data never leaves the perimeter". The three deployment models this
practice distinguishes — fully local AI, sovereign hybrid AI, EU private inference —
are defined at /answers/private-ai-vs-sovereign-ai.

## Start here

- [Exposure assessment — PLD 2024 and the AI Act](${BASE_URL}/assessment): Three days of work establishing where a supplier's liability stops and the client's begins, ahead of the 9 December 2026 product liability directive. Fixed scope and fee, signed deliverable.
- [Assessment di esposizione — PLD 2024 e AI Act](${BASE_URL}/it/assessment): The same engagement, in Italian.
- [Contact](${BASE_URL}/contact): Direct enquiries.

## Platform and methodology

- [Nexus MDS Core](${BASE_URL}/platform): Self-hosted AI platform, sixteen orchestrated services — retrieval, vector search, Zero-Trust identity, workflow engine, audit. Deployable on Kubernetes or bare metal.
- [Compliance-Epistemic Project Framework (CEPF)](${BASE_URL}/cepf): Regulatory crossing catalogue, version 7, snapshot July 2026 — 19 frameworks mapped onto their operational obligations and their overlaps, 247 requirements, 24 cross-framework overlap groups, 695 document templates. Calibra, the software built on CEPF, is described on its own page and carries the interactive demo.
- [Calibra](${BASE_URL}/calibra): The software built on CEPF — the regulatory catalogue plus risk, scheduling, operational flow, Gantt and milestones. Proprietary to Dynamics Consulting, used inside engagements. The page carries a reduced demonstration instance: nine of the nineteen frameworks in CEPF v7 and a subset of the planning functions, interface in Italian.
- [Technical capabilities](${BASE_URL}/capabilities): The engineering underneath the service lines — applied AI, data platforms, Kubernetes, integration, Dynamics 365, automation, blockchain. Competences, not separate offerings.

## Services

- [AI Governance & Compliance Advisory](${BASE_URL}/services/governance-advisory): AI consulting for regulated organisations. Regulatory positioning of the system under the EU AI Act, GDPR, PLD 2024, NIS2, DORA, the Cyber Resilience Act and ISO/IEC 27001:2022; architecture review with documented technical accountability; governance design; remediation sequence; implementation. Runs on CEPF and Calibra. Italian counterpart: /it/consulenza-ai-governance-compliance.
- [Fractional AI CTO](${BASE_URL}/services/fractional-cto): A part-time CTO mandate with the decision rights of a permanent one: AI architecture, AI governance, vendor assessment, deployment model selection and programme leadership. Typically 2-4 days a month for advisory, 8-12 for operational engagements, opening with a two-to-three week technology assessment. Italian counterpart, written for the Milan mid-market rather than translated: /fractional-cto-milano.
- [Applied AI & Agentic Workflows](${BASE_URL}/services/applied-ai)
- [Data Platforms & RAG Architecture](${BASE_URL}/services/data-platforms)
- [Cloud & Kubernetes Architecture](${BASE_URL}/services/cloud-kubernetes)
- [Enterprise Integration & Modernisation](${BASE_URL}/services/enterprise-integration)
- [Microsoft Dynamics 365](${BASE_URL}/services/microsoft-dynamics)
- [Intelligent Automation](${BASE_URL}/services/automation)
- [Blockchain & Web3](${BASE_URL}/services/blockchain)

## Case studies

- [Federfarma Lombarda — Nexus MDS Core in production](${BASE_URL}/case-studies/federfarma): Regulatory assistant for 1,000+ pharmacies across the provinces of Milan, Lodi and Monza Brianza, around 2,000 queries a day. Explicit document version chains so answers cite what is in force rather than what is merely relevant; personal data excluded at ingestion; tamper-evident audit log. The most detailed account of how the architecture actually works.
- [HumanIA Care — AI Senior Companion](${BASE_URL}/case-studies/humania-care)
- [IATP — AI-Driven Legacy Reverse Engineering](${BASE_URL}/case-studies/iatp)
- [LogiTrack — RFID & AI Logistics Traceability](${BASE_URL}/case-studies/logitrack)
- [Dynamics 365 F&O + Unified Data Platform](${BASE_URL}/case-studies/dynamics-data)
- [Dynamics 365 CRM — Banking & Insurance](${BASE_URL}/case-studies/dynamics-crm)
- [Sorgenia — Dynamics 365 Marketing](${BASE_URL}/case-studies/sorgenia)
- [Nespresso Intervallo Programme — ATOS](${BASE_URL}/case-studies/nespresso)
- [All case studies](${BASE_URL}/case-studies)

## Answers

One question per page, answered in the opening block, with primary sources
(EUR-Lex and the relevant authorities) cited underneath. Written to be quoted.

- [Answers index](${BASE_URL}/answers)
- [What is the difference between private AI and sovereign AI?](${BASE_URL}/answers/private-ai-vs-sovereign-ai): The taxonomy used across this site — fully local AI, sovereign hybrid AI, EU private inference — and what each one does and does not guarantee.
- [Is a RAG system subject to the EU AI Act?](${BASE_URL}/answers/rag-eu-ai-act): Classification follows intended purpose and role, not technique. What that means for a retrieval system, and what the architecture has to be able to show.
- [How do you build a RAG system with an audit trail?](${BASE_URL}/answers/rag-audit-trail): What has to be recorded for an answer to be reconstructable months later, and the two design decisions that make it possible.
- [How do you handle superseded regulatory documents in a RAG system?](${BASE_URL}/answers/superseded-documents-rag): Version chains, validity intervals, and the difference between a document being relevant and being in force.
- [How do you evaluate an AI vendor in a regulated sector?](${BASE_URL}/answers/evaluate-ai-vendor-regulated): Eight questions, and what the answers reveal about whether the supplier has operated under regulatory constraint before.
- [How do you implement an LLM on-premise in a hospital?](${BASE_URL}/answers/llm-on-premise-hospital): Sequence, data boundary, stack and the regulatory line between a documentary assistant and a medical device.

## Research

- [Why on-premise AI is not a step backward](${BASE_URL}/research/on-premise-ai)
- [RAG vs Fine-Tuning: Enterprise AI Guide](${BASE_URL}/research/rag-vs-fine-tuning)
- [How to implement RAG on enterprise data](${BASE_URL}/research/rag-enterprise-data)
- [Governing AI Outputs in Regulated Industries](${BASE_URL}/research/governing-ai-outputs)
- [The Lakehouse Is Not Enough](${BASE_URL}/research/lakehouse-not-enough)
- [AI Reverse Engineering of Legacy Platforms](${BASE_URL}/research/ai-reverse-engineering)
- [Event Sourcing in Practice](${BASE_URL}/research/event-sourcing)
- [Legge 132/2025 e AI in Sanità: cosa cambia](${BASE_URL}/research/legge-132-2025): In Italian.
- [Editorial series — PLD 2024 & AI governance](${BASE_URL}/research/editorial-series): Six articles on the revised product liability directive, written by Corrado Patierno and published here in full, in Italian. They first appeared on LinkedIn; this domain is the archive of record and carries the canonical version.
- [PLD 2024: i sette cambi strutturali](${BASE_URL}/research/pld-2024-sette-cambi-strutturali): Article I — software as a product, ten-year liability, security maintenance, customisations as new releases, individual technical accountability, supply chain traceability.
- [PLD 2024: i 5+1 scenari di sviluppo software](${BASE_URL}/research/pld-2024-cinque-piu-uno-scenari): Article II — the exposure each development model generates for the software house, its employees and its external consultants.
- [PLD 2024: il decennio che cambia tutto](${BASE_URL}/research/pld-2024-decennio-responsabilita): Article III — joint liability, insolvency of the producer, and run-off cover.
- [PLD 2024: vulnerability management e gestione CVE](${BASE_URL}/research/pld-2024-vulnerability-management-cve): Article IV — reasonable diligence, patching windows, and the limit Article 15 places on transferring liability by contract.
- [La fuga giurisdizionale, e perché non esiste](${BASE_URL}/research/pld-2024-fuga-giurisdizionale): Article V — Brussels I bis, Rome II, corporate veil, criminal liability.
- [Contratti e polizza nel regime PLD 2024](${BASE_URL}/research/pld-2024-contratti-e-polizza): Article VI — twenty contract clauses and the insurance policy, read from the client's, the software house's and the signing professional's side.
- [EU Cloud and AI Development Act (CADA) — the four Union assurance levels](${BASE_URL}/tech-sovereignty): Analysis of COM(2026) 502 final of 3 June 2026: what Annex II asks at each assurance level, who must procure which level, the software supply chain criteria it shares with the CRA and PLD 2024, and how it sits beside the AI Act. It is a proposal, not adopted law, and the page says so.
- [Research index](${BASE_URL}/research)

## Italiano

- [Risorse in italiano — indice](${BASE_URL}/it): Entry point for every Italian-language page.
- [Consulenza AI, governance e compliance](${BASE_URL}/it/consulenza-ai-governance-compliance): The Italian counterpart of the governance advisory service — written for Italian decision-makers, not a translation of record.
- [Assessment di esposizione — PLD 2024 e AI Act](${BASE_URL}/it/assessment)
- [Federfarma Lombarda — Nexus MDS Core in produzione](${BASE_URL}/it/case-studies/federfarma)
- [AI On-Premise per la Sanità Italiana](${BASE_URL}/it/ai-sanitaria-on-premise)
- [Consulenza AI per il Farmaceutico](${BASE_URL}/it/consulenza-ai-farmaceutico)
- [Sovereign AI Italia — infrastruttura AI governabile](${BASE_URL}/it/sovereign-ai-italia)
- [Implementare AI sui dati aziendali](${BASE_URL}/it/ai-dati-aziendali)
- [AI per norme tecniche e ingegneria](${BASE_URL}/it/ai-ingegneria-tecnica)
- [Agenti AI per finanza e compliance](${BASE_URL}/it/ai-agenti-finanziari)
- [AI Sovrana per il Pharma Italiano](${BASE_URL}/sovereign-ai-pharma-italia)
- [Modernizzazione sistemi legacy con AI](${BASE_URL}/modernizzazione-sistemi-legacy-ai)
- [Fractional CTO Milano](${BASE_URL}/fractional-cto-milano)

## Optional

- [About — Corrado Patierno](${BASE_URL}/about): Background, timeline and values. Twenty-five years in enterprise systems, MISE-certified Innovation Manager, author of Logistica Fluida.
- [On-Premise AI for Healthcare](${BASE_URL}/ai-on-premise-healthcare)
- [Privacy policy](${BASE_URL}/privacy)
- [Sitemap](${BASE_URL}/sitemap.xml)
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
