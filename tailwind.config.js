module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: {
          darkest: "#2E1541",
          dark: "#4A2268",
          DEFAULT: "#662F90",
          light: "#803BB5",
          lightest: "#995AC9",
        },
      },
    },
    minHeight: {
      200: "200px",
      300: "300px",
      275: "275px",
    },
    backgroundSize: {
      "10%": "10%",
      "20%": "20%",
    },
    backgroundPosition: {
      "right-bottom-hidden": "right -2.1rem bottom -2.1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  important: true,
}
