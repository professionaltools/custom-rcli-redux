//公共plugins配置
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require("./utils")
module.exports = function () {
  return {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: utils.resolve('static'),
          to: utils.resolve('dist/static'),
          ignore: ['.*']
        }
      ])
    ]
  }
}
