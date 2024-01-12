import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildPaths } from './types/config';

export function buildPlugins({html}: BuildPaths): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
  ];
};
