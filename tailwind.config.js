/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ["Raleway", "sans-serif"],
        'cinzel': ["Cinzel", "serif"],
        'inter': ["Inter", "sans-serif"],
      },
      colors: {
        'dark-yellow': '#D99904',
        'light-black': '#151515',
        'solid': '#151515',
        'deep-blue': '#111827',
        'light-gray': '#1F2937',
      },
    },
  },
  plugins: [require("daisyui")],
}

