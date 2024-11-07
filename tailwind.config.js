/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "#fff"
        },
        grey: {
          DEFAULT: "#F0F3F7",
          100: "#B8BBBD"
        },
        black: {
          DEFAULT: "#000",
          100: "#16191D"
        }
      }

      
    },
  },
  plugins: [],
}

