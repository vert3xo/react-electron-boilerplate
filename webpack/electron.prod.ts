import * as webpack from "webpack";
import * as path from "path";

import paths from "./webpacks.paths";

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import TerserPlugin from "terser-webpack-plugin";

export default {
  mode: "production",
  target: "electron-main",
  entry: {
    main: path.resolve(paths.electronPath, "main.ts"),
  },
  output: {
    path: paths.electronBuildPath,
    filename: "[name].js",
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE === "true" ? "server" : "disabled",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ parallel: true })],
  },
} as webpack.Configuration;
