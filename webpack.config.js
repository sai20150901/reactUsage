<!-- webpack.config.js -->
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry : {        // 定义入口文件
    main : path.resolve(__dirname,'./src/app.jsx'),
  },
  output: {                                       // 定义出口目录
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.less/,
        use: ['style','css','less']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        })
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'url-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          }
        }
      }
    ]
  },

  resolve: {   // resolve 指定可以被 import 的文件后缀
    extensions: ['.css', '.js', '.json', '.jsx']
  },

  devServer: {
    // host: '10.2.3.245',
    port: 7777,
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    inline: true
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
};

module.exports = config;