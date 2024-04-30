/* eslint-disable prettier/prettier */
const { colors } = require('./config.json');
const { gruvbox ,dracula, Nord,Monokai, Mocha,Solarized,Paraiso} = require('./themes.json')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...Solarized
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
