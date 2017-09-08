/*
    Configuracion de electron
*/
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = require('../webpack.config');
const distPath = __dirname + '/../dist/';
const sourcePath = __dirname + '/../src/';

const desktopConfig = {
    target: 'electron',
    
    output: {
        path: distPath,
        publicPath: './',
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"electron"'
            }
        }),
        
        new CopyWebpackPlugin([
            { from: `${sourcePath}main.js`, to: distPath},
        ])
    ],
};

const webpackConfig = merge.smart(baseConfig, desktopConfig);
module.exports = webpackConfig;