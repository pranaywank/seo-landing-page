import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#F5C518",
          hover: "#FFD54F",
          glow: "rgba(245, 197, 24, 0.4)",
          muted: "rgba(245, 197, 24, 0.1)",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          card: "#111111",
          "card-hover": "#161616",
          input: "#141414",
          lighter: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#A1A1AA",
          dark: "#71717A",
        },
      },
      maxWidth: {
        content: "1200px",
        text: "700px",
        form: "500px",
      },
      spacing: {
        section: "140px",
        "section-mobile": "80px",
      },
      borderRadius: {
        card: "12px",
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(245, 197, 24, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(245, 197, 24, 0.5)",
          },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
