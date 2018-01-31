const { resolve } = require('path')

module.exports = function module (moduleOptions) {
  const options = this.options['google-analytics'] || moduleOptions

  // prevent plugin from loading in dev
  if (!this.nuxt.options.dev) {
    // see https://github.com/nuxt-community/analytics-module/issues/2
    if (options.ua) {
      options.id = options.ua
      delete options.ua
    }

    this.addPlugin({
      src: resolve(__dirname, './templates/plugin.js'),
      fileName: 'google-analytics.js',
      options,
      ssr: false
    })
  }
}
