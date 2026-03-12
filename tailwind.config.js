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
          800: '#0d1017',
          700: '#111520',
          600: '#161b28',
        },
        gold: {
          400: '#c9a96e',
          500: '#b8943f',
          600: '#a07d2f',
        },
      },
    },
  },
  plugins: [],
}
