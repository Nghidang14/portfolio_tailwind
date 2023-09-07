/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bgIT': "url('/src/images/pexels-lukas-574069.jpg')",
        }),
      fontFamily: {
        custom: ['Fira Sans Condensed', 'sans'],
      },
    },
  },
  plugins: [],
}