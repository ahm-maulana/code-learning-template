/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
        heading: "'source-code-pro', monospace"
      },
      colors: {
        primary: '#010101',
        secondary: '#DDF247',
        body: '#F4F4F4',
        line: '#A3A3A3',
      }
    },
  },
  plugins: [],
}
