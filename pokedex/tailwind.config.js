/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx, css}",],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('/src/img/bg.png')"
      }
    },
  },
  plugins: [],
}

