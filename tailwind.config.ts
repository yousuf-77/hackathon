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
        'xxs': '390px',     // Extra small devices
        'yxs':'470px' ,      // Extra small devices
        'xs': '580px',      
        'sm': '656px',       // Small devices (unchanged)
        'mmd': '700px',
        'md': '845px', 
        'llg': '984px',     // Custom medium devices
        'lg': '1111px',      // Custom large devices
        'xlg': '1260px',     // Custom extra large devices
        'xxlg': '1360px', 
        'xxxlg': '1440px',    // Custom extra large devices
      },
      keyframes: {
        scrollRing: {
          '0%': { transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(100%)' },
        },
        
      },
      animation: {
        ring: 'scrollRing 16s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
