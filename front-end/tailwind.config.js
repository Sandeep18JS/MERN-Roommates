/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        '3C486B': '#3C486B',
      },
      textColor: {
        'F0F0F0': '#F0F0F0',
      },
      colors: {
        '000': '#000',
        '0C0C0C': '#0C0C0C',
        'ff4a26': '#ff4a26',
        '9C9C9C': '#9C9C9C',
        'a33327': '#a33327',
        '00000029': '#00000029',
        '45aa9c': '#45aa9c',
        '116D6E': '#116D6E'
      },
      screens: {
        'lg': '1150px',
      },
    },
  },
  plugins: [],
}