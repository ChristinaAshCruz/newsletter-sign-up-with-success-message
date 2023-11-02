/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      tomato: "hsl(4, 100%, 67%)",
      "dark-slate-gray": "hsl(234, 29%, 20%)",
      "charcoal-gray": "hsl(235, 18%, 26%)",
      grey: "hsl(231, 7%, 60%)",
      white: "hsl(0,0%,100%)",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      width: {
        200: "50rem",
      },
    },
  },
  plugins: [],
};
