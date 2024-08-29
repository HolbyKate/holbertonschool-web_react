// config/webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/, // Regex to match .js and .jsx files
                exclude: /node_modules/, // Exclude node_modules directory
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Presets for modern JS and React
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // CSS loaders
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource', // Image loaders
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve .js and .jsx extensions
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
    },
};
