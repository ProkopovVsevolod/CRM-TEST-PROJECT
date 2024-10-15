const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = (env) => {
    const isDev = env.mode === 'development'
    const scriptsLoader = () => {
        return [
            {
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: 'usage',
                                corejs: '3',
                                targets: '> 0.2%, not dead'
                            }
                        ],
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ]
                }
            }
        ]
    }

    return {
        context: path.resolve(__dirname, './src'),
        entry: './index.tsx',
        devtool: isDev ? 'inline-source-map' : false,
        output: {
            filename: 'crmApp.js',
            path: path.resolve(__dirname, '../dist')
        },
        resolve: {
            modules: [path.resolve(__dirname, './src'), 'node_modules'],
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.json'],

        },
        mode: env.mode ?? 'development',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title: "CRM",
                template: "./index.html",
            }),
            new MiniCssExtractPlugin({
                filename: !isDev ? '[name].[contenthash].css' : '[name.css]'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: [/node_modules/],
                    use: scriptsLoader()
                },
                {
                    test: /\.css$/i,
                    exclude: [/node_modules/],
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    namedExport: false,
                                    localIdentName: '[local]-[hash:base64:5]',
                                    exportLocalsConvention: 'camelCaseOnly'
                                }
                            }
                        }
                    ]
                }
            ]
        },
        devServer: {
            port: 3001,
            hot: true
        },
        optimization: {
            usedExports: true
        },
        performance: {
            hints: false
        }
    }
}
