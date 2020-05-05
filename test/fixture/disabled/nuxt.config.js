module.exports = {
  dev: true,
  rootDir: __dirname,
  buildModules: [
    { handler: require('../../../') }
  ],
  googleAnalytics: {
    dev: false
  }
}
