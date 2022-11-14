const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugun = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.html$/, use: 'html-loader'
            },
            {
                test: /\.css$/, use: [ MiniCssExtractPlugun.loader, 'css-loader' ]
            },
            {
                test: /\.js$/, exclude: '/node_modules/', use: 'babel-loader' 
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }
        ),
        new MiniCssExtractPlugun(),
    ],
    mode: 'development'
}