import * as webpack from "webpack";
import * as path from "path";

import paths from "./webpacks.paths";

import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "production",
  target: ["web"],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  entry: path.resolve(paths.reactPath, "index.tsx"),
  output: {
    path: path.resolve(paths.reactBuildPath),
    publicPath: "./",
    filename: "[name].[fullhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(paths.publicPath, "index.ejs"),
    }),
  ],
} as webpack.Configuration;
