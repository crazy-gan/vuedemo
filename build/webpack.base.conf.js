'use strict'
//path模块提供了处理文件和目录路径的使用工具
const path = require('path')
//utils是vue开发环境的webpack相关配置文件，主要来处理css-loader和vue-style-loader
const utils = require('./utils')
//导入config/index.js，主要用来定义一些开发和生产环境的属性
const config = require('../config') 
//解决各种css文件的，定义了诸如css，less之类的和样式有关的loader
const vueLoaderConfig = require('./vue-loader.conf')
//引入jQuery需要的配置文件
var webpack = require('webpack');

//获取根目录
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  //入口
  entry: {
    vendors:[
      'font-awesome-loader'
    ],
    app: './src/main.js'
  },
  //出口，配置webpack输出路径、名称和静态文件路径
  output: {
    path: config.build.assetsRoot, //用来存放打包后文件的输出目录
    filename: '[name].js', //指定编译后输出文件的名称
    //静态资源路径（判断目前所处环境）
    //在开发环境下，路径为艮目录
    //在生产环境下，路径为static文件夹
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  //webpack模块解析规则
  resolve: {
    //extensions字段，指定检测的文件后缀
    extensions: ['.js', '.vue', '.json'],
    //指定别名，在引用文件路径中，如果有别名的符号，会被替换成指定路径
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
   
  },
   //配置如何处理模块
   //module配置eslint、vue、js、图片资源、字体图标、等加载的loader
   //安装项目依赖包之后，一般都要检查rules里面是否有对应的loader配置         
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // node主要是阻止一些webpack的默认注入行为，因为在vue中，已经具备了这些功能
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
   //引入jQuery需要的配置文件
  plugins: [
      new webpack.optimize.CommonsChunkPlugin('common.js'),
      new webpack.ProvidePlugin({
           jQuery: "jquery",
           $: "jquery",
           //bootstrap依赖的popper.js 配置
           Popper: ['popper.js', 'default']
      })
  ]
}
