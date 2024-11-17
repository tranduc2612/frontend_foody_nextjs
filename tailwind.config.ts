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
        main: "#3a9691",
        second: "#e16120",
      },
      fontFamily: {
        sans: ['var(--font-europa-regular)'],
        'europa-regular': ['var(--font-europa-regular)'],
        'europa-bold': ['var(--font-europa-bold)'],
        'europa-light': ['var(--font-europa-light)'],
      },
    },
  },
  plugins: [],
};
export default config;
