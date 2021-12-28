const path = require("path");
const HtmlWebpackPlugin= require('html-webpack-plugin');
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "HtmlWebpackPlugin Demo",
      template: "./src/bejeweled.html",
    }),
    new webpack.BannerPlugin(`Copyright PCS ${new Date().getFullYear()}`),
    new CompressionPlugin(),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset" /*,
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024,
          }
        }*/,
      },
    ],
  },
};
