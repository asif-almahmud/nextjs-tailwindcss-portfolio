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
          "super-light": "#C4CACD",
          light: "#C4CACD",
          DEFAULT: "#C4CACD",
          dark: "#C4CACD",
        },
        secondary: {
          "super-light": "#C4CACD",
          light: "#8BE68C",
          DEFAULT: "#C2E77A",
          dark: "#C4CACD",
        },
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
