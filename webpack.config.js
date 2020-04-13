const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [
        './frontEnd/client/src/index.js',
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        // New plugin
        new HtmlWebpackPlugin({
            // injects bundle.js to our new index.html
            inject: true,
            // copys the content of the existing index.html to the new /build index.html
            template: path.resolve('./frontEnd/client/dist/index.html'),
        }),
    ],
    output: {
        path: `${__dirname}/frontEnd/client/build`,
        publicPath: '/',
        filename: 'bundle.js',
    },
};
