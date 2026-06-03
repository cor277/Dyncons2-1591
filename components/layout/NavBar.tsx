"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { clsx } from "clsx";

interface NavChild {
  label: string;
  href: string;
  desc?: string;
}

interface NavLink {
  label: string;
  href?: string;
  children?: NavChild[];
}

const navLinks: NavLink[] = [
  {
    label: "Platform",
    children: [
      {
        label: "Nexus MDS Core",
        href: "/platform",
        desc: "Self-hosted AI platform — 16 services",
      },
      {
        label: "CEPF Methodology",
        href: "/cepf",
        desc: "Compliance Estimation & Planning Framework",
      },
    ],
  },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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
            {navLinks.map((l) =>
              l.children ? (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(l.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 text-[#7D8FA3] hover:text-[#E6EDF3] text-sm font-medium transition-colors duration-200"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === l.label}
                  >
                    {l.label}
                    <ChevronDown
                      size={14}
                      className={clsx(
                        "transition-transform duration-200",
                        openDropdown === l.label && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === l.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[280px]"
                      >
                        <div className="bg-[#161B22] border border-[#30363D] rounded-xl shadow-lg p-2">
                          {l.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="block px-4 py-3 rounded-lg hover:bg-[#1C2333] transition-colors group"
                            >
                              <div className="text-[#E6EDF3] text-sm font-medium group-hover:text-[#00B4D8] transition-colors">
                                {c.label}
                              </div>
                              {c.desc && (
                                <div className="text-[#7D8FA3] text-xs mt-0.5">
                                  {c.desc}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.label}
                  href={l.href!}
                  className="text-[#7D8FA3] hover:text-[#E6EDF3] text-sm font-medium transition-colors duration-200"
                >
                  {l.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 bg-[#00B4D8] text-[#0D1117] rounded-lg text-sm font-semibold hover:bg-[#00c8f0] transition-all duration-200 shadow-[0_0_15px_rgba(0,180,216,0.3)]"
          >
            Request a Nexus demo →
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
              {navLinks.map((l) =>
                l.children ? (
                  <div key={l.label} className="border-b border-[#30363D] last:border-none">
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === l.label ? null : l.label)
                      }
                      className="w-full flex items-center justify-between text-[#7D8FA3] hover:text-[#E6EDF3] text-sm font-medium py-2.5 transition-colors"
                    >
                      <span>{l.label}</span>
                      <ChevronDown
                        size={16}
                        className={clsx(
                          "transition-transform duration-200",
                          mobileExpanded === l.label && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileExpanded === l.label && (
                      <div className="pb-3 pl-3 flex flex-col gap-2">
                        {l.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileExpanded(null);
                            }}
                            className="block py-2"
                          >
                            <div className="text-[#E6EDF3] text-sm font-medium">
                              {c.label}
                            </div>
                            {c.desc && (
                              <div className="text-[#7D8FA3] text-xs mt-0.5">
                                {c.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href!}
                    onClick={() => setMobileOpen(false)}
                    className="text-[#7D8FA3] hover:text-[#E6EDF3] text-sm font-medium py-2.5 border-b border-[#30363D] last:border-none transition-colors"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 text-center px-4 py-3 bg-[#00B4D8] text-[#0D1117] rounded-lg text-sm font-semibold"
              >
                Request a Nexus demo →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
