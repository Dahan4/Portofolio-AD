/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '90px',
    },
    extend: {
      colors: {
        primary:'#FF9100',
        secondc: '#333646',
        thirdc: '#e2e8f0',
        fourthc: '#252734',
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
