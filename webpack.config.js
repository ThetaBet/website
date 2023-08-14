const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = ({ mode } = { mode: "production"}) => {
    return {
        mode,
        entry: './src/index.js',
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, "dist"),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    use: ["url-loader", "file-loader"]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
}