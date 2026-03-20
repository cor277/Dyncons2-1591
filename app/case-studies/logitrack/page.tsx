import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { TechBadge } from "@/components/ui/TechBadge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LogiTrack — RFID & AI-Powered Warehouse, Production & Shipping Traceability | Case Studies",
  description:
    "End-to-end logistics traceability with RFID UHF, NFC, AI anomaly detection, blockchain certification, and real-time analytics. Cloud-native, edge-ready, integrated with SAP and Power Platform.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/case-studies/logitrack" },
};

const tech = [
  "RFID UHF",
  "NFC",
  "Docker",
  "Kubernetes",
  "Apache OpenWhisk",
  "Keycloak",
  "Dremio",
  "Power BI",
  "Weaviate",
  "n8n",
  "Prometheus",
  "Grafana",
  "Elasticsearch",
  "APISIX",
  "Blockchain",
  "PostgreSQL",
  "Power Platform",
];

export default function LogiTrackCaseStudy() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/case-studies"
              className="text-sm text-[#00B4D8] hover:text-[#00C8F0] mb-6 inline-flex items-center gap-1"
            >
              ← All case studies
            </Link>
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-4">
              Logistics · RFID · AI · Traceability
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#E6EDF3]">
              LogiTrack — RFID &amp; AI-powered traceability for warehouse, production and shipping
            </h1>
            <p className="text-lg text-[#7D8FA3]">
              A cloud-native, edge-ready platform that combines RFID UHF for real-time warehouse and
              production tracking with NFC for post-sale customer interaction. AI-driven anomaly
              detection, blockchain certification, and deep integration with SAP and Power Platform
              deliver end-to-end supply-chain visibility and operational excellence.
            </p>
          </div>
        </section>

        {/* Metrics bar */}
        <section className="border-b border-[#30363D] bg-[#161B22]">
          <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.5%", label: "Shipping error reduction" },
              { value: "20×", label: "Faster inventory cycles" },
              { value: "8–12 mo", label: "Typical ROI payback" },
              { value: "End-to-end", label: "Item-level traceability" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-2xl md:text-3xl font-bold text-[#E6EDF3]">{m.value}</div>
                <div className="text-xs md:text-sm text-[#7D8FA3] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Body */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10 text-[#7D8FA3] leading-relaxed text-lg">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">The challenge</h2>
              <p>
                Modern logistics operations face a compounding problem: goods move faster than
                information. Manual barcode scanning cannot keep up with high-throughput warehouses,
                multi-stage production lines, and strict regulatory traceability requirements.
                Shipping errors, inventory blind spots, and counterfeiting risks erode margins and
                customer trust.
              </p>
              <p className="mt-4">
                LogiTrack was designed from the ground up to eliminate these gaps — replacing
                line-of-sight scanning with bulk RFID reads, manual checks with AI-powered
                validation, and disconnected spreadsheets with a single, real-time data layer
                spanning every operational touchpoint.
              </p>
            </div>

            {/* Architecture */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Cloud-native, edge-ready architecture</h2>
              <p>
                LogiTrack runs on a containerised stack (Docker/Kubernetes) with serverless API
                functions via Apache OpenWhisk, enterprise identity management through Keycloak, and
                data virtualisation via Dremio feeding Power BI dashboards. Edge computing support
                means RFID gates and industrial label printers operate locally at critical
                operational points, with data synchronisation to the central platform.
              </p>
              <p className="mt-4">
                Two deployment modes are available. The <strong className="text-[#E6EDF3]">integrated
                configuration</strong> with eGO CRM APPs on the Power Platform provides centralised
                governance, low-code automation via Power Automate, self-service portals via Power
                Pages, and Copilot Studio virtual assistants. The <strong className="text-[#E6EDF3]">
                standalone mode</strong> offers full autonomy for air-gapped environments, extreme
                customisation needs, or organisations without Microsoft 365 licences. Both share the
                same core engine.
              </p>
            </div>

            {/* Warehouse */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Warehouse management</h2>
              <p>
                A rugged, offline-first mobile app handles every warehouse flow: goods receipt with
                ASN validation, intelligent putaway with optimal location suggestions, RFID-guided
                picking, cyclic and mass inventories without stopping operations, and automatically
                tracked internal transfers. The touch-optimised interface works with gloves, in low
                light, and supports multi-language, multi-site deployments.
              </p>
            </div>

            {/* Production */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Production traceability</h2>
              <p>
                Every production lot receives a unique EPC-encoded RFID tag. As it moves through
                work phases, gates automatically register transitions and update the work order
                status in real time. Machine addressability via RFID auto-configures processing
                parameters for each lot. Material consumption is captured via the mobile app with
                automatic backflush. Cycle-time KPIs and OEE are calculated live for every work
                centre and operator.
              </p>
            </div>

            {/* Shipping */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Zero-touch shipping validation</h2>
              <p>
                After packing, each handling unit (HU) is sealed with an RFID label. As it passes
                through the exit gate, the system automatically validates contents against the
                shipping order — verifying quantities, articles, and destination. A perfect match
                triggers automatic SAP synchronisation and transport-document generation. Any
                discrepancy blocks the shipment with an immediate operator alert. Result: 99.5%
                reduction in shipping errors.
              </p>
            </div>

            {/* Returns & second channel */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Returns, refurbishment and second channel</h2>
              <p>
                Returned goods enter automatic virtual quarantine. The system reads the RFID tag,
                recovers the product&apos;s full history, and suggests the next action — refurbish,
                remarket via second channel, or scrap — based on configurable rules. Refurbishment
                triggers auto-generated work orders. Once completed, the product is re-certified
                with a blockchain-anchored state update for full transparency.
              </p>
              <p className="mt-4">
                External processing at third-party workshops is tracked end-to-end: outbound
                registration, dwell-time monitoring with automatic delay alerts, inbound RFID
                verification to prevent fraudulent substitution, and real-time visibility during
                every external phase.
              </p>
            </div>

            {/* NFC & end consumer */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">NFC consumer experience and authenticity</h2>
              <p>
                End customers tap their smartphone on the NFC-enabled product to open a white-label
                brand app showing the complete product journey — from raw materials to final
                delivery, with timestamped, geolocated records for every phase. A blockchain-backed
                certificate of authenticity prevents counterfeiting. Customers can register for
                warranty extension and personalised support, while brands gain post-sale behavioural
                insights.
              </p>
            </div>

            {/* AI */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">AI and intelligent automation</h2>
              <p>
                LogiTrack embeds a full AI ecosystem: Weaviate for vector indexing, Elysia for
                natural-language processing, and n8n for orchestrating intelligent pipelines. Key
                capabilities include:
              </p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li>
                  <strong className="text-[#E6EDF3]">Semantic search</strong> — natural-language
                  queries across ASNs, delivery notes, and transport documents, returning relevant
                  results even from imprecise or partial queries.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">RFID–video correlation</strong> — ONVIF camera
                  integration to automatically link RFID events with video recordings for audit,
                  discrepancy investigation, and flow optimisation.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Anomaly detection</strong> — automatic
                  identification of irregular patterns in gate throughput, scrap rates, cycle times,
                  and operator behaviour, with proactive alerts before issues impact operations.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Conversational AI</strong> — chat interfaces
                  integrated with Microsoft Teams, brand portals, and customer-facing bots, enabling
                  operators to query the system in natural language for reports, decisions, and support.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Narrative reporting</strong> — the AI engine
                  auto-generates natural-language reports explaining trends, highlighting anomalies,
                  and suggesting corrective actions. Managers receive personalised executive
                  summaries instead of interpreting raw dashboards.
                </li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Enterprise-grade security and compliance</h2>
              <p>
                Identity and access management via Keycloak supports SSO (SAML, OAuth2), MFA (OTP,
                biometrics, smart cards), Active Directory integration, and granular RBAC/ABAC
                authorisation. All API traffic passes through APISIX with JWT authentication, mutual
                TLS for critical connections, and rate limiting. Data is encrypted AES-256 at rest
                and TLS 1.3 in transit.
              </p>
              <p className="mt-4">
                LogiTrack is designed for native compliance with EPCglobal/GS1, ISO 18000-63 (RFID
                UHF), ISO 14443/15693 (NFC), and ONVIF. GDPR is addressed through privacy-by-design,
                right to erasure, and immutable audit trails. The AI components are classified as
                low-risk under the EU AI Act, with full explainability and transparency.
              </p>
              <p className="mt-4">
                An integrated SIEM provides continuous security monitoring with multi-level event
                correlation, automatic anomaly alerting, documented incident-response procedures, and
                encrypted backups with configurable retention and guaranteed RTO/RPO.
              </p>
            </div>

            {/* Monitoring */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Monitoring and analytics</h2>
              <p>
                Prometheus and Grafana deliver real-time metrics on gate throughput, RFID read
                errors, API latency, and infrastructure health. Elasticsearch centralises application
                and audit logs. Dremio virtualises heterogeneous datasets — RFID events, SAP orders,
                production work orders, warehouse movements — into a single semantic data layer
                consumed by Power BI for interactive dashboards.
              </p>
              <p className="mt-4">
                Dashboards are role-segmented: executives see high-level trends, cross-site
                comparisons, and aggregated KPIs; operations managers get real-time, granular views
                per gate, warehouse zone, production line, and operator. Advanced features include
                interactive gate heatmaps, event timelines with drill-down, RFID–video correlations,
                configurable threshold alerts, and data export for external analysis and compliance.
              </p>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Results</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong className="text-[#E6EDF3]">99.5% reduction</strong> in shipping errors
                  through automatic RFID gate validation against planned orders.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">20× faster inventories</strong> — mass counts
                  completed in minutes instead of hours, with zero operational downtime.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Complete product biography</strong> — every
                  item tracked from inbound receipt through production, shipping, returns, and
                  end-consumer authentication.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">AI-driven decision support</strong> — anomaly
                  detection, predictive analytics, and narrative reporting replace manual analysis.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">8–12 month ROI</strong> payback through error
                  reduction, time optimisation, and productivity gains.
                </li>
                <li>
                  <strong className="text-[#E6EDF3]">Blockchain-certified authenticity</strong> for
                  premium products, accessible to end consumers via NFC tap.
                </li>
              </ul>
            </div>

            {/* Tech */}
            <div>
              <h2 className="text-2xl font-bold text-[#E6EDF3] mb-4">Technologies used</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
