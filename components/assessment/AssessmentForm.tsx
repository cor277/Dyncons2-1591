"use client";

import { useState } from "react";
import Link from "next/link";

const COPY = {
  it: {
    fields: {
      name: "Nome e cognome",
      role: "Ruolo",
      organisation: "Organizzazione",
      email: "Email",
      sector: "Settore",
    },
    submit: "Invia la richiesta",
    submitting: "Invio in corso…",
    privacyLead: "I dati sono trattati esclusivamente per rispondere a questa richiesta.",
    privacyLink: "Informativa completa",
    consent:
      "Ho letto l’informativa e acconsento al trattamento dei dati per rispondere a questa richiesta.",
    success:
      "Richiesta ricevuta. Rispondo personalmente entro due giorni lavorativi.",
    error:
      "Invio non riuscito. Scrivi direttamente a info@dynamicsconsulting.it e la richiesta arriva comunque.",
    consentRequired: "È necessario acconsentire al trattamento dei dati.",
  },
  en: {
    fields: {
      name: "Full name",
      role: "Role",
      organisation: "Organisation",
      email: "Email",
      sector: "Sector",
    },
    submit: "Send the request",
    submitting: "Sending…",
    privacyLead: "Your data is processed solely to respond to this request.",
    privacyLink: "Full privacy notice",
    consent:
      "I have read the privacy notice and consent to my data being processed to respond to this request.",
    success: "Request received. I reply personally within two working days.",
    error:
      "Sending failed. Write directly to info@dynamicsconsulting.it and the request will reach me anyway.",
    consentRequired: "Consent to data processing is required.",
  },
} as const;

const inputClass =
  "w-full rounded-lg border border-[#30363D] bg-[#0D1117] text-[#E6EDF3] placeholder-[#586471] px-4 py-3 text-base focus:outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] transition";

const labelClass = "block text-sm font-semibold text-[#E6EDF3] mb-1.5";

type Locale = "it" | "en";

export function AssessmentForm({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const [form, setForm] = useState({
    name: "",
    role: "",
    organisation: "",
    email: "",
    sector: "",
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyConsent) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          locale,
          privacyConsent,
          consentTimestamp: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", role: "", organisation: "", email: "", sector: "" });
        setPrivacyConsent(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-[#00B4D8]/40 bg-[#0D1117] px-6 py-8 text-[#E6EDF3] text-lg"
      >
        {t.success}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="af-name" className={labelClass}>
            {t.fields.name}
          </label>
          <input
            id="af-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="af-role" className={labelClass}>
            {t.fields.role}
          </label>
          <input
            id="af-role"
            name="role"
            type="text"
            required
            autoComplete="organization-title"
            value={form.role}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="af-organisation" className={labelClass}>
            {t.fields.organisation}
          </label>
          <input
            id="af-organisation"
            name="organisation"
            type="text"
            required
            autoComplete="organization"
            value={form.organisation}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="af-email" className={labelClass}>
            {t.fields.email}
          </label>
          <input
            id="af-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="af-sector" className={labelClass}>
          {t.fields.sector}
        </label>
        <input
          id="af-sector"
          name="sector"
          type="text"
          required
          value={form.sector}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="pt-1">
        <label className="flex items-start gap-3 text-sm text-[#7D8FA3] leading-relaxed cursor-pointer">
          <input
            type="checkbox"
            required
            checked={privacyConsent}
            onChange={(e) => setPrivacyConsent(e.target.checked)}
            className="mt-1 h-4 w-4 flex-shrink-0 rounded border-[#30363D] bg-[#0D1117] accent-[#00B4D8]"
          />
          <span>{t.consent}</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading" || !privacyConsent}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#00B4D8] text-[#0D1117] text-base font-semibold hover:bg-[#00C8F0] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        {status === "loading" ? t.submitting : t.submit}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-[#F0883E]">
          {t.error}
        </p>
      )}

      <p className="text-sm text-[#7D8FA3] leading-relaxed pt-2">
        {t.privacyLead}{" "}
        <Link
          href="/privacy"
          target="_blank"
          rel="noopener"
          className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
        >
          {t.privacyLink}
        </Link>
        .
      </p>
    </form>
  );
}
