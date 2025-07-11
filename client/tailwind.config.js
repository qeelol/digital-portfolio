/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JS, TS, JSX, TSX files in src/ and its subdirectories
  ],
  theme: {
    extend: {
      // This is where you'll add your custom colors later if needed
      colors: {
        'primary-light': '#A2F7FF'
      },
    },
  },
  plugins: [],
}