/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    
    extend: {
      colors: {
      "primary":'#0030BB',
      "text-gray":'rgba(0, 0, 0, 0.5)',
      "text-blue":'rgba(56, 106, 253, 1)',
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
