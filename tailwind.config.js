/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins", sans-serif;'],
      },
      colors: {
        primaryGray: "#262831",
        primaryRed: "#bf0202",
        backgroundWhite: "#e7ecef"
      }
    },
  },
  plugins: [],
}

