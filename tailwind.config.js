/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkOrange: "#DC5F00",
        darkGrey: "#373A40",
        lightGrey: "#686D76",
        solidWhite: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
