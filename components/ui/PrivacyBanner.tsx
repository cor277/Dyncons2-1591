"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Shield, X, ChevronDown, ChevronUp, Bot } from "lucide-react";

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

/* ─── Component ──────────────────────────────────────────── */

export function PrivacyBanner() {
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
        aria-label="Privacy consent"
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
                Your Privacy
              </h3>
            </div>
            <button
              onClick={handleDecline}
              className="text-[#7D8FA3] hover:text-[#E6EDF3] transition-colors p-1"
              aria-label="Decline non-essential and close"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="px-5 pb-2">
            <p className="text-[#7D8FA3] text-xs leading-relaxed">
              We respect your privacy. This site uses only essential cookies required
              for basic functionality. No tracking, no ads, no third-party profiling.
              Please choose which optional features you&apos;d like to enable.
              Read our{" "}
              <Link
                href="/privacy"
                target="_blank"
                className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
              >
                Privacy Policy
              </Link>{" "}
              for full details.
            </p>

            {/* Expandable consent categories */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-[#00B4D8] text-xs font-medium mt-3 hover:underline"
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {expanded ? "Hide details" : "Manage preferences"}
            </button>

            {expanded && (
              <div className="mt-3 space-y-2">
                {/* Essential — always on */}
                <div className="flex items-center justify-between p-3 bg-[#0D1117] rounded-lg border border-[#30363D]">
                  <div className="flex-1 pr-3">
                    <p className="text-[#E6EDF3] text-xs font-semibold">Essential</p>
                    <p className="text-[#7D8FA3] text-[11px] leading-relaxed mt-0.5">
                      Session cookies and consent preferences. Required for the site
                      to function. No personal data is collected.
                    </p>
                  </div>
                  <span className="text-[#7D8FA3] text-[10px] font-mono uppercase shrink-0">
                    Always on
                  </span>
                </div>

                {/* Analytics */}
                <label className="flex items-center justify-between p-3 bg-[#0D1117] rounded-lg border border-[#30363D] cursor-pointer group">
                  <div className="flex-1 pr-3">
                    <p className="text-[#E6EDF3] text-xs font-semibold">Analytics</p>
                    <p className="text-[#7D8FA3] text-[11px] leading-relaxed mt-0.5">
                      Anonymous, aggregated page-visit statistics. No individual
                      tracking, no cookies set for this purpose.
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
                      <p className="text-[#E6EDF3] text-xs font-semibold">AI Assistant</p>
                      <Bot size={12} className="text-[#00B4D8]" />
                    </div>
                    <p className="text-[#7D8FA3] text-[11px] leading-relaxed mt-0.5">
                      AI-powered chatbot that answers questions about our services.
                      <strong className="text-[#E6EDF3]"> This is an artificial intelligence system</strong>,
                      not a human. Your conversation messages are processed to generate
                      responses. No data is used for model training.
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
                  Data controller: Dynamics Consulting — Corrado Patierno ·{" "}
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
                  Decline all
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8]/10 text-xs font-semibold transition-all duration-200"
                >
                  Save preferences
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-[#30363D] text-[#7D8FA3] hover:text-[#E6EDF3] hover:border-[#E6EDF3] text-xs font-semibold transition-all duration-200"
                >
                  Essential only
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-[#00B4D8] text-[#0D1117] hover:bg-[#00C8F0] text-xs font-semibold transition-all duration-200 shadow-[0_0_16px_rgba(0,180,216,0.3)]"
                >
                  Accept all
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
