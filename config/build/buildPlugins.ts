import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpack from "webpack";
import { BuildPaths } from "./types/config";

export function buildPlugins(
    { html }: BuildPaths,
    isDev: boolean
): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: html,
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? "css/[name].css" : "css/[name].[contenthash:8].css",
            chunkFilename: isDev ? "css/[name].chunk.css" : "css/[name].[contenthash:8].chunk.css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
        }),
        ...(isDev
            ? [
                  // new webpack.HotModuleReplacementPlugin(),
                  new ReactRefreshWebpackPlugin(),
              ]
            : []),
    ];
}
