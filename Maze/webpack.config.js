module.exports = {
    mode: "development",
    module: {
        rules: [{test: /\.jsx?$/, use: ["babel-loader", "eslint-loader"]}, {test: /\.png$/, use: "file-loader"}, {test: /\.jpg$/, use: "file-loader"}]
    },
    devServer: {contentBase: "dist", overlay:false}
}