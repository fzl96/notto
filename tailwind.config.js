/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayish: "#f4f5f7",
        grayishDark: "#141517",
        grayishDark2: "#1a1b1e",
      },
    },
  },
  plugins: [],
}
