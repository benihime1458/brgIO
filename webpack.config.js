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
    output: {
        path: `${__dirname}/frontEnd/client/dist`,
        publicPath: '/',
        filename: 'bundle.js',
    },
};
