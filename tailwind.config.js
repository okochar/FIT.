/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
  extend: {
    colors: {
      softpink: '#F8E1E7',
      mauve: '#D5A6BD',
      plum: '#5E2750',
      cream: '#FFF9F4',
      sage: '#B8C1A8',
    },
  },
},
  darkMode: 'class', // Enable dark mode support
  plugins: [],
}

content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
]
