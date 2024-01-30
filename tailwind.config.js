/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bgIT': "url('/gamedev.jpg')",
        }),
      fontFamily: {
        custom: ['Fira Sans Condensed', 'sans'],
      },
    },
  },
  plugins: [],
}