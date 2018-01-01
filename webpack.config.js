const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
		entry: "./src/index.js",
		output: {
			    path: path.resolve(__dirname, 'dist'),
			    filename: 'bundle.js' 
		},
		module: {
				rules: [
						{ 	test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"  },
						{
					        test: /.scss$/,
								use: ExtractTextPlugin.extract({
										fallback: 'style-loader',
										use: ["css-loader", "sass-loader"]
								})      
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
				new ExtractTextPlugin("style/styles.css",{allChunks: true}),
				new HtmlWebpackPlugin({
						   hash: false,
						   template: "./index.html"   
				})		  
		]
}

module.exports = config;

