import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";

/* Shared across both root layouts — (en) and (it). */

export const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const fontVariables = `${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`;
