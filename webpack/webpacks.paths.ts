import * as path from "path";

const rootPath = path.resolve(__dirname, "..");
const reactPath = path.resolve(rootPath, "src");
const publicPath = path.resolve(rootPath, "public");
const electronPath = path.resolve(rootPath, "electron");

const buildPath = path.resolve(rootPath, "build");
const reactBuildPath = path.resolve(buildPath, "react");
const electronBuildPath = path.resolve(buildPath, "electron");

export default {
  rootPath,
  reactPath,
  publicPath,
  electronPath,
  buildPath,
  reactBuildPath,
  electronBuildPath,
};
