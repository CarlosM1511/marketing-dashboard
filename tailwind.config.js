/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBg: '#f4f6fa',
        themeUp: '#4caf50',
        themeDown: '#f44336',
        themePurple: '#8b5cf6',
        themePink: '#ec4899',
        themeBlue: '#3b82f6',
        themeOrange: '#f97316',
      }
    },
  },
  plugins: [],
}
