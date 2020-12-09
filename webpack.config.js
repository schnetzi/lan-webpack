const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index',
		countdown: './src/views/countdown/countdown',
		article: './src/views/article/article',
		login: './src/views/login/login',
		poll: './src/views/poll/poll',
		layout: './src/views/layout/layout',
		'layout-404': './src/views/layout-404/layout-404',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		contentBase: './dist',
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin(), // index.html
		new HtmlWebpackPlugin({
			filename: 'countdown.html',
			template: 'src/views/countdown/countdown.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'article.html',
			template: 'src/views/article/article.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'login.html',
			template: 'src/views/login/login.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'poll.html',
			template: 'src/views/poll/poll.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'footer.html',
			template: 'src/views/layout/layout.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'layout-404.html',
			template: 'src/views/layout-404/layout-404.html',
		}),
	],
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: require('sass'),
						},
					},
				],
			},
		],
	},
};
