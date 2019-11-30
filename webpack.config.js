module.exports = {
    entry: './webpack/index.js',
    output: {
        filename: 'index.js',
        path: `${__dirname}/public`
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: 'svelte-loader',
            }
        ]
    }
}