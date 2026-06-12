/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        police: {
          900: '#0B1528',
          800: '#112240',
          700: '#1D3557',
        }
      }
    }
  },
  plugins: [],
}