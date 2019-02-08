const { resolve } = require('path')

function analyticsModule(moduleOptions) {
  // Turn off during development
  const defaults = {
    debug: {
      sendHitTask: !this.options.dev
    }
  }

  const options = {
    ...{},
    ...defaults,
    ...this.options['google-analytics'],
    ...moduleOptions
  }

  // see https://github.com/nuxt-community/analytics-module/issues/2
  if (options.ua) {
    options.id = options.ua
    delete options.ua
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'google-analytics.js',
    options,
    ssr: false
  })
}

module.exports = analyticsModule
module.exports.meta = require('../package.json')
