const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{html,js}'
  ],
  theme: {
    fontFamily:{
      lato: ["Lato", "sans-serif"]
    },
    extend: {
      backroundImage: {
        'menu': "url('/menu.jpg')",
      },
    },
    colors: {
      ...colors,
      'hippie-blue': {
        '50': '#f7fafc', 
        '100': '#eff6f8', 
        '200': '#d7e8ee', 
        '300': '#bfdae4', 
        '400': '#90bfd0', 
        '500': '#60a3bc', 
        '600': '#5693a9', 
        '700': '#487a8d', 
        '800': '#3a6271', 
        '900': '#2f505c'
      }
    }
  },
  plugins: [],
}
