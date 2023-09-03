/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        'galano-grotesque': ['sans-serif'], //'Galano Grotesque',
      },
      colors:{
        'caribbean-green':'#00FFB0',
        'port-gore':'#2B2161',
        'port-gore-dark':"#251F47",
        'dark-grey':'#4F4F4F',
        'light-dark-grey':'#B7B7B7',
        'lilac':'#5345AC'
      }
    },
  },
  plugins: [],
}

