const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: './dist/',
        filename: 'main.js'
    },
    stats: {
        colors: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loaders: ['babel-loader']
        }]
    }
};
