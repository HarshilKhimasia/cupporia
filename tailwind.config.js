/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        markazi: ["Markazi Text", "sans-serif"],
      },
      textColor: {
        primary: "#f4ce14",
      },
    },
  },
  plugins: [],
};
