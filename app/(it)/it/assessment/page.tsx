import type { Metadata } from "next";
import { OG_IMAGE, TWITTER_IMAGE } from "@/app/og";
import Image from "next/image";
import { AssessmentForm } from "@/components/assessment/AssessmentForm";

const IT_URL = "https://www.dynamicsconsulting.it/it/assessment";
const EN_URL = "https://www.dynamicsconsulting.it/assessment";

export const metadata: Metadata = {
  title: "Assessment di esposizione — PLD 2024 e AI Act",
  description:
    "Dal 9 dicembre 2026 la direttiva europea sulla responsabilità da prodotto include il software. Tre giornate per stabilire dove si ferma la responsabilità del fornitore e dove comincia la tua.",
  alternates: {
    canonical: IT_URL,
    languages: {
      it: IT_URL,
      en: EN_URL,
      "x-default": EN_URL,
    },
  },
  openGraph: {
    images: OG_IMAGE,
    title: "Assessment di esposizione — PLD 2024 e AI Act",
    description:
      "Dal 9 dicembre 2026 la direttiva europea sulla responsabilità da prodotto include il software. Tre giornate per stabilire dove si ferma la responsabilità del fornitore e dove comincia la tua.",
    url: IT_URL,
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    images: TWITTER_IMAGE,
    card: "summary_large_image",
    title: "Assessment di esposizione — PLD 2024 e AI Act",
    description:
      "Dal 9 dicembre 2026 la direttiva europea sulla responsabilità da prodotto include il software. Tre giornate per stabilire dove si ferma la responsabilità del fornitore e dove comincia la tua.",
  },
};

const comprende = [
  {
    t: "Perimetro di responsabilità.",
    b: "Chi risponde di cosa, sulla base dei contratti effettivi e non delle dichiarazioni commerciali. Include l’analisi delle clausole di limitazione e il loro effettivo valore rispetto alla disciplina della responsabilità da prodotto.",
  },
  {
    t: "Obblighi AI Act applicabili.",
    b: "Classificazione del sistema, obblighi in qualità di deployer, obblighi di trasparenza, alfabetizzazione del personale. Con le scadenze effettive e il loro stato.",
  },
  {
    t: "Composizione della fornitura.",
    b: "Componenti di terzi, licenze, condizioni d’uso del modello, punti in cui la titolarità dichiarata non corrisponde a quella contrattuale.",
  },
  {
    t: "Punti di attraversamento.",
    b: "Dove le conclusioni toccano obblighi già presidiati altrove — sicurezza delle reti, continuità operativa, protezione dei dati — con indicazione di cosa girare a chi se ne occupa. Questo assessment non valuta quei regimi: segnala dove si incrociano.",
  },
  {
    t: "Sequenza di intervento.",
    b: "Cosa va fatto, in quale ordine, con quale urgenza. Distinguendo ciò che è già scaduto da ciò che ha una data futura.",
  },
];

