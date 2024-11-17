/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"], // Correctly defines the "karla" font family
      },
    },
  },
  plugins: [],
};
