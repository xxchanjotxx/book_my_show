module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navbar_color: {
          // 50 for streaming now in movie info
          50: "#1F263A",
          100: "#d3d4e1",
          200: "#b6b8c9",
          300: "#989bb2",
          400: "#7c7f9b",
          500: "#636582",
          600: "#4c4f66",
          700: "#363849",
          800: "#21222e",
          900: "#0a0a16",
        },
        premiere: {
          50: "#edf0fd",
          100: "#cfd3e5",
          200: "#b0b6cf",
          300: "#9099ba",
          400: "#727ca6",
          500: "#58638c",
          600: "#454d6e",
          700: "#30374f",
          800: "#2C3248",
          900: "#080b17",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
