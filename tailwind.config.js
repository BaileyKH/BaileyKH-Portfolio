/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        creepster: ['"Creepster"'],
        poppins: ['"Poppins", sans-serif;'],
      },
      colors: {
        primaryBg: "#160c1f",
        primaryText: "#ffffff",
        primaryAccent: "#ff7940"
      }
    },
  },
  plugins: [],
}

