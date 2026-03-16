"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showBadge) return;
    const timer = setTimeout(() => setShowBadge(false), 8000);
    return () => clearTimeout(timer);
  }, [showBadge]);

  // Lock body scroll on mobile when popup is open
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Listen for custom open event from other components
  useEffect(() => {
    const handler = () => {
      setIsOpen(true);
      setShowBadge(false);
    };
    window.addEventListener("open-chatbot", handler);
    return () => window.removeEventListener("open-chatbot", handler);
  }, []);

  const openChat = useCallback(() => {
    setIsOpen(true);
    setShowBadge(false);
  }, []);

  const closeChat = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
        {/* Badge */}
        {showBadge && (
          <button
            onClick={() => { setShowBadge(false); openChat(); }}
            className="chatbot-badge-enter bg-[#161B22] border border-[#00B4D8] text-[#E6EDF3] text-xs font-medium px-3 py-1.5 rounded-full shadow-lg cursor-pointer hover:bg-[#1C2333] transition-colors"
          >
            Ask Nexus →
          </button>
        )}

        {/* FAB with pulse ring */}
        <button
          onClick={openChat}
          aria-label="Talk to Nexus"
          className="group relative w-14 h-14 rounded-full bg-[#00B4D8] text-[#0D1117] flex items-center justify-center shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:scale-[1.08] transition-transform duration-200"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full chatbot-pulse-ring" />
          {/* Chat icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          {/* Tooltip */}
          <span className="absolute bottom-full mb-2 right-0 bg-[#161B22] border border-[#30363D] text-[#E6EDF3] text-xs px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Talk to Nexus
          </span>
        </button>
      </div>

      {/* Popup — anchored bottom-right on desktop, fullscreen on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[10000] sm:inset-auto sm:bottom-24 sm:right-6 sm:bg-transparent bg-black/50 sm:backdrop-blur-none backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) closeChat(); }}
        >
          <div className="relative w-full h-full sm:w-[440px] sm:h-[680px] sm:rounded-2xl overflow-hidden bg-[#0D1117] border border-[#30363D] sm:shadow-[0_0_60px_rgba(0,180,216,0.2)] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-[#30363D] shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src="/logo.jpg"
                    alt="Dynamics Consulting"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-[#E6EDF3] text-xs font-semibold leading-tight">
                    Nexus Digital Twin
                  </p>
                  <p className="text-[#7D8FA3] text-[10px] leading-tight">
                    Powered by Nexus MDS Core
                  </p>
                </div>
              </div>
              <button
                onClick={closeChat}
                aria-label="Close chat"
                className="text-[#7D8FA3] hover:text-[#E6EDF3] transition-colors p-1"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            {/* Iframe */}
            <iframe
              src="https://public.dynamicsconsulting.it"
              title="Nexus Digital Twin"
              className="flex-1 w-full border-0"
              allow="microphone; camera; clipboard-write; fullscreen"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes chatbot-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 180, 216, 0.4);
          }
          70% {
            box-shadow: 0 0 0 14px rgba(0, 180, 216, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 180, 216, 0);
          }
        }
        .chatbot-pulse-ring {
          animation: chatbot-pulse 2.5s ease-out infinite;
        }
        @keyframes chatbot-badge-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .chatbot-badge-enter {
          animation: chatbot-badge-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
