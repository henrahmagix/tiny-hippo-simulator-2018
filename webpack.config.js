const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public');
const PHASER_DIR = path.resolve(__dirname, 'node_modules', 'phaser');
const NODE_ENV = process.env.NODE_ENV;

const HtmlWebpackPlugin = require('html-webpack-plugin');

function noop() {};
function forProduction(plugin) {
	return NODE_ENV === 'production' ? plugin : noop;
};

module.exports = {
	entry: `${APP_DIR}/index.js`,
	output: {
		path: BUILD_DIR,
		filename: 'js/bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		modules: [APP_DIR, 'node_modules'],
		alias: {
			// https://github.com/webpack/webpack/issues/4666
			constants: `${APP_DIR}/constants`,
			phaser: path.join(PHASER_DIR, 'build/custom/phaser-split.js'),
			pixi: path.join(PHASER_DIR, 'build/custom/pixi.js'),
			p2: path.join(PHASER_DIR, 'build/custom/p2.js'),
		},
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
				include: APP_DIR,
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				]
			},
			{
				test: /\.(png|jpe?g|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						// Convert images < 8kb to base64 strings
						limit: 8000,
						name: 'images/[hash]-[name].[ext]'
					}
				}]
			},
			// TODO: when phaser 3 is released, it will work with webpack so other imports won't be needed.
			// https://github.com/photonstorm/phaser/issues/2762
			{
				test: /pixi\.js/,
				use: [{
					loader: 'expose-loader',
					options: 'PIXI',
				}],
			},
			{
				test: /phaser-split\.js$/,
				use: [{
					loader: 'expose-loader',
					options: 'Phaser',
				}],
			},
			{
				test: /p2\.js/,
				use: [{
					loader: 'expose-loader',
					options: 'p2',
				}],
			},
		],
	},
	plugins: [
		forProduction(new webpack.optimize.UglifyJsPlugin()),
		new HtmlWebpackPlugin({
			hash: true,
			path: BUILD_DIR,
			filename: 'index.html',
			template: `${APP_DIR}/index.html`
		})
	],
	devServer: {
		contentBase: BUILD_DIR,
		port: 8080,
		stats: 'minimal',
	},
};
