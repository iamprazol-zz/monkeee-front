const webpack = require("webpack");
const path = require("path");

process.env.NODE_ENV = "development";

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './',
      publicPath: '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader',  'eslint-loader']
        },
        { 
          test: /\.css$/,
          use: [ 
            'style-loader',
            'css-loader', 
          ],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.API_URL": JSON.stringify("http://user.me/api")
      })
    ],
  };