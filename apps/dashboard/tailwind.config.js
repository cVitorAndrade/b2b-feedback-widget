import uiPreset from "../../packages/ui/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [uiPreset],

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
