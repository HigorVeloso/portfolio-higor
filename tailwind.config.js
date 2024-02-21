/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   /*  colors: {
      'verde-claro': '#4ade80',
      'cor-banner': '#172554',
    }, */
    extend: {
      fontFamily: {
        'custom-roboto': ['Roboto', 'sans-serif'],
      },
    },
    keyframes: {
      sino_kf: {
        '0%, 100%': {
          transform: 'rotate(-10deg)'
        },
        '50%': {
          transform: 'rotate(10deg)'
        }
      }
    },
    animation: {
      sino: 'sino_kf 0.31s ease-in-out infinite' 
    },
    extend: {},
  },
  plugins: [],
}
