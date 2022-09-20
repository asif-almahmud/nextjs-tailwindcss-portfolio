/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      lobster: ["Lobster Two", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          "super-light": "#79889b",
          light: "#59687b",
          DEFAULT: "#39485b",
          dark: "#19283b",
        },
        secondary: {
          "super-light": "#e1eEf8",
          light: "#919ea8",
          DEFAULT: "#717e88",
          dark: "#515e68",
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
