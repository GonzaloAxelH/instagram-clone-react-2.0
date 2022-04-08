module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fill: (theme) => {
      red: theme("colors.red.primary");
    },
    colors: {
      white: "#fff",
      blue: {
        medium: "#005c98",
      },
      black: {
        faded: "#00000059",
        light: "#005c98",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
      },
      red: {
        primary: "#ed4956",
      },
    },
  },
  plugins: [],
};
