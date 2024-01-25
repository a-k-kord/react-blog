import type webpack from "webpack";

export function buildResolvers(
    src: string
): webpack.ResolveOptions | undefined {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [src, "node_modules"],
        mainFiles: ["index"],
        alias: {},
    };
}
