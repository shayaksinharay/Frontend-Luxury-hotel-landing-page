/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        luxor: {
          cream: "#ECE9E0",
          lightSand: "#EEECE6",
          sage: "#DADFD6",
          muted: "#CFCFCA",
          darkGreen: "#0F2B23",
          forest: "#19372E"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Playfair Display", "serif"]
      }
    }
  },
  plugins: []
}