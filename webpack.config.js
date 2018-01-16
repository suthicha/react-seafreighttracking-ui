const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
		entry: "./src/index.js",
		output: {
			    path: path.resolve(__dirname, 'dist'),
					filename: 'bundle.js',
					publicPath: '/', 
		},
		module: {
				rules: [
						{ 	test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"  },
						{
							test: /\.global\.scss$/,
							use: ExtractTextPlugin.extract({
							  fallback: 'style-loader',
							  use: [
								{
									loader: 'css-loader',
									options: {
									sourceMap: true
									}
								},
								{
									loader: 'sass-loader'
								} 
							  ]
							})
						},
						{
							test: /^((?!\.global).)*\.scss$/,
							use: ExtractTextPlugin.extract({
								fallback: 'style-loader',
								use:[
									  {
										loader: 'css-loader',
										options: {
										  modules: true,
										  sourceMap: true,
										  importLoaders: 1,
										  localIdentName: '[name]__[local]__[hash:base64:5]'
										}
									  },
									  {
										loader: 'sass-loader'
									  }
								]
							})
						},
						{
							test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
							use: {
								loader: 'url-loader',
								options: {
									limit: 10000,
									mimetype: 'image/svg+xml'
								}
							}
						},
				] 
		},
		devServer: {
				 contentBase: path.join(__dirname, "dist"),
				 historyApiFallback: true,
				 compress: true,
				 port: 9000 
		},
		plugins: [
				new ExtractTextPlugin({filename:"styles.css"},{allChunks: true}),
				new HtmlWebpackPlugin({
						   hash: false,
						   template: "./index.html"   
				})		  
		]
}

module.exports = config;

