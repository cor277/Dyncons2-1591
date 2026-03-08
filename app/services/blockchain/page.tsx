import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blockchain & Web3 | Dynamics Consulting",
  description:
    "Smart contracts, tokenisation, supply-chain traceability, and enterprise blockchain solutions on Ethereum, Hyperledger, and Polygon. Pragmatic Web3 for real business problems.",
  alternates: { canonical: "https://dynamicsconsulting.it/services/blockchain" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When does blockchain actually make sense for a business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain adds value when you need an immutable shared ledger among parties who do not fully trust each other — supply-chain provenance, cross-organisation settlement, digital asset issuance, or regulatory audit trails. If a centralised database owned by one party suffices, we will tell you so.",
      },
    },
    {
      "@type": "Question",
      name: "Public or private blockchain — which is right for us?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Public chains (Ethereum, Polygon) suit tokenisation, DeFi, and consumer-facing provenance where transparency is a feature. Private/consortium chains (Hyperledger Fabric, Besu) suit enterprise workflows where permissioning, privacy, and throughput take priority.",
      },
    },
    {
      "@type": "Question",
      name: "Do you audit smart contracts for security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every smart contract we deliver goes through automated analysis with Slither and Mythril plus a manual security review. For high-value contracts we recommend a third-party audit as well and can coordinate that process.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate blockchain with our existing ERP or CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We build off-chain oracle services and middleware that bridge on-chain events to your ERP, WMS, or CRM — so blockchain becomes a trust layer, not a siloed system.",
      },
    },
  ],
};

export default function BlockchainPage() {
  return (
    <ServicePageLayout
      title="Blockchain & Web3"
      intro="We cut through the hype and focus on where distributed ledgers genuinely solve business problems — supply-chain traceability, digital asset issuance, cross-party settlement, and tamper-proof audit trails. No tokens for their own sake."
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
          name: "Smart Contract Development",
          desc:
            "Solidity contracts for ERC-20, ERC-721, ERC-1155, and custom business logic — written with gas efficiency and upgradeability in mind, tested with Foundry and Hardhat.",
        },
        {
          iconName: "Package",
          name: "Tokenisation & Digital Assets",
          desc:
            "Fractional ownership tokens for real-world assets, loyalty programmes, NFT marketplaces, and utility tokens — from economic design through to launch and post-launch support.",
        },
        {
          iconName: "Search",
          name: "Supply-Chain Traceability",
          desc:
            "End-to-end product journey recorded on-chain with QR scan points, IoT oracle feeds, and consumer-facing provenance portals that build brand trust.",
        },
        {
          iconName: "Lock",
          name: "Smart Contract Security Audits",
          desc:
            "Automated scanning with Slither and Mythril plus manual expert review — every vulnerability classified by severity with remediation guidance before deployment.",
        },
        {
          iconName: "Server",
          name: "Enterprise Blockchain Networks",
          desc:
            "Hyperledger Fabric and Besu consortiums for multi-party business networks — permissioned, privacy-channel enabled, and integrated with existing enterprise systems.",
        },
        {
          iconName: "Link2",
          name: "Oracle & Off-Chain Integration",
          desc:
            "Chainlink oracle networks and custom relay services connecting on-chain contracts to real-world data sources, APIs, and your existing operational systems.",
        },
      ]}
      faqs={[
        {
          q: "When does blockchain actually make sense for a business?",
          a: "Blockchain adds value when you need an immutable shared ledger among parties who do not fully trust each other — supply-chain provenance, cross-organisation settlement, digital asset issuance, or regulatory audit trails. If a centralised database owned by one party suffices, we will tell you so.",
        },
        {
          q: "Public or private blockchain — which is right for us?",
          a: "Public chains (Ethereum, Polygon) suit tokenisation, DeFi, and consumer-facing provenance where transparency is a feature. Private/consortium chains (Hyperledger Fabric, Besu) suit enterprise workflows where permissioning, privacy, and throughput take priority.",
        },
        {
          q: "Do you audit smart contracts for security?",
          a: "Yes. Every smart contract we deliver goes through automated analysis with Slither and Mythril plus a manual security review. For high-value contracts we recommend a third-party audit as well and can coordinate that process.",
        },
        {
          q: "Can you integrate blockchain with our existing ERP or CRM?",
          a: "Absolutely. We build off-chain oracle services and middleware that bridge on-chain events to your ERP, WMS, or CRM — so blockchain becomes a trust layer, not a siloed system.",
        },
      ]}
      faqSchema={faqSchema}
    />
  );
}
