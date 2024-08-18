/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'zoom-in-out': {
          '0%, 80%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)', // Adjust this value for the desired zoom level
          },
        },
      },
      animation: {
        'zoom-in-out': 'zoom-in-out 3s ease-in-out infinite', // Adjust the duration as needed
      },
    },
  },
  plugins: [],
}
