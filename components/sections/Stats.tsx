"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { NEXUS_SERVICE_COUNT } from "@/lib/nexus";

type Locale = "en" | "it";

// Every figure here is countable: Federfarma Lombarda numbers come from the
// case study, CEPF counts from the v7 snapshot, the service count from lib/nexus.ts.
const STATS = {
  en: [
    { value: NEXUS_SERVICE_COUNT, prefix: "", suffix: "", label: "Containerised services in Nexus MDS Core" },
    { value: 1000, prefix: "", suffix: "+", label: "Pharmacies served — Federfarma Lombarda" },
    { value: 2000, prefix: "~", suffix: "", label: "Queries per day — Federfarma Lombarda" },
    { value: 10000, prefix: "", suffix: "+", label: "Documents vectorised — Federfarma Lombarda" },
    { value: 247, prefix: "", suffix: "", label: "Requirements in CEPF v7" },
  ],
  it: [
    { value: NEXUS_SERVICE_COUNT, prefix: "", suffix: "", label: "Servizi containerizzati in Nexus MDS Core" },
    { value: 1000, prefix: "", suffix: "+", label: "Farmacie servite — Federfarma Lombarda" },
    { value: 2000, prefix: "~", suffix: "", label: "Interrogazioni al giorno — Federfarma Lombarda" },
    { value: 10000, prefix: "", suffix: "+", label: "Documenti vettorializzati — Federfarma Lombarda" },
    { value: 247, prefix: "", suffix: "", label: "Requisiti in CEPF v7" },
  ],
};

// Grouping by hand: it-IT leaves four-digit numbers ungrouped ("1000"), the site writes "1.000".
function formatNumber(n: number, locale: Locale) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, locale === "it" ? "." : ",");
}

function Counter({
  target,
  prefix,
  suffix,
  locale,
}: {
  target: number;
  prefix: string;
  suffix: string;
  locale: Locale;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!inView || animatedRef.current) return;
    animatedRef.current = true;
    const duration = 1400;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(inView ? count : target, locale)}
      {suffix}
    </span>
  );
}

export function Stats({ locale = "en" }: { locale?: Locale }) {
  const stats = STATS[locale];
  return (
    <section className="py-20 md:py-28 bg-[#0D1117]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-syne text-4xl md:text-5xl font-extrabold text-[#00B4D8] mb-2">
                <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} locale={locale} />
              </div>
              <p className="text-[#7D8FA3] text-sm leading-tight">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