export default function AssessmentItPage() {
  return (
    <div lang="it" className="bg-[#0D1117] min-h-screen text-[#E6EDF3]">
      {/* Testata — solo logo, nessuna navigazione */}
      <header className="border-b border-[#21262D]">
        <div className="max-w-2xl mx-auto px-6 py-6 flex items-center gap-3">
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
            <p className="font-syne text-[#00B4D8] font-bold text-xs tracking-[0.15em] uppercase leading-none mt-0.5">
              CONSULTING
            </p>
          </div>
        </div>
      </header>

      <main>
        {/* Apertura */}
        <section className="px-6 pt-16 pb-14">
          <div className="max-w-2xl mx-auto">
            <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-widest mb-5">
              Assessment di esposizione — PLD 2024 e AI Act
            </p>
            <h1 className="font-syne text-3xl md:text-[2.6rem] font-extrabold leading-[1.15] mb-6">
              Il 9 dicembre 2026 cambia chi risponde del software difettoso.
            </h1>
            <p className="text-[#9BA8B9] text-lg leading-relaxed">
              La nuova direttiva europea sulla responsabilità da prodotto include il software tra i
              prodotti. Da quella data, un difetto non è più solo un inadempimento contrattuale.
              Questo assessment stabilisce, per la tua organizzazione, dove si ferma la
              responsabilità del fornitore e dove comincia la tua.
            </p>
            <p className="mt-5 text-sm">
              <a
                href="/assessment"
                hrefLang="en"
                lang="en"
                className="text-[#00B4D8] hover:text-[#E6EDF3] underline"
              >
                This page is available in English →
              </a>
            </p>
          </div>
        </section>

        <div className="max-w-2xl mx-auto px-6 space-y-14 pb-8 text-[#7D8FA3] text-lg leading-relaxed">
          {/* Il problema */}
          <section>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">Il problema</h2>
            <p>
              Se la tua organizzazione ha acquistato o sta acquistando un sistema che incorpora
              componenti di intelligenza artificiale, ci sono tre domande a cui probabilmente oggi
              non sai rispondere.
            </p>
            <p className="mt-4">
              Chi risponde se il sistema produce un output che causa un danno — il fornitore,
              l’integratore, o tu che lo hai messo in esercizio.
            </p>
            <p className="mt-4">
              Quali obblighi dell’AI Act si applicano alla tua organizzazione come deployer,
              indipendentemente da chi ha costruito il sistema.
            </p>
            <p className="mt-4">
              Cosa contiene esattamente la piattaforma che hai comprato: quali componenti di terzi,
              sotto quali licenze, con quale modello linguistico e a quali condizioni d’uso.
            </p>
            <p className="mt-4">
              Nessuna di queste domande ha risposta nel contratto che hai firmato. Quasi mai.
            </p>
          </section>

          {/* Cosa comprende */}
          <section>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">Cosa comprende</h2>
            <p>
              Tre giornate di lavoro, su documentazione che fornisci tu: contratti, architettura,
              catena di fornitura, procedure in essere.
            </p>
            <div className="mt-6 space-y-5">
              {comprende.map((c) => (
                <p key={c.t}>
                  <strong className="text-[#E6EDF3]">{c.t}</strong> {c.b}
                </p>
              ))}
            </div>
          </section>

          {/* Cosa ricevi */}
          <section>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">Cosa ricevi</h2>
            <p>Un documento. Non una presentazione, non una checklist.</p>
            <p className="mt-4">
              È scritto per essere letto da un consiglio di amministrazione e utilizzato da un
              legale. Ogni affermazione è classificata: cosa è verificato sui documenti, cosa è
              dedotto, cosa richiede un accertamento che esula da questo perimetro.
            </p>
            <p className="mt-4">
              Il documento è firmato. Chi lo firma risponde professionalmente di ciò che vi è
              scritto.
            </p>
          </section>

          {/* Condizioni */}
          <section>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">Condizioni</h2>
            <dl className="border-t border-[#21262D]">
              {[
                ["Durata", "3 giornate."],
                ["Corrispettivo", "4.500 euro oltre IVA."],
                ["Consegna", "entro 15 giorni lavorativi dalla ricezione della documentazione."],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-col sm:flex-row sm:gap-6 py-3 border-b border-[#21262D]"
                >
                  <dt className="text-[#E6EDF3] font-semibold sm:w-40 flex-shrink-0">{k}:</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6">
              Se entro 90 giorni dalla consegna si apre un incarico di implementazione o di advisory
              continuativo, il corrispettivo dell’assessment viene scomputato integralmente.
            </p>
          </section>

          {/* Chi firma */}
          <section>
            <h2 className="text-2xl font-bold text-[#E6EDF3] mb-5">Chi firma</h2>
            <p>
              Corrado Patierno. Venticinque anni di architettura di sistemi enterprise in ambienti
              regolati e ad alta criticità.
            </p>
            <p className="mt-4">
              Innovation Manager certificato dal Ministero delle Imprese. Membro del consiglio
              direttivo di ENTD, Agenzia Nazionale per la Trasformazione Digitale, dal 2020 al 2025.
              Relatore alla Camera dei Deputati su intelligenza artificiale e trasformazione dei
              processi.
            </p>
            <p className="mt-4">
              Autore di <em>Logistica Fluida</em> (2026) e del primo manuale tecnico italiano
              sull’RFID (Duke Editore, 2006).
            </p>
            <p className="mt-4">Progetta e mantiene due strumenti proprietari:</p>
            <p className="mt-4">
              <strong className="text-[#E6EDF3]">Nexus MDS Core</strong> — piattaforma di
              intelligenza artificiale per ambienti regolati, sedici servizi orchestrati, in
              produzione presso Federfarma Lombarda, associazione dei titolari di farmacia delle
              province di Milano, Lodi e Monza Brianza: oltre mille farmacie, circa duemila
              interrogazioni al giorno, catena di versioni normative esplicita, dati personali mai
              indicizzati.
            </p>
            <p className="mt-4">
              <strong className="text-[#E6EDF3]">CEPF</strong> — catalogo di attraversamento
              normativo, versione 7, ventuno regimi regolamentari mappati sui rispettivi
              adempimenti operativi. È lo strumento su cui si basa questo assessment.
            </p>
          </section>
        </div>

        {/* Modulo */}
        <section className="px-6 py-14 border-y border-[#21262D] bg-[#11161D] mt-14">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#E6EDF3] mb-5">
              Richiedi l’assessment
            </h2>
            <p className="text-[#7D8FA3] text-lg leading-relaxed mb-8">
              Rispondo personalmente entro due giorni lavorativi. Se dalla prima conversazione
              risulta che l’assessment non è lo strumento adatto alla tua situazione, te lo dico.
            </p>
            <AssessmentForm locale="it" />
          </div>
        </section>

        {/* Chiusura */}
        <section className="px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-[#9BA8B9] text-lg leading-relaxed">
              L’esposizione non si valuta quando arriva la contestazione. Si valuta prima, quando
              c’è ancora tempo per intervenire.
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
          <p className="pt-3">
            <a
              href="/privacy"
              target="_blank"
              rel="noopener"
              className="hover:text-[#00B4D8] transition-colors underline"
            >
              Informativa privacy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
