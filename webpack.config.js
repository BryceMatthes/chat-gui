<<<<<<< HEAD
require('dotenv').config();
require('webpack');

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
=======
require('webpack')
>>>>>>> December-Fixes

module.exports = {
    devServer: {
        contentBase: './demo',
        port: 8282
    },
    entry: {
<<<<<<< HEAD
        chat: [
            'core-js/es6',
            'jquery',
            'moment',
            'normalize.css',
            'font-awesome/scss/font-awesome.scss',
            './assets/chat/js/notification',
            './assets/chat/img/favicon.png',
            './assets/chat.js',
        ],
        streamchat: [
            'core-js/es6',
            'jquery',
            'moment',
            'normalize.css',
            'font-awesome/scss/font-awesome.scss',
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
        new ExtractTextPlugin({ filename: '[name].css' }),
        new webpack.DefinePlugin({
            WEBSOCKET_URI: process.env.WEBSOCKET_URI ? `'${process.env.WEBSOCKET_URI}'` : '"wss://www.destiny.gg/ws"',
            API_URI: process.env.API_URI ? `'${process.env.API_URI}'` : '',
            LOGIN_URI: process.env.LOGIN_URI ? `'${process.env.LOGIN_URI}'` : 'false',
        }),
    ],
=======
        demo: './assets/demo.js',
        chat: './assets/chat.js'
    },
>>>>>>> December-Fixes
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
<<<<<<< HEAD
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules\/(?!(timestring)\/).*)/,
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
            },
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' },
                        { loader: 'postcss-loader' },
                    ]
                })
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
=======
                test: /\.m?js$/,
                exclude: /(node_modules|)/,
                loader: 'babel-loader',
                options: {presets: ['@babel/preset-env']}
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {name: 'img/[name].[ext]'}
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader',
                options: {minimize: true}
            }
        ]
    },
>>>>>>> December-Fixes
    context: __dirname,
    devtool: false
};
