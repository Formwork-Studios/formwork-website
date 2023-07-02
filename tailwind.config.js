/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    fontFamily: {
      'fancy': ['Lora', 'serif'],
      'sans': ['Work Sans', 'sans-serif'],
    },
    extend: {
      flex: {
        'basis-50': '0 0 50%'
      },
      colors: {
        primary: 
        {
          darK: "#409087",
          DEFAULT: "#14B8A6",
          light: "#5BCDC1",},
        secondary: '#8A4F7D', 
        tertiary: '#F93943',
        black: '#252323',
        gray: '#9fa1a5',
        white: {
          300: '#f6f6f6',
          DEFAULT: '#e5e3e3',
          500: '#d4d0d0',
          600: '#BDB9B9',
          700: ' #A7A3A3',
          800: '#918D8D'
      }
    },
  },
  plugins: [],
}};
