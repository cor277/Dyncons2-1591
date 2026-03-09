"use client";
import { motion } from "framer-motion";
import { Brain, Cloud, Database } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI Systems",
    desc: "Agents, RAG, Voice AI. Memory, orchestration, governance.",
  },
  {
    icon: Cloud,
    title: "Cloud & Kubernetes",
    desc: "GPU clusters, Zero-Trust, self-hosted LLM in production.",
  },
  {
    icon: Database,
    title: "Data Platforms",
    desc: "From ERP silos to ACID data lakehouse. Zero-ETL. Real-time.",
  },
];

export function PillarsSection() {
  return (
    <section className="bg-[#161B22] py-16 border-y border-[#30363D]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(0,180,216,0.08)] border border-[rgba(0,180,216,0.2)] flex items-center justify-center flex-shrink-0">
                <p.icon size={20} className="text-[#00B4D8]" />
              </div>
              <div>
                <h3 className="font-dm font-semibold text-[#E6EDF3] text-base mb-1">
                  {p.title}
                </h3>
                <p className="text-[#7D8FA3] text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
