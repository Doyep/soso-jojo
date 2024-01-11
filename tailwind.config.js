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
    },
    fontFamily: {
      courgette: 'courgette',
      dancing: 'dancing-script',
    },
  },
  plugins: [],
}

