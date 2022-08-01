const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    port: 3001,
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.mjs'],
    alias: {
      backend: path.resolve(__dirname, '../backend/build/index.main.mjs'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './public/index.html',
    }),
  ],
};
