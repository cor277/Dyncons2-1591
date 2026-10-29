import type { Metadata } from "next";

import { alternatesFor } from "@/lib/i18n-routes";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dynamics Consulting. Discuss your AI infrastructure, legacy modernisation, or enterprise integration project. Based in Milan, serving regulated industries across Italy and the EU.",
  alternates: alternatesFor("/contact"),
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
