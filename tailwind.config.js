const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        xxs: '0.625rem'
      },
      colors: {
        bglight: '#F7F9FC',
        bgdark: '#0C1112',
        dashlight: {
          100: '#828282',
          200: '#4F4F4F',
          300: '#484848',
        },
        dashdark: {
          100: '#B5B5B5',
          200: '#172329',
        },
        mainlight: {
          100: '#377DFF',
          200: '#225AA4',
        },
        maindark: {
          100: '#8FBAF3',
          200: '#518EFF'
        },
        alert: '#EB5757'
      },
    },
  },
  plugins: [],
}
