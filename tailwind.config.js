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
      }
    },
  },
  plugins: [],
}