/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'rotate-slow': 'rotate 20s linear infinite',
        'rotate-fast': 'rotate 10s linear infinite',
        'rotate-slower': 'rotate 25s linear infinite',
        'rotate-faster': 'rotate 15s linear infinite',
      },
    },
  },
  plugins: [],
}
