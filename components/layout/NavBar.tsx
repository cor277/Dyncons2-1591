"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const navLinks = [
  { label: "Piattaforma", href: "/platform" },
  { label: "Servizi", href: "/#services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[rgba(13,17,23,0.95)] backdrop-blur-md border-b border-[#30363D]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Dynamics Consulting logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-syne text-[#E6EDF3] font-bold text-xs tracking-[0.15em] uppercase leading-none">
                DYNAMICS
              </p>
              <p className="font-syne text-[#00B4D8] font-bold text-xs tracking-[0.15em] uppercase leading-none mt-0.5">
                CONSULTING
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#7D8FA3] hover:text-[#E6EDF3] text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 bg-[#00B4D8] text-[#0D1117] rounded-lg text-sm font-semibold hover:bg-[#00c8f0] transition-all duration-200 shadow-[0_0_15px_rgba(0,180,216,0.3)]"
          >
            Parliamo →
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#7D8FA3] hover:text-[#E6EDF3]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#161B22] border-b border-[#30363D]"
          >
            <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#7D8FA3] hover:text-[#E6EDF3] text-sm font-medium py-2.5 border-b border-[#30363D] last:border-none transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 text-center px-4 py-3 bg-[#00B4D8] text-[#0D1117] rounded-lg text-sm font-semibold"
              >
                Parliamo →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
