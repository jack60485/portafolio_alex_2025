/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff4ed',
          100: '#ffe5d1',
          200: '#fcbf91',
          300: '#f8a56a',
          400: '#f48b44',
          500: '#F25F29',  // Tu color base
          600: '#d94e1c',
          700: '#b03e17',
          800: '#8a2e12',
          900: '#611f0d',
        },
        yellow: {
          100: '#fff8e1',
          200: '#fff1b8',
          300: '#ffe999',
          400: '#ffe080',
          500: '#F6E6C2',
          600: '#ccb57a',
        },
        beige: {
          100: '#fefcf7',
          200: '#fdf7eb',
          300: '#fbeedb',
          400: '#f7e0c1',
          500: '#f0e3c0',
          600: '#d9ca9f',
          700: '#b8a87e',
          800: '#978760',
          900: '#796b4a',
        },
        mint: {
          100: '#f2f8f6',
          200: '#e1f0ea',
          300: '#c5e2d6',
          400: '#9ccbb8',
          500: '#56A689',   // Tu color base
          600: '#4e937c',
          700: '#427d68',
          800: '#366754',
          900: '#2d5244',
        },
        navy: {
          100: '#f4f5f7',
          200: '#e6e8ed',
          300: '#d1d4dc',
          400: '#a8aeb9',
          500: '#050626',   // Tu color base
          600: '#101520',
          700: '#0e1318',
          800: '#0b1014',
          900: '#090d10',
        },
      },
      fontFamily: {
        'comic': ['"Comic Neue"', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
