export default {
  mode: "jit",
  content: ["./pages/**/*.vue", "./components/**/*.vue", "./views/**/*.vue"],
  theme: {
    extend: {
      colors: {
        "color-text": "#dddddd",
        "color-background": "#202028",
        "color-tile-background": "#121821",
        "color-btn-hovered-background": "#222f42",
        "color-btn-active-background": "#016050",
        "color-canvas-background": "#222f42",
      },
    },
  },
};
