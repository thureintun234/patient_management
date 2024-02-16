/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#E0B0FF',
        'third' : '#FFF4F4',
        'secondary': '#F7E6C4',
        'fourth' : '#F1C376',
        'error' : 'red',
        'primaryDark' : '#3F4E4F',
        'secondaryDark' : '#2C3639', 
        'thirdDark' : '#DCD7C9',
        'fourthDark' : '#A27B5C'
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

