// config/webpack.config.js
import { resolve as _resolve, join } from 'path';

export const entry = './src/index.js';
export const output = {
    path: _resolve(__dirname, 'dist'),
    filename: 'bundle.js',
};
export const module = {
    rules: [
        {
            test: /\.(js|jsx)$/, // Regex to match .js and .jsx files
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
};
export const resolve = {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx extensions
};
export const devServer = {
    static: join(__dirname, 'public'),
    compress: true,
    port: 8080,
};
