import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0D1117",
        "bg-secondary": "#161B22",
        "bg-surface": "#1C2333",
        "accent-blue": "#0D47A1",
        "accent-cyan": "#00B4D8",
        "accent-green": "#00C853",
        "accent-amber": "#FF9800",
        "text-primary": "#E6EDF3",
        "text-muted": "#7D8FA3",
        border: "#30363D",
        "border-accent": "#00B4D8",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "pulse-badge": "pulse-badge 2s ease-in-out infinite",
        "constellation-1": "float1 8s ease-in-out infinite",
        "constellation-2": "float2 10s ease-in-out infinite",
        "constellation-3": "float3 12s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-badge": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0,200,83,0.4)" },
          "70%": { boxShadow: "0 0 0 8px rgba(0,200,83,0)" },
        },
        float1: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(10px) translateX(-5px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(15px) translateX(-15px)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0px)" },
          "40%": { transform: "translateY(-10px)" },
          "80%": { transform: "translateY(8px)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle at 1px 1px, rgba(0,180,216,0.12) 1px, transparent 0)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
