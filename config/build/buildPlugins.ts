import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpack from "webpack";
import { type BuildPaths } from "./types/config";

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
            filename: isDev
                ? "css/[name].css"
                : "css/[name].[contenthash:8].css",
            chunkFilename: isDev
                ? "css/[name].chunk.css"
                : "css/[name].[contenthash:8].chunk.css",
        }),
        new webpack.DefinePlugin({
            IS_DEV: isDev,
        }),
        ...(isDev ? [new ReactRefreshWebpackPlugin()] : []),
    ];
}
