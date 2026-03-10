/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("../../packages/ui/tailwind.config.js")],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
