//公共的入口配置
const utils = require("./utils")
module.exports = function (argv, isDev) {
  const mode = argv.mode
  const filename = mode === "production" ? "js/[name].[chunkhash].js" : "js/[name].js"
  const chunkFilename = mode === "production" ? "js/[id].[chunkhash].js" : "js/[id].js"
  let entry = ['react-hot-loader/patch', './src/index.js']
  if (!isDev) {
    entry = {
      "app": utils.resolve("src/index.js")
    }
  }
  return {
    entry,
    output: {
      path: utils.resolve('dist'),
      publicPath: isDev ? "/" : "./",
      filename,
      chunkFilename,
    },
    resolve: {
      extensions: [".js", ".jsx", ".scss", ".json"],
      alias: {
        'src': utils.resolve('src'),
        'static': utils.resolve('static'),
      },
      modules: [
        utils.resolve("src"),
        utils.resolve("node_modules")
      ]
    }
  }
}
