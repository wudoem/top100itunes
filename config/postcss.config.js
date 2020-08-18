const path = require("path");
module.exports = {
  plugins: [
    require("tailwindcss")(
      path.join(process.cwd(), "config/tailwind.config.js")
    ),
    require("autoprefixer"),
  ],
};
