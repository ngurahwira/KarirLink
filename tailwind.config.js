/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/index.html"],
  theme: {
    container: {
      center: true,
      padding: "16",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
