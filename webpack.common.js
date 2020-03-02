const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = {
    BASE: path.resolve(__dirname),
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
};

module.exports = {
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                include: [
                    path.resolve(paths.SRC, 'styles'),
                ],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            blocks: path.resolve(paths.SRC, 'blocks'),
            constants: path.resolve(paths.SRC, 'constants'),
            styles: path.resolve(paths.SRC, 'styles'),
            utils: path.resolve(paths.SRC, 'utils'),
        }
    }
};
