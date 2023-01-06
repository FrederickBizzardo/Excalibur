/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'JetBrains': ['JetBrains-Regular'],
        'JetBrainsB': ['JetBrains-Bold'],
        'JetBrainsLI': ['JetBrains-LightItalic'],
      },
      fontSize: {
        '40px': '40px',
      },
      colors: {
        'drakGray': '#292929',
        'lightGray': '#707070',
      },
      padding: {
        'new1': '0.5rem 0',
        'new2': '5rem 0',
        'new3': '2rem 3rem',
        'new4': '0 2rem',
        'new5': '0.5rem 3rem',
      }
    },
  },
  plugins: [],
}