import type { Metadata } from "next";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Dynamics Consulting",
  description: "Privacy policy for dynamicsconsulting.it — how we collect, use, and protect your personal data in compliance with GDPR.",
  alternates: { canonical: "https://dynamicsconsulting.it/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="bg-white dark:bg-slate-950 min-h-screen py-24 px-6">
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-lg">
          <h1>Privacy Policy</h1>
          <p className="lead">
            Last updated: March 2026
          </p>

          <h2>1. Who we are</h2>
          <p>
            Dynamics Consulting S.r.l. (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is the data controller for personal
            data collected through this website. Our registered office is at Via Torino 2, 20123
            Milano, Italy. You can contact our data protection point of contact at{" "}
            <a href="mailto:privacy@dynamicsconsulting.it">privacy@dynamicsconsulting.it</a>.
          </p>

          <h2>2. Data we collect</h2>
          <p>We collect personal data in the following circumstances:</p>
          <ul>
            <li>
              <strong>Contact form submissions:</strong> name, email address, company name, and the
              content of your message. This data is used solely to respond to your enquiry.
            </li>
            <li>
              <strong>Website analytics:</strong> we use privacy-respecting analytics that collect
              aggregated, anonymised data about page visits, referral sources, and device types. No
              individual user is tracked and no cookies are set for this purpose.
            </li>
            <li>
              <strong>Newsletter subscriptions:</strong> email address, used only to send the
              newsletter you subscribed to. You can unsubscribe at any time using the link in every
              email.
            </li>
          </ul>

          <h2>3. Legal basis for processing</h2>
          <p>
            Contact form data is processed on the basis of our legitimate interest in responding to
            business enquiries (Article 6(1)(f) GDPR). Newsletter subscriptions are processed on
            the basis of your explicit consent (Article 6(1)(a) GDPR).
          </p>

          <h2>4. Data retention</h2>
          <p>
            Contact form data is retained for 24 months from the date of submission, after which
            it is deleted unless a business relationship has been established. Newsletter subscriber
            data is retained until you unsubscribe.
          </p>

          <h2>5. Data sharing</h2>
          <p>
            We do not sell your personal data. We share data only with the following categories of
            processors, all bound by data processing agreements:
          </p>
          <ul>
            <li>Email delivery providers (used to send responses to your enquiries)</li>
            <li>Cloud hosting providers (infrastructure for this website)</li>
          </ul>
          <p>
            All processors are based in the European Economic Area or operate under appropriate
            safeguards.
          </p>

          <h2>6. Your rights</h2>
          <p>Under GDPR you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data (&quot;right to be forgotten&quot;)</li>
            <li>Object to processing based on legitimate interests</li>
            <li>Withdraw consent at any time (where processing is based on consent)</li>
            <li>Lodge a complaint with the Italian data protection authority (Garante)</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:privacy@dynamicsconsulting.it">privacy@dynamicsconsulting.it</a>. We
            will respond within 30 days.
          </p>

          <h2>7. Cookies</h2>
          <p>
            This website does not use tracking cookies or third-party advertising cookies. We use a
            session cookie solely to maintain your preferences during a single browsing session.
            This cookie is deleted when you close your browser.
          </p>

          <h2>8. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The &quot;last updated&quot; date at the top of this
            page indicates when it was last revised. Significant changes will be communicated via
            email if you are a subscriber.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
