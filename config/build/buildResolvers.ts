import webpack from 'webpack';

export function buildResolvers(): webpack.ResolveOptions | undefined {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    };
}
