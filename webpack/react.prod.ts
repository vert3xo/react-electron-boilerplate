import * as webpack from "webpack";
import * as path from "path";

import paths from "./webpacks.paths";

import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

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
        test: /\.s?(c|a)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE === "true" ? "server" : "disabled",
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ parallel: true }), new CssMinimizerPlugin()],
  },
} as webpack.Configuration;
