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
        'lighterGray': '#363636',
        'lighterGray2': '#4A4A4A',
        'textGray': '#ACACAC',
      },
      padding: {
        'new1': '0.5rem 0',
        'new2': '5rem 0',
        'new3': '2rem 3rem',
        'new4': '0 2rem',
        'new5': '0.2rem 0.3rem',
        '1new5': '0.2rem 0.2rem',
        'new6': '2rem 5rem',
        '26px': '26px',
        '27px': '27px',
        '46px': '46px',
        '47px': '47px',
      },
      minHeight: {
        '400': '400px',
        '450': '450px',
      },
      height: {
        '42px': '42px',
      }
    },
  },
  plugins: [],
}