"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Shield, X, ChevronDown, ChevronUp, Bot } from "lucide-react";
import { useIsItalian } from "@/lib/use-is-italian";

/* ─── Consent configuration ──────────────────────────────── */

const CONSENT_KEY = "dc_privacy_consent";
const CONSENT_VERSION = "2026-03-09-v2";
const DECLINE_COOLDOWN_DAYS = 30;

export interface ConsentCategories {
  essential: true; // always on, cannot be toggled
  analytics: boolean;
  aiChatbot: boolean;
}

export interface ConsentRecord {
  categories: ConsentCategories;
  version: string;
  timestamp: string;
  action: "accepted" | "declined" | "customised";
}

/* ─── Shared helpers (used by other components) ──────────── */

export function getConsentRecord(): ConsentRecord | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const record: ConsentRecord = JSON.parse(stored);
    if (record.version !== CONSENT_VERSION) return null;
    return record;
  } catch {
    return null;
  }
}

export function hasConsent(category: keyof ConsentCategories): boolean {
  const record = getConsentRecord();
  if (!record) return category === "essential";
  return record.categories[category];
}

/* ─── Copy, per language ─────────────────────────────────── */

const COPY = {
  en: {
    dialog: "Privacy consent",
    title: "Your Privacy",
    close: "Decline non-essential and close",
    body: "We respect your privacy. This site uses only essential cookies required for basic functionality. No tracking, no ads, no third-party profiling. Please choose which optional features you'd like to enable. Read our",
    policy: "Privacy Policy",
    policyHref: "/privacy",
    after: "for full details.",
    hide: "Hide details",
    manage: "Manage preferences",
    essential: "Essential",
    essentialDesc:
      "Session cookies and consent preferences. Required for the site to function. No personal data is collected.",
    alwaysOn: "Always on",
    analytics: "Analytics",
    analyticsDesc:
      "Anonymous, aggregated page-visit statistics. No individual tracking, no cookies set for this purpose.",
    assistant: "AI Assistant",
    assistantDesc: "AI-powered chatbot that answers questions about our services.",
    assistantAi: " This is an artificial intelligence system",
    assistantAfter:
      ", not a human. Your conversation messages are processed to generate responses. No data is used for model training.",
    controller: "Data controller",
    declineAll: "Decline all",
    save: "Save preferences",
    essentialOnly: "Essential only",
    acceptAll: "Accept all",
  },
  it: {
    dialog: "Consenso privacy",
    title: "La tua privacy",
    close: "Rifiuta i non essenziali e chiudi",
    body: "Rispettiamo la tua privacy. Questo sito usa solo i cookie essenziali al funzionamento di base. Nessun tracciamento, nessuna pubblicità, nessuna profilazione di terze parti. Scegli quali funzioni facoltative attivare. Leggi la nostra",
    policy: "Informativa privacy",
    policyHref: "/it/privacy",
    after: "per tutti i dettagli.",
    hide: "Nascondi i dettagli",
    manage: "Gestisci le preferenze",
    essential: "Essenziali",
    essentialDesc:
      "Cookie di sessione e preferenze di consenso. Necessari al funzionamento del sito. Nessun dato personale raccolto.",
    alwaysOn: "Sempre attivi",
    analytics: "Statistiche",
    analyticsDesc:
      "Statistiche anonime e aggregate sulle visite alle pagine. Nessun tracciamento individuale, nessun cookie impostato a questo scopo.",
    assistant: "Assistente AI",
    assistantDesc: "Chatbot basato sull’AI che risponde alle domande sui nostri servizi.",
    assistantAi: " È un sistema di intelligenza artificiale",
    assistantAfter:
      ", non una persona. I messaggi della conversazione vengono elaborati per generare le risposte. Nessun dato viene usato per addestrare modelli.",
    controller: "Titolare del trattamento",
    declineAll: "Rifiuta tutto",
    save: "Salva le preferenze",
    essentialOnly: "Solo essenziali",
    acceptAll: "Accetta tutto",
  },
};

/* ─── Component ──────────────────────────────────────────── */

