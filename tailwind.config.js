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
      },
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif']  
      }
    },
  },
  plugins: [],
}
