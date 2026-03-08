const clients = [
  "ATOS",
  "Avanade",
  "AESYS",
  "illimity",
  "Banco Mediolanum",
  "Unicorno Ventures",
];

export function ClientStrip() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-12 bg-[#161B22] border-y border-[#30363D] overflow-hidden">
      <p className="text-center text-[#7D8FA3] text-xs font-mono uppercase tracking-[0.15em] mb-8">
        Clienti &amp; Partner
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center px-10 border-r border-[#30363D] last:border-none"
            >
              <span className="text-[#7D8FA3] hover:text-[#E6EDF3] text-sm font-mono font-medium tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-200 cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
