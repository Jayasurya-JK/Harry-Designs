/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#D72638',
          dark: '#B51E2E',
          light: '#E84A59',
        },
        eerie: {
          DEFAULT: '#1B1B1B',
          light: '#232323',
          lighter: '#2E2E2E',
        },
        cloud: {
          white: '#F5F5F5',
          dancer: '#F0EEE9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
