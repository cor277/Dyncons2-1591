import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";
import { breadcrumbSchema } from "@/app/seo";
import { OG_IMAGE } from "@/app/og";
import { alternatesFor } from "@/lib/i18n-routes";

const PATH = "/it/servizi/blockchain";
const PAGE_URL = `https://www.dynamicsconsulting.it${PATH}`;

const DESCRIPTION =
  "Smart contract, tokenizzazione, tracciabilità della filiera e soluzioni blockchain enterprise su Ethereum, Hyperledger e Polygon. Web3 pragmatico per problemi di business reali.";

export const metadata: Metadata = {
  title: "Blockchain e Web3",
  description: DESCRIPTION,
  alternates: alternatesFor(PATH),
  openGraph: {
    images: OG_IMAGE,
    title: "Blockchain e Web3 | Dynamics Consulting",
    description: DESCRIPTION,
    url: PAGE_URL,
    locale: "it_IT",
  },
};

const faqs = [
  {
    q: "Quando ha davvero senso la blockchain per un'azienda?",
    a: "La blockchain porta valore quando ti serve un registro condiviso e immutabile fra parti che non si fidano del tutto l'una dell'altra: provenienza lungo la filiera, regolamento fra organizzazioni diverse, emissione di asset digitali o audit trail regolamentari. Se basta un database centralizzato in mano a una sola parte, te lo diciamo.",
  },
  {
    q: "Blockchain pubblica o privata: quale fa per noi?",
    a: "Le chain pubbliche (Ethereum, Polygon) sono adatte a tokenizzazione, DeFi e provenienza rivolta al consumatore, dove la trasparenza è un valore. Le chain private o di consorzio (Hyperledger Fabric, Besu) sono adatte ai workflow enterprise, dove contano prima di tutto permessi, riservatezza e throughput.",
  },
  {
    q: "Fate audit di sicurezza degli smart contract?",
    a: "Sì. Ogni smart contract che consegniamo passa per un'analisi automatica con Slither e Mythril e per una revisione di sicurezza manuale. Per i contratti di valore elevato consigliamo anche un audit di terza parte, e possiamo coordinarlo noi.",
  },
  {
    q: "Potete integrare la blockchain con il nostro ERP o CRM?",
    a: "Certo. Costruiamo servizi oracle off-chain e middleware che collegano gli eventi on-chain al tuo ERP, WMS o CRM: così la blockchain diventa un livello di fiducia, non un sistema isolato.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "it",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const crumbs = breadcrumbSchema(PAGE_URL, [
  { name: "Risorse in italiano", path: "/it" },
  { name: "Competenze tecniche", path: "/it/competenze" },
  { name: "Blockchain e Web3" },
]);

export default function BlockchainPage() {
  return (
    <ServicePageLayout
      locale="it"
      title="Blockchain e Web3"
      intro="Lasciamo da parte l'hype e ci concentriamo dove i registri distribuiti risolvono davvero problemi di business: tracciabilità della filiera, emissione di asset digitali, regolamento fra più parti e audit trail a prova di manomissione. Niente token fini a se stessi."
      tech={[
        "Ethereum",
        "Polygon",
        "Hyperledger Fabric",
        "Hyperledger Besu",
        "Solidity",
        "Hardhat",
        "Foundry",
        "IPFS",
        "The Graph",
        "Chainlink",
        "OpenZeppelin",
        "ethers.js",
        "viem",
        "Node.js",
      ]}
      capabilities={[
        {
          iconName: "Code",
          name: "Sviluppo di smart contract",
          desc:
            "Contratti Solidity per ERC-20, ERC-721, ERC-1155 e logiche di business su misura, scritti pensando all'efficienza del gas e all'aggiornabilità, testati con Foundry e Hardhat.",
        },
        {
          iconName: "Package",
          name: "Tokenizzazione e asset digitali",
          desc:
            "Token di proprietà frazionata su asset reali, programmi fedeltà, marketplace NFT e utility token: dal disegno economico fino al lancio e al supporto successivo.",
        },
        {
          iconName: "Search",
          name: "Tracciabilità della filiera",
          desc:
            "Il percorso del prodotto registrato on-chain dall'inizio alla fine, con punti di scansione QR, feed oracle da sensori IoT e portali di provenienza per il consumatore che rafforzano la fiducia nel marchio.",
        },
        {
          iconName: "Lock",
          name: "Audit di sicurezza degli smart contract",
          desc:
            "Scansione automatica con Slither e Mythril più revisione manuale di esperti: ogni vulnerabilità classificata per gravità, con indicazioni di correzione prima del deployment.",
        },
        {
          iconName: "Server",
          name: "Reti blockchain enterprise",
          desc:
            "Consorzi Hyperledger Fabric e Besu per reti di business fra più parti: permissioned, con canali privati e integrati con i sistemi enterprise esistenti.",
        },
        {
          iconName: "Link2",
          name: "Oracle e integrazione off-chain",
          desc:
            "Reti oracle Chainlink e servizi di relay su misura che collegano i contratti on-chain a fonti di dati reali, API e ai tuoi sistemi operativi esistenti.",
        },
      ]}
      faqs={faqs}
      ctaTitle="Parliamo del tuo progetto"
      ctaSubtitle="Un'infrastruttura AI da costruire, un sistema legacy da modernizzare o un ERP da collegare al futuro? Scrivici."
      faqSchema={faqSchema}
      breadcrumbSchema={crumbs}
    />
  );
}
