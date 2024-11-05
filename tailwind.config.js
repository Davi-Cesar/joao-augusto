const { title } = require("process");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('../public/bg.png')",
      },
      backdropBlur: {
        none: "0",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      fontFamily: {
        display: ["Rokkit"],
        body: ["Ubuntu"],
      },
    },
  },
  plugins: [],
};
