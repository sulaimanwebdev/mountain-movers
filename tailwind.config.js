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
      },

      screens:{
        "sm3": "404px",
        "sm2": "390px",
        "lg5": "902px",
        "lg4": "866px",
        "lg3": "1080px",
        "lg2": "974px",
        
      }
    },
  },
  plugins: [],
}