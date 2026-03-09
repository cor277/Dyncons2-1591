"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, X } from "lucide-react";

const CONSENT_KEY = "dc_privacy_consent";
const CONSENT_VERSION = "2026-03-09";

interface ConsentRecord {
  accepted: boolean;
  version: string;
  timestamp: string;
}

export function PrivacyBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const record: ConsentRecord = JSON.parse(stored);
        if (record.accepted && record.version === CONSENT_VERSION) return;
      }
    } catch {
      /* localStorage unavailable — show banner */
    }
    // Small delay so the banner slides in after page load
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    const record: ConsentRecord = {
      accepted: true,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
    } catch {
      /* proceed even if storage fails */
    }
    setVisible(false);
  };

  const handleDecline = () => {
    const record: ConsentRecord = {
      accepted: false,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
    } catch {
      /* proceed even if storage fails */
    }
    setVisible(false);
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

      {/* Banner — bottom-left, leaves bottom-right free for future chatbot */}
      <div
        className={`fixed z-[999] transition-all duration-500 ease-out ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        } bottom-4 left-4 right-4 md:right-auto md:max-w-[420px]`}
      >
        <div className="bg-[#161B22] border border-[#30363D] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00B4D8]/10 flex items-center justify-center">
                <Shield size={16} className="text-[#00B4D8]" />
              </div>
              <h3 className="font-dm font-semibold text-[#E6EDF3] text-sm">
                Privacy &amp; Cookies
              </h3>
            </div>
            <button
              onClick={handleDecline}
              className="text-[#7D8FA3] hover:text-[#E6EDF3] transition-colors p-1"
              aria-label="Close privacy banner"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="px-5 pb-2">
            <p className="text-[#7D8FA3] text-xs leading-relaxed">
              We use essential cookies only (no tracking, no ads). By continuing to browse this site
              you accept our{" "}
              <Link
                href="/privacy"
                target="_blank"
                className="text-[#00B4D8] underline hover:text-[#E6EDF3]"
              >
                Privacy Policy
              </Link>
              .
            </p>

            {/* Expandable details */}
            {expanded && (
              <div className="mt-3 p-3 bg-[#0D1117] rounded-lg border border-[#30363D] text-xs text-[#7D8FA3] space-y-2">
                <p className="font-semibold text-[#E6EDF3]">What we collect:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong className="text-[#E6EDF3]">Contact form:</strong> name, email, company,
                    message — only when you submit the form, with your explicit consent.
                  </li>
                  <li>
                    <strong className="text-[#E6EDF3]">Analytics:</strong> anonymous, aggregated page
                    visit data. No individual tracking.
                  </li>
                  <li>
                    <strong className="text-[#E6EDF3]">Session cookie:</strong> keeps your preferences
                    during a single visit. Deleted when you close the browser.
                  </li>
                </ul>
                <p>
                  Data controller: Dynamics Consulting — Corrado Patierno.
                  Contact:{" "}
                  <a
                    href="mailto:privacy@dynamicsconsulting.it"
                    className="text-[#00B4D8] underline"
                  >
                    privacy@dynamicsconsulting.it
                  </a>
                </p>
              </div>
            )}

            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#00B4D8] text-xs font-medium mt-2 hover:underline"
            >
              {expanded ? "Show less" : "Learn more"}
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-3 px-5 pb-5 pt-3">
            <button
              onClick={handleDecline}
              className="flex-1 px-4 py-2.5 rounded-lg border border-[#30363D] text-[#7D8FA3] hover:text-[#E6EDF3] hover:border-[#E6EDF3] text-xs font-semibold transition-all duration-200"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2.5 rounded-lg bg-[#00B4D8] text-[#0D1117] hover:bg-[#00C8F0] text-xs font-semibold transition-all duration-200 shadow-[0_0_16px_rgba(0,180,216,0.3)]"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
