"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 16, suffix: "+", label: "Docker Services in Nexus MDS Core" },
  { value: 10000, suffix: "+", label: "Pharmaceutical documents processed" },
  { value: 5, suffix: "+", label: "Enterprise sectors served" },
  { value: 3, suffix: "", label: "Healthcare platforms deployed" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
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
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 md:py-28 bg-[#0D1117]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
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
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-[#7D8FA3] text-sm leading-tight">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
