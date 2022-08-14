const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = () => {
    const dev = {
        entry: ['./src/index.js'],
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            hot: false,
            static: './dist'
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: './src/index.html'
          }),
          new CopyPlugin({
            patterns: [
                {
                  from: "node_modules/@willyfontenelle/dsc-design-tokens/dist/css/globals.css",
                  to: "tokens/globals.css"
                },
                {
                  from: `**/**/*.css`,
                  context: `node_modules/@willyfontenelle/dsc-design-tokens/dist/css`,
                  to: "tokens/[path]/[name][ext]"
                }
            ]
          })
        ],
    }

    return merge(common, dev);
};