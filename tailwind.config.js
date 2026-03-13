/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      colors: {
        navy: {
          900: '#0a0c10',
          800: '#0f1218',
          700: '#161a22',
          600: '#1e232d',
        },
        gold: {
          400: '#c9a96e',
          500: '#b8943f',
          600: '#9a7a2e',
        },
      },
    },
  },
  plugins: [],
}
