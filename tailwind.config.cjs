/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#3B78DC",
        primary: "#6866DB",
        gray: "#ECF1F4",
        white: "#FFF"
      },
    },
  },
  plugins: [],
}
