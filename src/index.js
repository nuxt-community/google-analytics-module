const { resolve } = require('path')

export default async function module (moduleOptions) {
  const options = this.options['google-analytics'] || moduleOptions

  // see https://github.com/nuxt-community/analytics-module/issues/2
  if (options.ua) {
    options.id = options.ua
    delete options.ua
  }

  this.addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    options,
    ssr: false
  })
}
