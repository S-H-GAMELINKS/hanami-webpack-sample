module.exports = {
    entry: './webpack/index.js',
    output: {
        filename: 'index.js',
        path: `${__dirname}/public/assets`
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