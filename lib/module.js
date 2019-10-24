const { resolve } = require('path')

function analyticsModule (moduleOptions) {
  const options = {
    dev: true,
    debug: {
      sendHitTask: this.options.dev ? undefined : true
    },
    ...this.options['google-analytics'],
    ...this.options.googleAnalytics,
    ...moduleOptions
  }

  // Dev mode
  if (this.options.dev) {
    // Disable unless dev: true specified for module option
    if (!options.dev) {
      return
    }
    // Disable sendHitTask
    if (options.debug.sendHitTask === undefined) {
      options.debug.sendHitTask = false
    }
  }

  // see https://github.com/nuxt-community/analytics-module/issues/2
  if (options.ua) {
    options.id = options.ua
    delete options.ua
  }

  this.addPlugin({
    ssr: false,
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'google-analytics.js',
    options
  })
}

module.exports = analyticsModule
module.exports.meta = require('../package.json')
