import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for dynamicsconsulting.it — how we collect, use, and protect your personal data in compliance with GDPR and the EU AI Act.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="bg-[#0D1117] min-h-screen py-24 px-6">
        <article className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-syne prose-headings:text-[#E6EDF3] prose-p:text-[#7D8FA3] prose-li:text-[#7D8FA3] prose-strong:text-[#E6EDF3] prose-a:text-[#00B4D8] prose-a:underline hover:prose-a:text-[#E6EDF3]">
          <h1>Privacy Policy</h1>
          <p className="lead text-[#7D8FA3]">
            Last updated: 9 March 2026 · Version 2026-03-09-v2
          </p>

          {/* ── 1. DATA CONTROLLER ─────────────────────────────── */}
          <h2>1. Data controller</h2>
          <p>
            Dynamics Consulting di Corrado Patierno (&quot;we&quot;, &quot;us&quot;,
            &quot;our&quot;) is the data controller within the meaning of Article 4(7)
            of Regulation (EU) 2016/679 (GDPR).
          </p>
          <ul>
            <li>Registered office: Via Torino 2, 20123 Milano, Italy</li>
            <li>VAT number: IT 10651160961</li>
            <li>
              Data protection contact:{" "}
              <a href="mailto:privacy@dynamicsconsulting.it">
                privacy@dynamicsconsulting.it
              </a>
            </li>
          </ul>

          {/* ── 2. DATA WE COLLECT ─────────────────────────────── */}
          <h2>2. Personal data we collect</h2>

          <h3>2.1 Contact form</h3>
          <p>
            When you submit the contact form we collect: name, email address,
            company name (optional), project type (optional), referral source
            (optional), and message content. This data is processed{" "}
            <strong>solely to respond to your enquiry</strong>.
          </p>

          <h3>2.2 Website analytics</h3>
          <p>
            If you enable the &quot;Analytics&quot; preference in the consent banner, we
            collect anonymous, aggregated page-visit statistics (page URLs,
            referral source, device type, country). No cookies are set for this
            purpose and no individual user is identified or tracked.
          </p>

          <h3>2.3 AI Assistant (chatbot)</h3>
          <p>
            This website may feature an AI-powered conversational assistant. In
            accordance with{" "}
            <strong>Article 50(1) of the EU AI Act (Regulation (EU) 2024/1689)</strong>
            , we inform you that:
          </p>
          <ul>
            <li>
              The chatbot is an <strong>artificial intelligence system</strong>, not a
              human being. It functions as a digital assistant that provides
              information about our services and expertise.
            </li>
            <li>
              Your conversation messages are sent to a third-party AI model
              provider to generate responses. Messages are processed in real time
              and are <strong>not used to train or fine-tune</strong> any AI model.
            </li>
            <li>
              Conversation data is retained for a maximum of 90 days for quality
              assurance, then permanently deleted.
            </li>
            <li>
              The AI Assistant is activated only if you explicitly enable the
              &quot;AI Assistant&quot; category in the consent banner.
            </li>
          </ul>

          <h3>2.4 Cookies and local storage</h3>
          <p>We use the following client-side storage:</p>
          <div className="overflow-x-auto -mx-2 px-2"><table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>dc_privacy_consent</code></td>
                <td>localStorage</td>
                <td>
                  Stores your consent preferences (categories accepted, version,
                  timestamp)
                </td>
                <td>Until cleared by you or policy version update</td>
              </tr>
            </tbody>
          </table></div>
          <p>
            We do not use tracking cookies, advertising cookies, or third-party
            profiling cookies.
          </p>

          {/* ── 3. LEGAL BASIS ──────────────────────────────────── */}
          <h2>3. Legal basis for processing</h2>
          <div className="overflow-x-auto -mx-2 px-2"><table>
            <thead>
              <tr>
                <th>Processing activity</th>
                <th>Legal basis (GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contact form submission</td>
                <td>
                  Explicit consent — Art. 6(1)(a). You provide consent by
                  checking the required checkbox before submitting.
                </td>
              </tr>
              <tr>
                <td>Analytics</td>
                <td>
                  Consent — Art. 6(1)(a). Optional, controlled via banner toggle.
                </td>
              </tr>
              <tr>
                <td>AI Assistant conversations</td>
                <td>
                  Consent — Art. 6(1)(a). Optional, controlled via banner toggle.
                </td>
              </tr>
              <tr>
                <td>Essential cookies / consent record</td>
                <td>
                  Legitimate interest — Art. 6(1)(f). Strictly necessary for the
                  website to function and to demonstrate GDPR compliance.
                </td>
              </tr>
            </tbody>
          </table></div>

          {/* ── 4. CONSENT MECHANISM ──────────────────────────── */}
          <h2>4. Consent mechanism and records</h2>
          <p>
            On your first visit a consent banner is displayed. You may:
          </p>
          <ul>
            <li>
              <strong>Accept all</strong> — enables analytics and AI Assistant.
            </li>
            <li>
              <strong>Essential only</strong> — no optional processing is enabled.
            </li>
            <li>
              <strong>Manage preferences</strong> — choose individual categories
              (Analytics, AI Assistant) with granular toggles.
            </li>
          </ul>
          <p>
            Each choice is recorded in your browser&apos;s local storage with a
            timestamp, consent version, and selected categories. This record
            serves as proof of consent under Art. 7(1) GDPR. You can change your
            preferences at any time by clearing your browser data, which will
            cause the banner to re-appear.
          </p>

          <h3>4.1 Withdrawal of consent</h3>
          <p>
            You may withdraw consent at any time by:
          </p>
          <ul>
            <li>Clearing your browser local storage (the banner will re-appear)</li>
            <li>
              Emailing{" "}
              <a href="mailto:privacy@dynamicsconsulting.it">
                privacy@dynamicsconsulting.it
              </a>
            </li>
          </ul>
          <p>
            Withdrawal does not affect the lawfulness of processing carried out
            before the withdrawal (Art. 7(3) GDPR).
          </p>

          {/* ── 5. DATA RETENTION ──────────────────────────────── */}
          <h2>5. Data retention</h2>
          <div className="overflow-x-auto -mx-2 px-2"><table>
            <thead>
              <tr>
                <th>Data category</th>
                <th>Retention period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contact form submissions</td>
                <td>
                  24 months from submission, then deleted unless a business
                  relationship has been established
                </td>
              </tr>
              <tr>
                <td>AI Assistant conversations</td>
                <td>90 days, then permanently deleted</td>
              </tr>
              <tr>
                <td>Analytics data</td>
                <td>Aggregated and anonymous — no individual deletion applies</td>
              </tr>
              <tr>
                <td>Consent record (local storage)</td>
                <td>
                  Until you clear browser data or a new policy version is published
                </td>
              </tr>
            </tbody>
          </table></div>

          {/* ── 6. DATA SHARING & PROCESSORS ───────────────────── */}
          <h2>6. Data sharing and sub-processors</h2>
          <p>
            We do not sell, rent, or trade your personal data. Data is shared
            only with the following categories of processors, all bound by Data
            Processing Agreements (DPAs):
          </p>
          <div className="overflow-x-auto -mx-2 px-2"><table>
            <thead>
              <tr>
                <th>Processor category</th>
                <th>Purpose</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Email delivery (Resend)</td>
                <td>Sending contact-form notification emails</td>
                <td>USA (see Section 7)</td>
              </tr>
              <tr>
                <td>Cloud hosting (Vercel)</td>
                <td>Website infrastructure and edge delivery</td>
                <td>EU / USA (see Section 7)</td>
              </tr>
              <tr>
                <td>AI model provider</td>
                <td>Generating AI Assistant responses</td>
                <td>USA (see Section 7)</td>
              </tr>
            </tbody>
          </table></div>

          {/* ── 7. INTERNATIONAL TRANSFERS ──────────────────────── */}
          <h2>7. International data transfers</h2>
          <p>
            Some of our sub-processors are based in the United States. These
            transfers are protected by:
          </p>
          <ul>
            <li>
              The <strong>EU–US Data Privacy Framework</strong> (adequacy
              decision C(2023) 4745), where the processor is a certified
              participant; or
            </li>
            <li>
              <strong>Standard Contractual Clauses</strong> (SCCs) approved by
              Commission Decision 2021/914, supplemented by a Transfer Impact
              Assessment where required.
            </li>
          </ul>
          <p>
            You may request a copy of the applicable safeguards by writing to{" "}
            <a href="mailto:privacy@dynamicsconsulting.it">
              privacy@dynamicsconsulting.it
            </a>
            .
          </p>

          {/* ── 8. AUTOMATED DECISION-MAKING & AI ─────────────── */}
          <h2>8. Automated decision-making and AI transparency</h2>

          <h3>8.1 GDPR — Article 22</h3>
          <p>
            We do not subject you to decisions based solely on automated
            processing that produce legal effects or similarly significantly
            affect you. The AI Assistant provides informational responses only
            and does not make decisions about contracts, pricing, or eligibility.
          </p>

          <h3>8.2 EU AI Act — Article 50 transparency obligations</h3>
          <p>
            In compliance with Regulation (EU) 2024/1689 (the AI Act), we
            disclose:
          </p>
          <ul>
            <li>
              <strong>Nature of the system:</strong> the AI Assistant is a
              conversational AI system that generates text-based responses using
              a large language model (LLM).
            </li>
            <li>
              <strong>Provider:</strong> the underlying model is supplied by a
              third-party AI model provider. We do not develop or train the base
              model.
            </li>
            <li>
              <strong>Capabilities and limitations:</strong> the assistant
              provides general information about our services and technology
              expertise. It may produce inaccurate or incomplete answers. It is
              not a substitute for professional advice.
            </li>
            <li>
              <strong>Human oversight:</strong> critical decisions (proposals,
              contracts, technical architectures) are always made by a human
              professional — Corrado Patierno or his team.
            </li>
            <li>
              <strong>Identification:</strong> the chatbot clearly identifies
              itself as an AI system in every interaction and never impersonates
              a human.
            </li>
            <li>
              <strong>Data processing:</strong> conversation messages are
              processed in real time to generate replies and are not used to
              train or improve any AI model. See Section 2.3 for retention
              details.
            </li>
          </ul>

          {/* ── 9. YOUR RIGHTS ──────────────────────────────────── */}
          <h2>9. Your rights under GDPR</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li>
              <strong>Access</strong> (Art. 15) — obtain a copy of the data we
              hold about you
            </li>
            <li>
              <strong>Rectification</strong> (Art. 16) — correct inaccurate data
            </li>
            <li>
              <strong>Erasure</strong> (Art. 17) — request deletion (&quot;right
              to be forgotten&quot;)
            </li>
            <li>
              <strong>Restriction</strong> (Art. 18) — limit how we process your
              data while a dispute is resolved
            </li>
            <li>
              <strong>Data portability</strong> (Art. 20) — receive your data in
              a structured, machine-readable format
            </li>
            <li>
              <strong>Object</strong> (Art. 21) — object to processing based on
              legitimate interests
            </li>
            <li>
              <strong>Withdraw consent</strong> (Art. 7(3)) — at any time, as
              described in Section 4.1
            </li>
          </ul>
          <p>
            To exercise any right, email{" "}
            <a href="mailto:privacy@dynamicsconsulting.it">
              privacy@dynamicsconsulting.it
            </a>
            . We will respond within <strong>30 days</strong> (extendable by 60
            days for complex requests, with prior notification).
          </p>

          {/* ── 10. SUPERVISORY AUTHORITY ───────────────────────── */}
          <h2>10. Supervisory authority</h2>
          <p>
            If you believe your data protection rights have been violated, you
            have the right to lodge a complaint with:
          </p>
          <ul>
            <li>
              <strong>Garante per la protezione dei dati personali</strong>
              <br />
              Piazza Venezia 11, 00187 Roma, Italy
              <br />
              Website:{" "}
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.garanteprivacy.it
              </a>
              <br />
              Email: protocollo@gpdp.it · PEC: protocollo@pec.gpdp.it
            </li>
          </ul>

          {/* ── 11. SECURITY MEASURES ──────────────────────────── */}
          <h2>11. Security measures</h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect personal data, including:
          </p>
          <ul>
            <li>HTTPS/TLS encryption for all data in transit</li>
            <li>Access controls and authentication on all backend systems</li>
            <li>Regular security updates and dependency auditing</li>
            <li>Minimisation of data collected (data minimisation principle)</li>
          </ul>

          {/* ── 12. CHILDREN ───────────────────────────────────── */}
          <h2>12. Children&apos;s privacy</h2>
          <p>
            This website and its services are intended for business
            professionals. We do not knowingly collect personal data from
            individuals under the age of 16. If you believe we have collected
            data from a minor, please contact us immediately.
          </p>

          {/* ── 13. CHANGES ────────────────────────────────────── */}
          <h2>13. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. When we do, we update
            the version number and &quot;last updated&quot; date at the top. If
            the consent version changes, the privacy banner will automatically
            re-appear to request your updated consent. Material changes are also
            communicated via email to existing contacts.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
