import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:"class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D96F3',
        background: '#DBDBDB',
        black: '#060606',
        white:'#f0efef',
        dark: {
          primary:'#2D96F3',
          background: "#101010",
          black: '#060606',
          white:'#f0efef',
        },
      },
    },
  },
  plugins: [],
};

export default config;
