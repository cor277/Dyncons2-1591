import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import { CTAButton } from "@/components/ui/CTAButton";

const URL = "https://www.dynamicsconsulting.it/cra-11-settembre";

const TITLE = "Dall’11 settembre hai 24 ore per segnalare. Chi le usa?";
const DESCRIPTION =
  "Dall’11 settembre 2026 si applica l’articolo 14 del Regolamento (UE) 2024/2847: allarme entro 24 ore, notifica entro 72, rapporto finale a seguire. Il test in tre domande, chi rientra, cosa serve avere pronto.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    images: OG_IMAGE,
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
    locale: "it_IT",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

/**
 * Landing page delle uscite LinkedIn sulla scadenza dell'11 settembre 2026.
 *
 * Server component: l'HTML arriva completo dal server, senza stato client, così
 * la pagina è leggibile dai crawler — inclusi quelli dei sistemi AI — al primo byte.
 *
 * Ogni data e ogni termine qui dentro viene dal Regolamento (UE) 2024/2847 e dalle
 * pagine di sintesi della Commissione. Non aggiungere date o articoli senza fonte.
 */

/* Le quattro date del CRA, tenute distinte: la confusione fra settembre 2026 e
   dicembre 2027 è l'errore più comune su questa materia. */
const DATE = [
  {
    quando: "10 dicembre 2024",
    cosa: "Il regolamento è entrato in vigore.",
  },
  {
    quando: "11 giugno 2026",
    cosa: "Si applica il Capo IV (artt. 35-51): la notifica degli organismi di valutazione della conformità.",
  },
  {
    quando: "11 settembre 2026",
    cosa: "Si applica l’articolo 14: gli obblighi di segnalazione. È la data di questa pagina.",
    evidenza: true,
  },
  {
    quando: "11 dicembre 2027",
    cosa: "Si applicano le disposizioni principali. Da qui la distinta base del software (SBOM) è obbligatoria nella documentazione tecnica.",
  },
];

