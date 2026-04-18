/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['"Barlow Condensed"', 'sans-serif'],
      },
      colors: {
        'bc-dark': '#0D1117',
        'bc-darker': '#0A1628',
        'bc-cyan': '#00D4FF',
        'bc-amber': '#F59E0B',
        'bc-gray': '#8B949E',
      },
    },
  },
  plugins: [],
}
