/**
 * Two lists, deliberately separate.
 *
 * `directClients`  — direct contractual relationships with Dynamics Consulting.
 * `experienceWith` — everything else: work delivered while employed elsewhere, or
 *                    through an agency or system integrator. The heading for this
 *                    list must never imply a commercial relationship.
 *
 * Reclassifying an organisation is moving one string between the two arrays.
 * An empty list renders nothing.
 *
 * Note: an organisation can appear both in the /about timeline as a former
 * employer and here as a direct client — Avanade re-engaged a former employee
 * as an external consultant. The two pages must stay consistent about that.
 */
const directClients = [
  "ATOS",
  "Avanade",
  "AESYS",
  "illimity",
  "Banca Mediolanum",
  "Unicorno Ventures",
];

const experienceWith: string[] = [];

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
  return (
    <section className="py-12 bg-[#161B22] border-y border-[#30363D] overflow-hidden">
      {directClients.length > 0 && (
        <>
          <p className="text-center text-[#7D8FA3] text-xs font-mono uppercase tracking-[0.15em] mb-8">
            Clients
          </p>
          <Marquee items={directClients} />
        </>
      )}

      {experienceWith.length > 0 && (
        <>
          <p className="text-center text-[#7D8FA3] text-xs font-mono uppercase tracking-[0.15em] mb-8 mt-12">
            Experience gained at
          </p>
          <Marquee items={experienceWith} />
        </>
      )}
    </section>
  );
}
