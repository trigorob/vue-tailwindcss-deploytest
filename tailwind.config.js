const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'	
  theme: {
    extend: {
      colors: {
        'light-blue': colors.green,
        cyan: colors.red,
      },
    },
  },
  variants: {},
  plugins: [],
}


/*
module.exports = {
  purge: ['./index.html', './src/ ** /*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

*/
