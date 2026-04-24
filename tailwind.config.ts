import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--semantic-background)",
        surface: "var(--semantic-surface)",
        soft: "var(--semantic-soft)",
        primary: "var(--semantic-primary)",
        "primary-light": "var(--semantic-primary-light)",
        foreground: "var(--semantic-text-primary)",
        muted: "var(--semantic-text-secondary)",
        "border-subtle": "var(--semantic-border-subtle)",
        "border-strong": "var(--semantic-border-strong)",
        border: "var(--semantic-border-subtle)",
        input: "var(--semantic-border-subtle)",
        ring: "var(--semantic-primary)",
        card: {
          DEFAULT: "var(--semantic-surface)",
          foreground: "var(--semantic-text-primary)",
        },
        popover: {
          DEFAULT: "var(--semantic-surface)",
          foreground: "var(--semantic-text-primary)",
        },
        secondary: {
          DEFAULT: "var(--semantic-soft)",
          foreground: "var(--semantic-text-primary)",
        },
        accent: {
          DEFAULT: "var(--semantic-background)",
          foreground: "var(--semantic-text-primary)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        chart: {
          1: "var(--semantic-primary)",
          2: "var(--semantic-primary-light)",
          3: "var(--semantic-text-secondary)",
          4: "var(--semantic-border-strong)",
          5: "var(--semantic-border-subtle)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
