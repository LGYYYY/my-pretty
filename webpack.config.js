const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');
const isDev = process.env.NODE_ENV === "development";


const config = {
    mode:isDev ? "development":"production", //默认是两种模式 development production
    entry: {
        index: [path.resolve(__dirname,'../src/index.js')], //将index.js放入到入口处
    },
    output:{
        filename:'[name].[hash:8].js', //配置入口处的文件在打包后的名字，为了区分名字使用hash加密
        chunkFilename:'[name].[chunkhash:8].js', //配置无入口处的chunk文件在打包后的名字
        path:path.resolve(__dirname,'../dist')  //文件打包后存放的位置   
    },
    module:{
        rules:[
            {
                test:/\.js[x]?$/, //匹配js或者jsx文件
                exclude:/node_modules/, //排除node依赖包的解析
                include: path.join(__dirname,'../src'), //针对src文件夹里的文件解析
                use:[{
                        loader:'babel-loader?cacheDirectory=true',
                        options:{
                            presets:['@babel/preset-env','@babel/preset-react'],
                            plugins:['@babel/plugin-syntax-dynamic-import',['@babel/plugin-transform-runtime']]
                        }
                 }]
            },
            {
                test:/\.(sa|sc|c)ss$/,
                use:[
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{
                            modules: {
                                localIndentName:'[local][name]-[hash:base64:4]'
                            }
                        }
                    },
                    {
                         loader:'sass-loader',
                    },
                    // {
                    //     loader:'postcss-loader',
                    //     options:{
                    //         plugins:[require('autoprefixer')]
                    //     }
                    // },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                          ident: 'postcss',
                          plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            require('postcss-preset-env')({
                              autoprefixer: {
                                flexbox: 'no-2009',
                              },
                              stage: 3,
                            }),
                          ]
                        },
                    },
                ]
            },
            {
                test:/\.less$/,
                use:[
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{
                            modules:{
                                localIndentName:'[local][name]-[hash:base64:4]'
                            }
                        }
                    },
                    {
                         loader:'less-loader',
                    },
                    // {
                    //     loader:'postcss-loader',
                    //     options:{
                    //         plugins:[require('autopredixer')]
                    //     }
                    // }
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                          ident: 'postcss',
                          plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            require('postcss-preset-env')({
                              autoprefixer: {
                                flexbox: 'no-2009',
                              },
                              stage: 3,
                            }),
                          ]
                        },
                    },
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:1024, //小于1m时使用url-loader
                        fallback:{
                            loader:'file-loader',
                            options:{
                                name:'img/[name].[hash:8].[ext]' //创建一个img的文件夹并将图片存入
                            }
                        }
                    }
                }
            },
            {
                test:/\.(mp4|mp3|webm|ogg|wav)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:1024,
                        fallback:{
                            loader:'file-loader',
                            options:{
                                name:'media/[name].[hash:8].[ext]'
                            }
                        }
                    }
                }
            }
        ]
    },
    plugins:[
        new Webpack.DefinePlugin({  //创建一个在编译时可以配置的全局变量
            'process.env':{
                NODE_ENV:isDev ? '"development"':'"production"'
            }
        }),
        new Webpack.HotModuleReplacementPlugin(), //webpack的热更新模块
        new HtmlWebpackPlugin({
            title:'guoyangDemo',
            filename:'index.html',
            // template: path.join(__diranme,'../index.html'),
            template: 'template/index.html',
            chunk:'all'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash:8].css',
            chunkFilename:'[id].[contenthash:8].css'
        }),
        new CleanWebpackPlugin()
    ],
    resolve:{
        modules:['node_modules'], //去哪些地方寻找第三方模块,默认是在node_modules下寻找        extensions:['js','jsx','json'], //当导入文件没有带后缀时，webpack会去自动寻找这种后缀的文件
        alias:{
            '@src':path.join(__dirname,'../src'), //将原导入路径设置成新的路径，就不需要每次导入时带很长的斜杠了
        }
    },
    optimization: {
    	nodeEnv: false
  	},
    devtool:'inline-source-map',
};

module.exports = config;