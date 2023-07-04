/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Banner': "url('./src/assets/images/Banner.jpeg')",
        'Tank': "url('./src/assets/images/waterTank.svg')",
        'BannerLanding': "url('./src/assets/images/wetFloor.jpeg')",
        'Worm': "url('./src/assets/images/worm.jpg')",
      },
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif'],
        'Script':["Clicker Script", "cursive"],
        'Playfair': ['Playfair Display', 'serif']
      },
      keyframes: {
        liquid: {
          '0%' : { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation:{
        liquid: 'liquid 12s linear infinite'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
