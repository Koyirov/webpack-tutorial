const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9001/',
    },
    mode: 'production',
    optimization: {
      splitChunks: {
          chunks: 'all',
          minSize: 3000
      }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 3 kilobytes
                    }
                }
            },
            {
              test: /\.txt$/,
              type: 'asset/source',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader',
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'Hello World',
            template: 'src/page-template.hbs',
            description: 'Hello world',
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: "kiwi.html",
            chunks: ['kiwi'],
            title: 'Hello World',
            template: 'src/page-template.hbs',
            description: 'Kiwi',
            minify: false
        }),
        new ModuleFederationPlugin({
            name: 'HelloWorldApp',
            filename: 'remoteEntry.js',
            exposes: {
                './HelloWorldButton': './src/components/hello-world-button/hello-world-button.js',
            }
        })
    ]
}