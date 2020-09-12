require('dotenv').config();
require('webpack');

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: './demo',
        port: 8282
    },
    entry: {
        chat: [
            'core-js/es6',
            'jquery',
            'moment',
            'normalize.css',
            //'font-awesome/scss/font-awesome.scss',
            './assets/chat/js/notification',
            './assets/chat/img/favicon.png',
            './assets/chat.js',
        ],
        streamchat: [
            'core-js/es6',
            'jquery',
            'moment',
            'normalize.css',
            //'font-awesome/scss/font-awesome.scss',
            './assets/chat/js/notification',
            './assets/chat/img/favicon.png',
            './assets/streamchat.js',
        ],
    },
    output: {
        path: __dirname + '/static',
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin(['static'], { root: __dirname, verbose: false, exclude: ['cache', 'index.htm'] }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new webpack.DefinePlugin({
            WEBSOCKET_URI: process.env.WEBSOCKET_URI ? `'${process.env.WEBSOCKET_URI}'` : '"wss://www.destiny.gg/ws"',
            API_URI: process.env.API_URI ? `'${process.env.API_URI}'` : '',
            LOGIN_URI: process.env.LOGIN_URI ? `'${process.env.LOGIN_URI}'` : 'false',
        }),
    ],
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
		    {
                test: /\.html$/,
                loader: 'html-loader?attrs=img:src'
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules\/(?!(timestring)\/).*)/,
                loader: 'babel-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /(-webfont|glyphicons-halflings-regular)\.(eot|svg|ttf|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: { name: 'fonts/[name].[ext]' }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: { name: 'img/[name].[ext]' }
            }
        ]
    },
    resolve: {
        alias: {
            jquery: 'jquery/src/jquery'
        },
        extensions: ['.ts', '.tsx', '.js']
    },
    context: __dirname,
    devtool: false
};