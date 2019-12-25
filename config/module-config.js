//公共的module配置
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const utils = require("./utils")
module.exports = function (isDev) {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: "babel-loader",
          include: utils.resolve('src'),
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.(js|jsx)$/,
          use: 'react-hot-loader/webpack',
          include: /node_modules/,
        },
        {
          test: /\.s?css$/,
          exclude:[utils.resolve('src/common/style/index.scss'),/node_modules/],
          use: [
            isDev ? 'style-loader' :
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../'
                  }
                },
            {
              loader: "css-loader",
              options: {
                import: true,
                sourceMap: isDev,
                importLoaders: 2,
                modules: {
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              }
            },
            'postcss-loader',
            "sass-loader",
          ]
        },
        {
          test: /\.s?css$/,
          include:[utils.resolve('src/common/style/index.scss'),/node_modules/],
          use: [
            isDev ? 'style-loader' :
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
            {
              loader: "css-loader",
              options: {
                sourceMap: isDev,
              }
            },
            'postcss-loader',
            "sass-loader",
          ]
        },
        {
          test: /\.less$/,
          use: [
            isDev ? 'style-loader' :
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../'
                  }
                },
            {
              loader: "css-loader",
              options: {
                sourceMap: isDev,
              }
            },
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true,
                sourceMap: isDev,
              },
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|svga|apng)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'img/[name].[hash].[ext]',
              }
            },
          ],
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'media/[name].[hash].[ext]',
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'font/[name].[hash].[ext]'
          },
        },
      ]
    }
  }
}
