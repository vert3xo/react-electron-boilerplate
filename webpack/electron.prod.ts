import * as webpack from "webpack";
import * as path from "path";

import paths from "./webpacks.paths";

export default {
  mode: "production",
  target: "electron-main",
  entry: {
    main: path.resolve(paths.electronPath, "main.ts"),
  },
  output: {
    path: paths.electronBuildPath,
    filename: "[name].[fullhash].js",
  },
} as webpack.Configuration;
