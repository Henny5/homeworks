const path = require("path");
const HtmlWebpackPlugin= require('html-webpack-plugin');
const webpack = require("webpack");


module.exports = {
  mode:"development",
  entry: "./src/snakeGame.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "HtmlWebpackPlugin Demo",
      template: "./src/snakeGame.html",
    })
    
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
        test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
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
