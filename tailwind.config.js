/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}",    // scan all HTML/JS in dist
    "./src/**/*.{js,ts,jsx,tsx}" // scan JS/TS in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
