/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         "background": "#0D1117",
        "main-branding-primary": "#89128A",
        "main-branding-light": "#F8F1F8",
        "white": "#FFF",
        "primary-font-color": "#DA8BDB",
        "secondary-font-color": "#F8F9FC",
        "primary-transparent": "rgba(121, 82, 179, 0.20)",
        "gray-3": "#8492A6",
      },
      fontFamily: {
        "Nunito": ["Nunito Sans"]
      },
      width: {
        "@90": "90%"
      }
    },
  },
  plugins: [],
}

