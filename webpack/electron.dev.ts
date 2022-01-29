import * as webpack from "webpack";
import * as path from "path";

import { spawn } from "child_process";

import paths from "./webpacks.paths";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default {
  mode: "development",
  target: ["web"],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  entry: path.resolve(paths.reactPath, "index.tsx"),
  output: {
    path: paths.reactBuildPath,
    filename: "[name].[fullhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
      },
      {
        test: /\.s?(c|a)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.publicPath, "index.ejs"),
      favicon: path.resolve(paths.publicPath, "favicon.ico"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
    static: {
      publicPath: "/",
    },
    setupMiddlewares(middlewares: any, devServer: any) {
      console.log("Starting Electron...");
      spawn("yarn", ["electron:dev"], {
        shell: true,
        env: process.env,
        stdio: "inherit",
      })
        .on("close", (code) => process.exit(code!))
        .on("error", (error) => console.error(error));

      return middlewares;
    },
  },
} as webpack.Configuration;
