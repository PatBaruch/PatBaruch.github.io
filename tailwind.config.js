/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0A192F',
        secondary: '#112240',
        accent: '#64FFDA',
        'text-primary': '#CCD6F6',
        'text-secondary': '#8892B0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}