const colors = require('tailwindcss/colors')

const brown = {
  d1: '#120A02',
  d2: '#201104',
  d3: '#2D1806',
  d4: '#482609',
  l1: '#FFFFFF',
  l2: '#cebfb1',
  l3: '#f0d1a0',
  l4: '#d8c4aa'
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        d1: brown.d1,
        d2: brown.d2,
        d3: brown.d3,
        d4: brown.d4,
        l1: brown.l1,
        l2: brown.l2,
        l3: brown.l3,
        l4: brown.l4,
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}