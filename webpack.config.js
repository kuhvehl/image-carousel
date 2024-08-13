const path = require("path");

module.exports = {
  entry: "./src/image-carousel.js",
  output: {
    filename: "image-carousel.bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "Image-carousel",
    libraryTarget: "umd",
    globalObject: "this",
  },
  mode: "production",
};
