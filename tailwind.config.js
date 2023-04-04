/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main": "#32AB80",
        "not-black": "#070713",
      }
    },
  },
  plugins: [],
}