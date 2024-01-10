/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'beat': 'beat .50s infinite alternate'
      },
    },
    fontFamily: {
      courgette: 'courgette',
      dancing: 'dancing-script',
    },
  },
  plugins: [],
}

