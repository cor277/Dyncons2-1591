"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { NEXUS_SERVICE_COUNT } from "@/lib/nexus";

type Locale = "en" | "it";

const STATS = {
  en: [
    { value: NEXUS_SERVICE_COUNT, suffix: "", label: "Containerised services in Nexus MDS Core" },
    { value: 10000, suffix: "+", label: "Enterprise documents processed" },
    { value: 19, suffix: "", label: "Frameworks mapped in CEPF v7" },
    { value: 8, suffix: "+", label: "Regulated sectors served" },
    { value: 3, suffix: "+", label: "Production deployments" },
  ],
  it: [
    { value: NEXUS_SERVICE_COUNT, suffix: "", label: "Servizi containerizzati in Nexus MDS Core" },
    { value: 10000, suffix: "+", label: "Documenti aziendali elaborati" },
    { value: 19, suffix: "", label: "Framework mappati in CEPF v7" },
    { value: 8, suffix: "+", label: "Settori regolamentati serviti" },
    { value: 3, suffix: "+", label: "Deployment in produzione" },
  ],
};

function formatNumber(n: number, locale: Locale) {
  return n.toLocaleString(locale === "it" ? "it-IT" : "en-US");
}

function Counter({ target, suffix, locale }: { target: number; suffix: string; locale: Locale }) {
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
                <Counter target={s.value} suffix={s.suffix} locale={locale} />
              </div>
              <p className="text-[#7D8FA3] text-sm leading-tight">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
