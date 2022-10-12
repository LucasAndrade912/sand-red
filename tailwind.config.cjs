/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontSize: {
      xs: 10,
      sm: 12,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 28,
      '3xl': 32,
      '4xl': 40
    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
        sigmar: 'Sigmar One, cursive'
      },
      backgroundImage: {
        'presentation-cover': 'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/presentation-cover.jpg")'
      }
    },
  },
  plugins: [],
}
