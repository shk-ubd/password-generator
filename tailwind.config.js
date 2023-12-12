/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'green': '#61892F',
      'brightgreen': '#86C232',
      'midnight': '#222629',
      'gray': '#474B4F',
      'lightgray': '#6b6E70',
      'white': "#ffffff",
      'black': "#000000"
    },
  },
  plugins: [],
}

