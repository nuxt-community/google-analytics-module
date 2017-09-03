const { resolve } = require('path')

export default async function module (options) {
  this.addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    options,
    ssr: false
  })
}
