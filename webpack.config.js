path = require('path');
const webpack = require('webpack');
const babel = require('babel-loader');
const glob = require('glob');

module.exports = {
	devtool: 'eval',
	entry: {
		app: './src/app.js',
		test: glob.sync("./__tests__/**/tests*.js"),
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/build/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loaders: ['babel']
			},
			{
				test: /tests\.js$/,
				exclude: /(node_modules)/,
				loaders: ['babel']
			},
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		// Document Root
		contentBase: "./",
		// 動作ポート指定
		port: 8080,
		// hotモード有効化
		hot: true,
		// これがないと、ブラウザで
		inline: true,
	},
	plugins: [
		// hotモードに必要なプラグイン
		new webpack.HotModuleReplacementPlugin(),
	],
};

/*
new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});
*/
