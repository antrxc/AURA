/** @type {import('tailwindcss').Config} */
export default {
  content: ["./client/index.html", "./client/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#121212',
        'primary': '#00ff00',
        'text': '#ffffff'
      },
      fontFamily: {
        'sans': ['DM Sans', 'serif'],
        'mono': ['Roboto Mono', 'monospace']
      }
    },
  },
  plugins: [],
};