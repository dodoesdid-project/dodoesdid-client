/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      desktop: '375px',
    },
    colors: {
      primary: {
        100: '#99cdff',
        200: '#7bafff',
        300: '#679bff',
        400: '#5387ff',
        500: '#3f73f7',
        DEFAULT: '#3f73f7',
        600: '#1457ff',
        700: '#245be8',
      },
      sub: {
        100: '#ffd398',
        200: '#ffbf84',
        300: '#ffab70',
        400: '#ff8d52',
        500: '#ff6d2d',
      },
      gray: {
        30: '#f3f3f3',
        40: '#e9e9e9',
        50: '#d5d5d5',
        60: '#c0c0c0',
        70: '#989898',
        80: '#707070',
        90: '#525252',
        100: '#202020',
      },
      black: '#000000',
      white: '#ffffff',
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};
