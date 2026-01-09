/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tir-blue': '#1e3a8a',
        'tir-dark': '#0f172a',
        'tir-green': '#16a34a',
        'tir-yellow': '#facc15',
      },
    },
  },
  plugins: [],
}
