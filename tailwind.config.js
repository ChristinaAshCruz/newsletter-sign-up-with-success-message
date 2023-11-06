/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      tomato: "hsl(4, 100%, 67%)",
      "dark-slate-gray": "hsl(234, 29%, 20%)",
      "charcoal-gray": "hsl(235, 18%, 26%)",
      grey: "hsl(231, 7%, 60%)",
      white: "hsl(0,0%,100%)",
      pink: "#FC5478",
      orange: "#fc6a3c",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontSize: {
      "6xl": "3rem",
      "7xl": "3.75rem",
    },
    extend: {
      width: {
        200: "55rem",
      },
    },
  },
  plugins: [],
};
