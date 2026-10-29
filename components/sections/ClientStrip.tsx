"use client";
import { useIsItalian } from "@/lib/use-is-italian";

/**
 * Two lists, deliberately separate.
 *
 * `directClients`  — direct contractual relationships with Dynamics Consulting.
 * `experienceWith` — programmes delivered with and for others: work delivered
 *                    through a system integrator, or with an organisation that
 *                    was also an employer. The heading for this list must never
 *                    imply a direct commercial relationship.
 *
 * Reclassifying an organisation is moving one string between the two arrays.
 * An empty list renders nothing. When in doubt, an organisation goes in the
 * second list.
 *
 * ATOS and Avanade were also employers (see the /about timeline), so they are
 * never listed as clients, even though Avanade later re-engaged a former
 * employee as an external consultant.
 */
const directClients = [
  "AESYS",
  "Banca Mediolanum",
  "Unicorno Ventures",
];

const experienceWith: string[] = [
  "ATOS",
  "Avanade",
  "illimity",
];

function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className="marquee-track">
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center px-10 border-r border-[#30363D] last:border-none"
          >
            <span className="text-[#7D8FA3] hover:text-[#E6EDF3] text-sm font-mono font-medium tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-200 cursor-default">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientStrip() {
  const isItalian = useIsItalian();
  return (
    <section className="py-12 bg-[#161B22] border-y border-[#30363D] overflow-hidden">
      {directClients.length > 0 && (
        <>
          <p className="text-center text-[#7D8FA3] text-xs font-mono uppercase tracking-[0.15em] mb-8">
            {isItalian ? "Clienti diretti" : "Direct clients"}
          </p>
          <Marquee items={directClients} />
        </>
      )}

      {experienceWith.length > 0 && (
        <>
          <p className="text-center text-[#7D8FA3] text-xs font-mono uppercase tracking-[0.15em] mb-8 mt-12">
            {isItalian ? "Programmi realizzati con e per" : "Programmes delivered with and for"}
          </p>
          <Marquee items={experienceWith} />
        </>
      )}
    </section>
  );
}
