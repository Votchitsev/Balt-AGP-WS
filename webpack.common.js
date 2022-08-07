const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
