path = require('path');
const webpack = require('webpack');
const babel = require('babel-core');

module.exports = {
 devtool: 'eval',
 entry: './src/app.js',
 output: {
   path: path.join(__dirname, 'build'),
   filename: 'bundle.js',
   publicPath: '/static/',
 },
 module: {
   loaders: [
	 {
	   test: /\.js$/,
	   loaders: ['babel']
	 }
   ],
 },
};

/*
var webpack = require("webpack");
new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});
*/
