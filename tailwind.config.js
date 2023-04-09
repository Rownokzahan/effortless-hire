/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ui-blue': '#7E90FE',
        'ui-purple': '#9873FF',
        'ui-light': '#f4f1ff',
        'ui-light-gray': '#757575',
        'ui-dark': '#1A1919',
      }
    },
  },
  plugins: [],
}