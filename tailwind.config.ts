import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        'xs': '520px',       // Extra small devices
        'sm': '656px',       // Small devices (unchanged)
        'md': '765px',       // Custom medium devices
        'lg': '1111px',      // Custom large devices
        'xlg': '1260px',     // Custom extra large devices
      }
    },
  },
  plugins: [],
} satisfies Config;
