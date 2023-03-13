const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', 
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  resolveLoader: {
    modules: [path.resolve(__dirname, './loaders'), 'node_modules']
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['my-style-loader', 'css-loader']
        }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
};