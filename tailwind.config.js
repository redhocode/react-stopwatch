/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
        'Fira Code': ['Fira Code', 'monospace'],
      },
    extend: { colors: {
      'white': '#ffffff',
      'red' : '#D04848',
      'jingga' : '#F3B95F',
      'yellow' : '#FDE767',
      'blue' : '#6895D2',
      'drak' : '#0f172a'
    },},
  },
  plugins: [require("daisyui")],
}

