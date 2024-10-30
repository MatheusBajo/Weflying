/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // Observa o index.html na raiz
    "./src/**/*.{html,js}",  // Observa os arquivos dentro da pasta src
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8px',
    },
    countainer: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': "1400px",

        '3xl': "1600px",


      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        'yellow': '#FFE32A',
        'cream': '#f9f8f4',
        dark: {
          'green': '#0b241a',
        }
      }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-justify': {
          'text-align': 'justify',
        },
      });
    },
  ],
}