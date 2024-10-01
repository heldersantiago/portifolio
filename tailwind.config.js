/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490DC",
        secondary: "#41B3A3",
        tertiary: "#F1C40F",
        quaternary: "#E74C3C",
      },
      spacing: {
        12: "3rem",
      },
      fontFamily: {
        body: ["Geist Mono","Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}


