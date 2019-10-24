module.exports = {
  dev: true,
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  buildModules: [
    { handler: require('../../../') }
  ],
  googleAnalytics: {
    dev: false
  }
}
