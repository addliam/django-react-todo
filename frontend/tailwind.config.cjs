/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blackDark: "#1D242E",
        blackPrimary: "#283342",
        blackContrast: "#009099",
        white: "#FFFFFF",
        black: "#1D242E",
        blackOverlay: "rgba(29, 36, 46, 0.5)",
        yellow: "#FED600",
        orange: "#F0483E",
        orangeContrast: "#E0443B",
        red: "#F0483E",
        skyBlue: "#03A9F5",
        green: "#01A768",
        lightGray: "#f8f8f8"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};