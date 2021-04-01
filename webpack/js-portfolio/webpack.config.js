const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    //cual es el punto de entrada de la aplicacion
    entry:'./src/index.js',
    //a donde enviara webpack lo que saldra
    output:{
        //Nos permite saber la carpeta de nuesto proyecto
        path: path.resolve(__dirname, 'dist'),
        filename : 'main.js',
        assetModuleFileName: 'assets/images/[hash][ext][query]',
    },
    resolve:{
        extensions:['.js']
    },
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /node_moudules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.css|.styl$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                ],
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2)$/,
                use:{
                    loader: 'url-loader',
                    options:{
                        limit: 10000,
                        mimetype: "application/font-woff",
                        name: "[name].[ext]",
                        outputPath: "./assets/fonts/",
                        publicPath: "./assets/fonts/",
                        esModule: false,
                    },
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template:'./public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                }
            ]
        })
    ]
}