module.exports = {
    resolve: {
        root: __dirname
    },
    entry: {
        content: "./src/chrome-app/content.js",
        background: "./src/chrome-app/background.js"
    },
    devtool: "source-map",
    output: {
        path: __dirname,
        filename: "dist/[name].js",
        sourceMapFilename: "[file].map",
        devtoolLineToLine: true
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    }
};