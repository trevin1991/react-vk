module.exports = {
    entry: [
        "babel-polyfill",
        "./src/index.js"
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015", "stage-0"],
                plugins: ["react-html-attrs", "transform-class-properties", "transform-decorators-legacy"]
            }
        }]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        hot: true
    }
};