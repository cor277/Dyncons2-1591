"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Brain,
  Mic,
  Search,
  Shield,
  Code,
  FileSearch,
  Server,
  Zap,
  Package,
  Lock,
  RefreshCw,
  Database,
  Layers,
  Layout,
  GitBranch,
  Network,
  BarChart2,
  Cpu,
  Cloud,
  Activity,
  ScanSearch,
  Link2,
  TrendingUp,
  GitMerge,
  BrainCircuit,
} from "lucide-react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { TechBadge } from "@/components/ui/TechBadge";
import { CTASection } from "@/components/sections/CTASection";

const ICON_MAP: Record<string, React.ElementType> = {
  Brain, Mic, Search, Shield, Code, FileSearch, Server, Zap, Package, Lock,
  RefreshCw, Database, Layers, Layout, GitBranch, Network, BarChart2, Cpu,
  Cloud, Activity, ScanSearch, Link2, TrendingUp, GitMerge, BrainCircuit,
};

export interface Capability {
  iconName: string;
  name: string;
  desc: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface ServicePageLayoutProps {
  eyebrow?: string;
  title: string;
  intro: string;
  tech: string[];
  capabilities: Capability[];
  faqs: FAQ[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  faqSchema?: object;
  children?: React.ReactNode;
}

function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-[#161B22] border border-[#30363D] rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left text-[#E6EDF3] font-dm font-medium text-sm hover:text-[#00B4D8] transition-colors"
          >
            <span>{item.q}</span>
            {open === i ? (
              <ChevronUp size={16} className="flex-shrink-0 text-[#00B4D8] ml-3" />
            ) : (
              <ChevronDown size={16} className="flex-shrink-0 text-[#7D8FA3] ml-3" />
            )}
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-[#7D8FA3] text-sm leading-relaxed border-t border-[#30363D] pt-4">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function ServicePageLayout({
  eyebrow = "Services",
  title,
  intro,
  tech,
  capabilities,
  faqs,
  ctaTitle,
  ctaSubtitle,
  faqSchema,
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <NavBar />

      {/* Hero */}
      <section className="hero-constellation pt-32 pb-20">
        <div className="hero-content max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[#00B4D8] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4">
              {eyebrow}
            </p>
            <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E6EDF3] leading-[1.05] tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-[#7D8FA3] text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              {intro}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-10">
              {tech.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
            <CTAButton label="Let's discuss your project →" href="/contact" variant="primary" />
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 bg-[#161B22]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader eyebrow="Capabilities" title="What we build" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => {
              const IconComponent = ICON_MAP[cap.iconName] ?? Search;
              return (
                <motion.div
                  key={cap.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-[#0D1117] border border-[#30363D] rounded-xl p-6 hover:border-[#00B4D8] transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(0,180,216,0.08)] border border-[rgba(0,180,216,0.2)] flex items-center justify-center flex-shrink-0">
                      <IconComponent size={20} className="text-[#00B4D8]" />
                    </div>
                    <h3 className="font-dm font-semibold text-[#E6EDF3] text-sm">{cap.name}</h3>
                  </div>
                  <p className="text-[#7D8FA3] text-sm leading-relaxed">{cap.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {children}

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#0D1117]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
          </div>
          <div className="max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection title={ctaTitle} subtitle={ctaSubtitle} />
      <Footer />
    </>
  );
}
