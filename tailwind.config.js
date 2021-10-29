const colors = require('tailwindcss/colors')

const brown = {
  d1: '#120A02',
  d2: '#201104',
  d3: '#2D1806',
  d4: '#482609',
  d5: '#482609',
  l1: '#FFFFFF',
  l2: '#cebfb1',
  l3: '#f0d1a0',
  l4: '#d8c4aa',
  l5: '#966135',
}

const chosen = brown

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        d1: chosen.d1,
        d2: chosen.d2,
        d3: chosen.d3,
        d4: chosen.d4,
        d5: chosen.d5,
        l1: chosen.l1,
        l2: chosen.l2,
        l3: chosen.l3,
        l4: chosen.l4,
        l5: chosen.l5,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
