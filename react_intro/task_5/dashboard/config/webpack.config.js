const path = require('path');

module.exports = {
    mode: 'development', // Set to 'development' for better debugging and faster builds
    entry: './src/index.js', // Ensure this path points to your main entry file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // This regex matches both .js and .jsx files
                exclude: /node_modules/, // Exclude node_modules to avoid processing third-party libraries
                use: {
                    loader: 'babel-loader', // Use babel-loader to handle JavaScript and JSX files
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Specify the Babel presets
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Automatically resolve .js and .jsx file extensions
    },
    devServer: {
        static: path.join(__dirname, 'public'), // Serve static files from the public directory
        compress: true,
        port: 8080,
        hot: true, // Enable hot module replacement
    },
};
