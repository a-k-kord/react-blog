import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
export function buildDevServer(port: number): DevServerConfiguration {
    return {
        port,
        compress: true,
        open: true,
        historyApiFallback: true,
        hot: true,
    };

}