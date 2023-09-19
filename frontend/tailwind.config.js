/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {

    // },

    

    

    extend: {
      fontFamily: {
        primary: [ 'Open Sans', 'sans-serif'],
        secondary: [ 'Roboto', 'sans-serif']
      },

      colors: {
        'navy-blue': '#000080',
        'baby-blue': '#89CFF0',
        'cream': '#FFFDD0'
      },

      spacing: {
        '100': '27rem'
      },

    },
  },
  plugins: [
    // "./src/index.css"
  ],
}

