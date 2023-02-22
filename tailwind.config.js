/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#5d70ed",
        "white-smoke": "#ccdae7",
        "white-gray": "#a7b5c4",
        "gray-dark": "#6c7883",
        "pink-color": "#d6419d",
      },
    },
  },
  plugins: [],
};
