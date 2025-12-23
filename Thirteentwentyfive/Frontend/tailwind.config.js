// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  //   content: [
  //     "./node_modules/@heroui/theme/dist/components/(input|modal|form).js"
  // ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // HeroUI (IMPORTANT)
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },

  darkMode: "class",
  plugins: [heroui()],
};