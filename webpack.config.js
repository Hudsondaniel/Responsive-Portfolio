const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',  // Entry point
    output: {
        filename: 'main.js',  // Output bundle
        path: path.resolve(__dirname, 'dist'),  // Output directory
        clean: true,  // Clean the dist folder before each build
    },
    mode: 'development',  // Development mode for hot reloading and debugging
    module: {
        rules: [
        {
            test: /\.css$/,  // Regex to test for CSS files
            use: ['style-loader', 'css-loader'],  // Loaders to handle CSS
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Regex to test for image files
            type: 'asset/resource',  // Handles images using the asset/resource module
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',  // Use the HTML template
        }),
        ],
    devServer: {
        static: './dist',
        open: true,  // Automatically open the browser
    },
};
