import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#f6f2e4",
        darkBg: "#030712",
        lightText: "#030712",
        darkText: "#f6f2e4",
        evergreen: {
          50: "#eff5f0",
          100: "#e0ebe0",
          200: "#c0d8c1",
          300: "#a1c4a3",
          400: "#82b084",
          500: "#629d65",
          600: "#4f7d51",
          700: "#3b5e3d",
          800: "#273f28",
          900: "#141f14",
          950: "#0e160e",
        },
      },
    },
  },
  plugins: [],
});
