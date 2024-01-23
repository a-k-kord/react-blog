import path from "path";
import type { Configuration } from "webpack";
import { buildDevServer } from "./config/build/buildDevServer";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildPlugins } from "./config/build/buildPlugins";
import { buildResolvers } from "./config/build/buildResolvers";
import { BuildMode, BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
  src: path.resolve(__dirname, "src"),
};

export default (env: {mode: string, port: number}) => {
  const mode: BuildMode = (env.mode as BuildMode) || "development";
  const port = env.port || 3000;
  const { entry, build, src } = paths;
  const isDev = mode === "development";

  const config: Configuration = {
    mode,
    entry,
    output: {
      path: build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(paths, isDev),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(src),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(Number(port)) : undefined,
  };

  return config;
};
