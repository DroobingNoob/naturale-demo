/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brandGold: "#dcc38a",
        brandGreenDark: "#2b4d2a",
        brandTeal: "#52a19c",
        brandYellow: "#d1a427",
      },
    },
  },
  plugins: [],
}
