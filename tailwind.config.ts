import type { Config } from "tailwindcss";

const config:Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        default: "var(--background-color-default)",
      },
      backgroundImage: {
        about: "var(--background-color-about)",
        hero: "var(--background-color-hero)"
      },
      backgroundSize:{
        sizeHero: "var(--background-size-hero)"
      },
      animation: {
        bgHero: "var(--animation-bg-hero)",
      },

      gridTemplateColumns: {
        dashboard: "300px 1fr",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      borderColor: {
        paragraph: "var(--boder-color-paragraph)",
      },
      maxWidth: {
        paragraph: "var(--max-width-paragraph)",
        listItems: "var(--max-width-list-items)"
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
