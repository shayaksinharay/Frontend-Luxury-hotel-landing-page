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
          cream: "#ECE9E0",       // page cream background
          lightSand: "#EEECE6",  // alternate cream
          sage: "#DADFD6",       // pale sage panels
          muted: "#CFCFCA",      // muted panel
          darkGreen: "#0F2B23",  // footer / dark accents
          forest: "#19372E"      // deep forest accent
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
