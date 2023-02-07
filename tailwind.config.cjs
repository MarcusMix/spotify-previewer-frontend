/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto'
      },
      colors: {
        "spotify-green": "#1DB954",
        "spotify-green-200" : "#11913f"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
