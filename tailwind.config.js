/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '30rem'
    },
    extend: {
      backgroundImage: {
        'soso-jojo': "url('/assets/images/background-mini.jpg')",
      },
      colors: {
        // 'gold': 'rgb(251, 166, 7)',
        'gold': 'rgb(249, 223, 164)',
        'pine': 'rgb(57, 90, 53)',
      },
    },
    fontFamily: {
      courgette: 'courgette',
      dancing: 'dancing-script',
      cinzel: 'cinzel-decorative',
    },
  },
  plugins: [],
}

