/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f98e2b",
        secondary: "#f3f3f3",
      },
      keyframes: {
        popIn: {
          "0%, 50%": {
            width: "0px",
            height: "0px",
            overflow: "hidden",
            transformOrigin: "center",
          },
          "100%": { width: "100vh", height: "100vh" },
        },
      },
      animation: {
        popIn: "popIn 1s ease-in-out",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "3rem",
      },
    },
    backgroundImage: {
      "hero-pattern": "url('./assets/blob.svg')",
    },
  },
  plugins: [],
};
