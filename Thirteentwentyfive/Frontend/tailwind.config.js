// tailwind.config.js
import heroui from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",

  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      roboto: ['Roboto', 'system-ui', 'sans-serif'],
    },
  },
};

export const darkMode = "class"
export const plugins = [
  heroui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#F57121",
            "50": "#fff6ed",
            "100": "#feecd6",
            "200": "#fcd4ac",
            "300": "#fab677",
            "400": "#f78c40",
            "500": "#f57121",
            "600": "#e65210",
            "700": "#bf3c0f",
            "800": "#973115",
            "900": "#7a2b14",
            "950": "#421308",
          },
          secondary: {
            DEFAULT: "#2A2A86",
          },
        },
      },
    },
  }),
  require("postcss-import"),
  require("tailwindcss"),
  require("autoprefixer"),
];