export function PrivacyBanner() {
  const t = useIsItalian() ? COPY.it : COPY.en;
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [categories, setCategories] = useState<ConsentCategories>({
    essential: true,
    analytics: false,
    aiChatbot: false,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const record: ConsentRecord = JSON.parse(stored);
        // Valid record for current version — don't show
        if (record.version === CONSENT_VERSION && record.action !== "declined") return;
        // Declined — respect cooldown
        if (record.action === "declined") {
          const declinedAt = new Date(record.timestamp).getTime();
          const cooldownMs = DECLINE_COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
          if (Date.now() - declinedAt < cooldownMs) return;
        }
      }
    } catch {
      /* localStorage unavailable — show banner */
    }
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const saveConsent = useCallback(
    (cats: ConsentCategories, action: ConsentRecord["action"]) => {
      const record: ConsentRecord = {
        categories: cats,
        version: CONSENT_VERSION,
        timestamp: new Date().toISOString(),
        action,
      };
      try {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
      } catch {
        /* proceed even if storage fails */
      }
      setVisible(false);
    },
    []
  );

  const handleAcceptAll = () => {
    saveConsent({ essential: true, analytics: true, aiChatbot: true }, "accepted");
  };

  const handleSavePreferences = () => {
    saveConsent(categories, "customised");
  };

  const handleDecline = () => {
    saveConsent({ essential: true, analytics: false, aiChatbot: false }, "declined");
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop on mobile when expanded */}
      {expanded && (
        <div
          className="fixed inset-0 bg-black/40 z-[998] md:hidden"
          onClick={() => setExpanded(false)}
        />
      )}

      {/* Banner — bottom-left, leaves bottom-right free for chatbot */}
      <div
        role="dialog"
        aria-label={t.dialog}
        aria-modal="false"
        className={`fixed z-[999] transition-all duration-500 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } bottom-4 left-4 right-4 md:right-auto md:max-w-[460px]`}
      >
        <div className="bg-[#161B22] border border-[#30363D] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00B4D8]/10 flex items-center justify-center">
                <Shield size={16} className="text-[#00B4D8]" />
              </div>
              <h3 className="font-dm font-semibold text-[#E6EDF3] text-sm">
                {t.title}
              </h3>
            </div>
            <button
              onClick={handleDecline}
              className="text-[#7D8FA3] hover:text-[#E6EDF3] transition-colors p-1"
              aria-label={t.close}
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="px-5 pb-2">
            <p className="text-[#7D8FA3] text-xs leading-relaxed">
              {t.body}{" "}
              <Link
                href={t.policyHref}
                target="_blank"
                className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
              >
                {t.policy}
              </Link>{" "}
              {t.after}
            </p>

            {/* Expandable consent categories */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-[#00B4D8] text-xs font-medium mt-3 hover:underline"
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {expanded ? t.hide : t.manage}
            </button>

            {expanded && (
              <div className="mt-3 space-y-2">
                {/* Essential — always on */}
                <div className="flex items-center justify-between p-3 bg-[#0D1117] rounded-lg border border-[#30363D]">
                  <div className="flex-1 pr-3">
                    <p className="text-[#E6EDF3] text-xs font-semibold">{t.essential}</p>
                    <p className="text-[#7D8FA3] text-[11px] leading-relaxed mt-0.5">
                      {t.essentialDesc}
                    </p>
                  </div>
                  <span className="text-[#7D8FA3] text-[10px] font-mono uppercase shrink-0">
                    {t.alwaysOn}
                  </span>
                </div>

                {/* Analytics */}
                <label className="flex items-center justify-between p-3 bg-[#0D1117] rounded-lg border border-[#30363D] cursor-pointer group">
                  <div className="flex-1 pr-3">
                    <p className="text-[#E6EDF3] text-xs font-semibold">{t.analytics}</p>
                    <p className="text-[#7D8FA3] text-[11px] leading-relaxed mt-0.5">
                      {t.analyticsDesc}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={categories.analytics}
                    onChange={(e) =>
                      setCategories({ ...categories, analytics: e.target.checked })
                    }
                    className="h-4 w-4 shrink-0 rounded border-[#30363D] bg-[#161B22] accent-[#00B4D8] cursor-pointer"
                  />
                </label>

                {/* AI Chatbot */}
                <label className="flex items-center justify-between p-3 bg-[#0D1117] rounded-lg border border-[#30363D] cursor-pointer group">
                  <div className="flex-1 pr-3">
                    <div className="flex items-center gap-1.5">
                      <p className="text-[#E6EDF3] text-xs font-semibold">{t.assistant}</p>
                      <Bot size={12} className="text-[#00B4D8]" />
                    </div>
                    <p className="text-[#7D8FA3] text-[11px] leading-relaxed mt-0.5">
                      {t.assistantDesc}
                      <strong className="text-[#E6EDF3]">{t.assistantAi}</strong>
                      {t.assistantAfter}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={categories.aiChatbot}
                    onChange={(e) =>
                      setCategories({ ...categories, aiChatbot: e.target.checked })
                    }
                    className="h-4 w-4 shrink-0 rounded border-[#30363D] bg-[#161B22] accent-[#00B4D8] cursor-pointer"
                  />
                </label>

                {/* Data controller */}
                <p className="text-[#7D8FA3] text-[10px] px-1 pt-1">
                  {t.controller}: Dynamics Consulting — Corrado Patierno ·{" "}
                  <a
                    href="mailto:privacy@dynamicsconsulting.it"
                    className="text-[#00B4D8] underline"
                  >
                    privacy@dynamicsconsulting.it
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="px-5 pb-5 pt-3">
            {expanded ? (
              <div className="flex gap-3">
                <button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-[#30363D] text-[#7D8FA3] hover:text-[#E6EDF3] hover:border-[#E6EDF3] text-xs font-semibold transition-all duration-200"
                >
                  {t.declineAll}
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8]/10 text-xs font-semibold transition-all duration-200"
                >
                  {t.save}
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-[#30363D] text-[#7D8FA3] hover:text-[#E6EDF3] hover:border-[#E6EDF3] text-xs font-semibold transition-all duration-200"
                >
                  {t.essentialOnly}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[#00B4D8] text-[#0D1117] hover:bg-[#00C8F0] text-xs font-semibold transition-all duration-200 shadow-[0_0_16px_rgba(0,180,216,0.3)]"
                >
                  {t.acceptAll}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
