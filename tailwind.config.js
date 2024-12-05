/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SF-Pro', 'sans-serif'], 
      },
      colors: {
        'cinza-bg': '#E2E8F0',
        'cinza-escuro-bg' : '#CBD5E1',
        'cinza-texto' : '#474747',
        'cinza-claro-texto' : '#747474'
      },
    },
  },
  plugins: [],
}
