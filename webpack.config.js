const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index',
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
		new CopyPlugin({
			patterns: [{ from: 'src/assets/images', to: 'images' }],
		}),
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
			filename: 'articles.html',
			template: 'src/views/articles/articles.html',
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
			filename: 'layout.html',
			template: 'src/views/layout/layout.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'layout-404.html',
			template: 'src/views/layout-404/layout-404.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'profile.html',
			template: 'src/views/profile/profile.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'info-box.html',
			template: 'src/views/info-box/info-box.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'poll-preview.html',
			template: 'src/views/poll-preview/poll-preview.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'table.html',
			template: 'src/views/table/table.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'hero.html',
			template: 'src/views/hero/hero.html',
		}),
		new HtmlWebpackPlugin({
			filename: 'ajax.html',
			template: 'src/views/ajax/ajax.html',
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
				//IMAGE LOADER
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader',
			},
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
