/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pink-highlight': '#F392BD',
        'pink-text': '#CD7BA0',
      },
      fontFamily: {
        sans: ['var(--font-neue-montreal)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
