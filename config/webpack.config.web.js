/*
    Configuracion web
*/
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config');

const webConfig = {
    target: 'web',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"web"'
            }
        }),
    ],

    node: {
        fs: 'empty'
    },
}

const webpackConfig = merge.smart(baseConfig, webConfig);
module.exports = webpackConfig;