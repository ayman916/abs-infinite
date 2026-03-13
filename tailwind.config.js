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
        charcoal: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9dd',
          300: '#b8b8bf',
          400: '#91919c',
          500: '#747481',
          600: '#5e5e69',
          700: '#4d4d56',
          800: '#424249',
          900: '#1a1a1f',
          950: '#0f0f12',
        },
        accent: {
          600: '#2c5545',
          700: '#1e3d31',
        },
      },
    },
  },
  plugins: [],
}
