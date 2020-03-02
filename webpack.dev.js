const merge = require('webpack-merge');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const common = require('./webpack.common.js');

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true
};

module.exports = merge(defaultConfig, common, config);