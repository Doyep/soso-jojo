/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'soso-jojo': "url('/assets/images/main.jpg')",
      },
      colors: {
        'gold': 'rgb(251, 166, 7)',
      },
    },
    fontFamily: {
      courgette: 'courgette',
      dancing: 'dancing-script',
    },
  },
  plugins: [],
}

