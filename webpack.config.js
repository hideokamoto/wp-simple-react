path = require('path');
const webpack = require('webpack');
const babel = require('babel-loader');

module.exports = {
	devtool: 'eval',
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loaders: ['babel']
			}
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
};

/*
new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});
*/
