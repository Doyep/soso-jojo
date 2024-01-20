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
      animation: {
        heartbeat: 'heartbeat 2s infinite',
      },
      backgroundImage: {
        'soso-jojo': "url('/assets/images/background-mini.jpg')",
      },
      colors: {
        'gold': 'rgb(249, 223, 164)',
        'pine': 'rgb(145, 170, 137)',
      },
      keyframes: {
        heartbeat: {
          '0%, 20%, 40%, 100%': { transform: 'scale(1)' },
          '10%, 30%': { transform: 'scale(1.2)' },
        }
      }
    },
    fontFamily: {
      courgette: 'courgette',
      dancing: 'dancing-script',
      cinzel: 'cinzel-decorative',
    },
  },
  plugins: [],
}

