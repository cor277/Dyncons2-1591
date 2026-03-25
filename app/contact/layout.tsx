import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dynamics Consulting. Discuss your AI infrastructure, legacy modernisation, or enterprise integration project. Based in Milan, serving regulated industries across Italy and the EU.",
  alternates: { canonical: "https://www.dynamicsconsulting.it/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
