const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  variants: {
    display: ["responsive", "hover", "focus"],
    borderWidth: ["responsive", "last", "first"],
    borderColor: ["responsive", "last", "first"],
    flexDirection: ["responsive", "hover", "focus"],
    border: ["responsive", "hover", "focus"],
    backgroundColor: ["responsive", "odd", "hover", "focus", "group-hover"],
    opacity: ["responsive", "hover", "focus"],
    textColor: ["responsive", "hover", "focus"],
    padding: ["responsive", "last", "first"],
    margin: ["responsive", "last", "first"],
    flexWrap: ["responsive", "last", "first"],
    order: ["responsive"],
  },
  container: {
    center: true,
    padding: {
      default: "1rem",
    },
  },
};

const result = Object.assign({}, defaultTheme, config);
module.exports = result;
