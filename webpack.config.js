module.exports = {
    mode: "development",
    entry: [
        require.resolve("./src/checkA.js"),
        require.resolve("./src/checkB.js"),
    ],
    devtool: false,
    module: {
        rules: [
            {
                include: require.resolve("./src/other.js"),
                issuer: require.resolve("./src/checkA.js"),
                use: require.resolve("./loaders/a.js")
            },
            {
                include: require.resolve("./src/other.js"),
                issuer: require.resolve("./src/checkB.js"),
                use: require.resolve("./loaders/b.js")
            }
        ]
    },
    optimization: {
        // namedModules: false,
    }
}