const PRONTO = [
  {
    t: "Un trigger scritto.",
    b: "Con la decorrenza della conoscenza definita: da quale evento parte l’orologio, e chi lo dichiara partito. Senza questa riga, il termine di 24 ore non ha un inizio verificabile.",
  },
  {
    t: "Una persona nominata, più un sostituto.",
    b: "Nome e cognome, non una funzione. Un ruolo scoperto per ferie o per turno è un termine non presidiato.",
  },
  {
    t: "Un canale di ricezione delle segnalazioni.",
    b: "Pubblicato e presidiato. Le vulnerabilità attivamente sfruttate arrivano più spesso da fuori che da dentro.",
  },
  {
    t: "Il monitoraggio dei componenti, incrociato con le fonti di vulnerabilità.",
    b: "Sapere cosa contiene il prodotto serve a poco se nessuno confronta quell’elenco con quello che viene pubblicato ogni giorno.",
  },
  {
    t: "L’accesso operativo alla piattaforma di segnalazione.",
    b: "Verificato prima di doverlo usare. Le credenziali si recuperano in ore, e le ore sono contate.",
  },
  {
    t: "I tre modelli precompilati.",
    b: "Allarme, notifica, rapporto finale. Scrivere un modello mentre il termine corre è il modo più affidabile per mancarlo.",
  },
  {
    t: "Un registro delle decisioni, incluse quelle negative.",
    b: "Anche non segnalare è una decisione, e va motivata per iscritto quanto l’altra. È la sola prova che la valutazione è stata fatta.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    description: DESCRIPTION,
    url: URL,
    inLanguage: "it-IT",
    isPartOf: {
      "@type": "WebSite",
      name: "Dynamics Consulting",
      url: "https://www.dynamicsconsulting.it",
    },
    about: {
      "@type": "Legislation",
      name: "Regolamento (UE) 2024/2847 — Cyber Resilience Act",
      legislationIdentifier: "Regulation (EU) 2024/2847",
      legislationJurisdiction: "European Union",
    },
    author: {
      "@type": "Person",
      name: "Corrado Patierno",
      url: "https://www.dynamicsconsulting.it/about",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Assessment di esposizione — Cyber Resilience Act",
    serviceType: "Assessment normativo",
    description:
      "Tre giornate di lavoro per stabilire se e a quale titolo un prodotto rientra negli obblighi di segnalazione del Regolamento (UE) 2024/2847, con qualificazione documentata e firmata, trigger scritto, nomi e modelli di segnalazione.",
    areaServed: "IT",
    provider: {
      "@type": "Organization",
      name: "Dynamics Consulting",
      url: "https://www.dynamicsconsulting.it",
    },
    offers: {
      "@type": "Offer",
      price: "4500",
      priceCurrency: "EUR",
      url: URL,
      availability: "https://schema.org/InStock",
    },
  },
];

export default function CraSettembrePage() {
  return (
    <div lang="it" className="bg-[#0D1117] min-h-screen text-[#E6EDF3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Testata — solo logo, il resto della pagina non deve competere con la lettura */}
      <header className="border-b border-[#21262D]">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <Link
            href="/"
            aria-label="Dynamics Consulting — home"
            className="inline-flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Dynamics Consulting"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-syne text-[#E6EDF3] font-bold text-xs tracking-[0.15em] uppercase leading-none">
                DYNAMICS
              </p>
              <p className="font-syne text-[#00B4D8] group-hover:text-[#00C8F0] font-bold text-xs tracking-[0.15em] uppercase leading-none mt-0.5 transition-colors">
                CONSULTING
              </p>
            </div>
          </Link>
        </div>
      </header>

      <main>
        {/* Apertura */}
        <section className="px-6 pt-16 pb-14">
          <div className="max-w-2xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-5">
              Obblighi di segnalazione — Regolamento (UE) 2024/2847
            </p>
            <h1 className="font-syne text-3xl md:text-[2.6rem] font-extrabold leading-[1.15] mb-6">
              Dall’11 settembre hai 24 ore per segnalare. Chi le usa?
            </h1>
            <div className="space-y-5 text-[#9BA8B9] text-lg leading-relaxed">
              <p>
                L’11 settembre 2026 si applica l’articolo 14 del Cyber Resilience Act. Da quel
                giorno, il fabbricante di un prodotto con elementi digitali ha ventiquattro ore per
                lanciare l’allarme quando viene a conoscenza di una vulnerabilità attivamente
                sfruttata o di un incidente grave. Non ventiquattro ore per risolvere: ventiquattro
                ore per segnalare.
              </p>
              <p>
                La domanda vera non è se il prodotto rientra. È chi, dentro l’organizzazione, ha il
                potere di far partire quella segnalazione, e in quanto tempo si accorge che è il
                momento di usarlo. Sono due cose che si scoprono in mezz’ora, e quasi nessuno le ha
                messe per iscritto.
              </p>
            </div>
          </div>
        </section>

        {/* Il test in tre domande */}
        <section className="px-6 pb-4">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-lg border border-[#00B4D8] bg-[#11161D] px-6 py-7 md:px-8 md:py-9">
              <h2 className="font-syne text-2xl md:text-[1.75rem] font-extrabold mb-6">
                Il test in tre domande
              </h2>
              <ol className="space-y-6">
                <li>
                  <p className="text-[#E6EDF3] font-semibold mb-1.5">
                    1. Chi è la persona che può sospendere il sistema?
                  </p>
                  <p className="text-[#9BA8B9] leading-relaxed">
                    Serve un nome e un sostituto, non una funzione. «Il responsabile IT» non è una
                    risposta: quando l’orologio parte, una funzione non decide e non firma.
                  </p>
                </li>
                <li>
                  <p className="text-[#E6EDF3] font-semibold mb-1.5">
                    2. Può farlo senza chiedere autorizzazione?
                  </p>
                  <p className="text-[#9BA8B9] leading-relaxed">
                    Se no, quel potere non esiste. Esiste il potere di chi lo autorizza, ed è quella
                    la persona da nominare — insieme al suo sostituto, e con la stessa reperibilità.
                  </p>
                </li>
                <li>
                  <p className="text-[#E6EDF3] font-semibold mb-1.5">
                    3. Entro quanto se ne accorge?
                  </p>
                  <p className="text-[#9BA8B9] leading-relaxed">
                    Da settembre la finestra è di ventiquattro ore dalla presa di conoscenza. Se la
                    conoscenza arriva per caso — un cliente che scrive, un post che qualcuno nota —
                    buona parte della finestra è già stata consumata prima che qualcuno la apra.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Le date */}
        <section className="px-6 pt-14 pb-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold mb-5">
              Quattro date, da non confondere
            </h2>
            <dl className="space-y-4">
              {DATE.map((d) => (
                <div
                  key={d.quando}
                  className={`border-l-2 pl-4 ${
                    d.evidenza ? "border-[#00B4D8]" : "border-[#30363D]"
                  }`}
                >
                  <dt
                    className={`font-mono text-sm mb-1 ${
                      d.evidenza ? "text-[#00B4D8] font-semibold" : "text-[#7D8FA3]"
                    }`}
                  >
                    {d.quando}
                  </dt>
                  <dd className="text-[#9BA8B9] leading-relaxed">{d.cosa}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 space-y-4 text-[#9BA8B9] text-lg leading-relaxed">
              <p>
                La distinta base del software non è un adempimento di settembre. L’obbligo di
                inserirla nella documentazione tecnica arriva l’11 dicembre 2027, quindici mesi
                dopo. Le due scadenze vanno tenute separate: a settembre scatta l’obbligo di
                segnalare, a dicembre 2027 quello di documentare. Chi le sovrappone arriva a
                settembre con il lavoro sbagliato in mano.
              </p>
              <p>
                Gli obblighi di segnalazione riguardano anche i prodotti già immessi sul mercato
                prima del dicembre 2027. Che un prodotto sia stato venduto anni fa non lo mette al
                riparo.
              </p>
            </div>
          </div>
        </section>

        {/* I tempi */}
        <section className="px-6 pt-14 pb-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold mb-5">
              I tempi, e la soglia che li fa partire
            </h2>
            <ul className="space-y-3 text-[#9BA8B9] text-lg leading-relaxed mb-7">
              <li className="border-l-2 border-[#30363D] pl-4">
                <strong className="text-[#E6EDF3]">Entro 24 ore</strong> dalla presa di conoscenza:
                l’allarme.
              </li>
              <li className="border-l-2 border-[#30363D] pl-4">
                <strong className="text-[#E6EDF3]">Entro 72 ore</strong>: la notifica completa.
              </li>
              <li className="border-l-2 border-[#30363D] pl-4">
                <strong className="text-[#E6EDF3]">Entro 14 giorni</strong> dalla disponibilità di
                una misura correttiva, per le vulnerabilità attivamente sfruttate: il rapporto
                finale. <strong className="text-[#E6EDF3]">Entro un mese</strong> per gli incidenti
                gravi.
              </li>
            </ul>
            <div className="space-y-5 text-[#9BA8B9] text-lg leading-relaxed">
              <p>
                Le segnalazioni vanno a ENISA e al CSIRT nazionale competente. In Italia il CSIRT è
                presso l’Agenzia per la Cybersicurezza Nazionale.
              </p>
              <p>
                La soglia è la <strong className="text-[#E6EDF3]">vulnerabilità attivamente
                sfruttata</strong>, non la semplice esistenza di una CVE. Che nel prodotto ci sia un
                componente con una vulnerabilità nota non fa partire nulla. Lo sfruttamento in corso
                sì. La distanza fra le due condizioni è esattamente il punto in cui la maggior parte
                delle organizzazioni non ha un criterio scritto, e quindi decide sul momento — che è
                il momento peggiore.
              </p>
            </div>
          </div>
        </section>

        {/* Chi è toccato e chi no */}
        <section className="px-6 pt-14 pb-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold mb-5">
              Chi è toccato e chi no
            </h2>
            <div className="space-y-5 text-[#9BA8B9] text-lg leading-relaxed">
              <p>
                Rientrano i prodotti con elementi digitali immessi sul mercato nell’ambito di
                un’attività commerciale. Chi distribuisce un’applicazione con il proprio nome è
                fabbricante anche quando lo sviluppo è affidato a terzi: l’etichetta segue il nome,
                non il codice. È il punto su cui più spesso ci si sbaglia, perché la percezione
                interna è di essere committenti, non produttori.
              </p>
              <p>Restano fuori, in linea di principio:</p>
              <ul className="space-y-2 pl-5 list-disc marker:text-[#30363D]">
                <li>il software realizzato e usato solo all’interno dell’organizzazione;</li>
                <li>i settori già coperti da normative verticali equivalenti;</li>
                <li>l’open source distribuito senza intento commerciale;</li>
                <li>i servizi cloud puri.</li>
              </ul>
              <p>
                Nessuna di queste righe è un esito automatico. La qualificazione si istruisce caso
                per caso, sui contratti effettivi e sul modo in cui il prodotto arriva davvero sul
                mercato — non sulla categoria in cui l’organizzazione si colloca da sé. Le quattro
                esclusioni qui sopra sono il punto di partenza di un’istruttoria, non la sua
                conclusione.
              </p>
            </div>
          </div>
        </section>

        {/* Cosa serve avere pronto */}
        <section className="px-6 pt-14 pb-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold mb-6">
              Cosa serve avere pronto
            </h2>
            <ul className="space-y-5">
              {PRONTO.map((p) => (
                <li key={p.t} className="border-l-2 border-[#30363D] pl-4">
                  <p className="text-[#E6EDF3] font-semibold mb-1">{p.t}</p>
                  <p className="text-[#9BA8B9] leading-relaxed">{p.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* L'offerta */}
        <section className="px-6 pt-14 pb-4">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-lg border border-[#30363D] bg-[#161B22] px-6 py-7 md:px-8 md:py-9">
              <h2 className="font-syne text-2xl md:text-3xl font-extrabold mb-5">
                L’assessment di esposizione
              </h2>
              <div className="space-y-5 text-[#9BA8B9] text-lg leading-relaxed">
                <p>
                  <strong className="text-[#E6EDF3]">4.500 € fissi, tre giornate di lavoro.</strong>{" "}
                  Non è un pacchetto costruito attorno all’11 settembre: è il modo in cui lavoro su
                  questa materia, prima e dopo quella data. L’11 settembre 2026 è semplicemente il
                  giorno da cui si applica l’articolo 14.
                </p>
                <p>
                  Quello che consegno è una qualificazione documentata e firmata: se il prodotto
                  rientra, a quale titolo, con quali obblighi e con quali scadenze effettive; il
                  trigger scritto con la decorrenza della conoscenza; i nomi, con i sostituti; i tre
                  modelli di segnalazione precompilati; il registro delle decisioni impostato.
                </p>
                <p>
                  Quello che non consegno è una certificazione di conformità — e non esiste nessun
                  consulente che possa consegnartela. La conformità la stabilisce la valutazione
                  prevista dal regolamento, non un parere. Un documento firmato che dice cosa hai e
                  cosa ti manca vale in un’ispezione; un’autodichiarazione di conformità no.
                </p>
                <p>
                  Se entro novanta giorni l’assessment prosegue in un’implementazione, l’importo
                  viene scomputato.
                </p>
              </div>
              <div className="mt-8">
                <CTAButton
                  label="Scrivimi dal modulo →"
                  href="/contact"
                  variant="primary"
                />
              </div>
              <p className="mt-5 text-[#7D8FA3] leading-relaxed">
                Rispondo personalmente entro due giorni lavorativi. Se dalla prima conversazione
                risulta che il tuo prodotto non rientra, o che l’assessment non è lo strumento
                adatto, te lo dico prima di iniziare.
              </p>
            </div>
          </div>
        </section>

        {/* Chiusura */}
        <section className="px-6 pt-14 pb-16">
          <div className="max-w-2xl mx-auto space-y-5 text-[#9BA8B9] text-lg leading-relaxed">
            <p>
              L’istruttoria si appoggia al Compliance-Epistemic Project Framework (CEPF) e a
              Calibra, il software che lo implementa.
            </p>
            <p className="text-[#E6EDF3]">
              Le ventiquattro ore non cominciano quando arriva la contestazione. Cominciano quando
              qualcuno, dentro l’organizzazione, viene a sapere. Vale la pena decidere adesso chi è
              quel qualcuno.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#21262D]">
        <div className="max-w-2xl mx-auto px-6 py-10 text-sm text-[#7D8FA3] space-y-1">
          <p className="text-[#E6EDF3] font-semibold">Dynamics Consulting</p>
          <p>
            <a
              href="mailto:info@dynamicsconsulting.it"
              className="hover:text-[#00B4D8] transition-colors"
            >
              info@dynamicsconsulting.it
            </a>
          </p>
          <p>
            <a href="tel:+393407253246" className="hover:text-[#00B4D8] transition-colors">
              +39 340 725 3246
            </a>
          </p>
          <p className="pt-3 flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/it" className="hover:text-[#00B4D8] transition-colors underline">
              Risorse in italiano
            </Link>
            <Link href="/contact" className="hover:text-[#00B4D8] transition-colors underline">
              Contatti
            </Link>
            <Link href="/privacy" className="hover:text-[#00B4D8] transition-colors underline">
              Informativa privacy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
