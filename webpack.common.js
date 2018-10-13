const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.(png|svg|jpe?g|gif|mp4|webm)$/, use: "file-loader" },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, use: "file-loader" }
    ]
  }
}
