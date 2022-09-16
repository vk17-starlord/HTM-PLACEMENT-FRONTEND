/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    
    extend: {
      colors: {
      "primary":'rgba(56, 106, 253, 1)',
      "primary-dark":'#0030BB',
      "p-gray":'rgba(0, 0, 0, 0.5)',
      "light-voilet":'rgba(56, 106, 253, 1)',
      "light-pink":'rgba(243, 241, 255, 1)',
      "light-blue":'rgba(204, 227, 253, 0.75)',
      "extra-light-blue":'#F8F7FF',

      },
      fontFamily: {
        Inter: "'Inter', sans-serif"
      },
    },
  },
  plugins: [],
}
