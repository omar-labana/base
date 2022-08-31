/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "rgb(var(--color-text-base) / <alpha-value>)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "rgb(var(--color-fill) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Inter", "cursive", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
