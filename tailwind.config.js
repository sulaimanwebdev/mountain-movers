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

    screens: {
      'sm': '974px',
      // customized

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  plugins: [],
}