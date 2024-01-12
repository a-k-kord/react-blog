import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] | undefined {
    return [
        {
            test: /\.tsx?$/,
            use: ['ts-loader'],
            exclude: /node_modules/,
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  modules: {
                    auto: /\.module\.\w+$/i,
                    localIdentName: isDev 
                        ? "[path][name]__[local]--[hash:base64:5]" 
                        : "[hash:base64:8]",
                  },
                },
              },
              "sass-loader",
            ],
        },
    ];
}