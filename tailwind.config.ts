import { Oswald } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      oswald:'var(--font-oswald)',
      roboto:'var(--font-roboto)'
    },
    backgroundImage:{
      hero:'url(/assets/img/hero/bg.png)'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#333",
          100:'#484848',
          200:'#151515',
          300:'#111',

        },
        accent:'#d4000d'
            }
        
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow")({
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowBlur: "3px",
      shadowOffsetX: "2px",
      shadowOffsetY: "2px",
      experimental: true
  }),

  ],
  
};
export default config;
