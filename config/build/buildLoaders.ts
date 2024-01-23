import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import webpack from "webpack";

export function buildLoaders(
    isDev: boolean
): webpack.RuleSetRule[] | undefined {
    return [
        {
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: "file-loader",
                },
            ],
        },
        {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: [
                        [
                            "i18next-extract", 
                            { 
                                // nsSeparator: "~",
                                locales: ["en", "ru"], 
                                keyAsDefaultValue: true,
                            }
                        ],
                    ],
                },
            },
        },
        {
            test: /\.tsx?$/,
            use: [
                {
                    loader: "ts-loader",
                    options: {
                        getCustomTransformers: () => ({
                            before: [isDev && ReactRefreshTypeScript()].filter(
                                Boolean
                            ),
                        }),
                        transpileOnly: isDev,
                    },
                },
            ],
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
