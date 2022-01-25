import * as webpack from "webpack";
import * as path from "path";

import { spawn } from "child_process";

import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].[fullhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
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
      template: path.resolve(__dirname, "../public/index.ejs"),
      favicon: path.resolve(__dirname, "../public/favicon.ico"),
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
    onBeforeSetupMiddleware() {
      console.log("Starting Electron...");
      spawn("yarn", ["electron:dev"], {
        shell: true,
        env: process.env,
        stdio: "inherit",
      })
        .on("close", (code) => process.exit(code!))
        .on("error", (error) => console.error(error));
    },
  },
} as webpack.Configuration;
