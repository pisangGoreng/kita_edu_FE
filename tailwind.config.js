/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        avenir: ["AVENIR-ROMAN", "sans-serif"],
        avenirblack: ["AVENIR-BLACK", "sans-serif"],
      },
      colors: {
        "blue-ocean": "#07638d",
        "light-gray": "##d3d3d1",
      },
    },
  },
  plugins: [],
}
