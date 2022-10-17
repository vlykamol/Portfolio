/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        playfair : ['Playfair Display'],
        roboto : ['Roboto Serif'],
        worksans: ['Work Sans']
      }
    },
  },
  plugins: [],
}