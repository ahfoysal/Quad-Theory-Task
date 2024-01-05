import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FD6011",
        "orange-light": "#F99F1C",
        "light-50": "#ECCFA3",
      },
      danger: "#F99F1C",
    },
    fontFamily: {
      arlon: ["var(--arlon)"],
      merry: "'Merriweather Sans', sans-serif",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
