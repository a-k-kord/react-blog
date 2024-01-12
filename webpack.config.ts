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
};

export default (env: {mode: string, port: number}) => {
  const mode = (env.mode as BuildMode) || "development";
  const port = env.port || 3000;
  const { entry, build } = paths;
  const isDev = mode === "development";

  const config: Configuration = {
    mode,
    entry,
    output: {
      path: build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(Number(port)) : undefined,
  };

  return config;
};
