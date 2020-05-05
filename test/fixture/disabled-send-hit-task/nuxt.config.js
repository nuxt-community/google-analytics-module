module.exports = {
  dev: true,
  rootDir: __dirname,
  buildModules: [
    { handler: require('../../../') }
  ],
  googleAnalytics: {
    id: 'UA-XXX',
    debug: {
      sendHitTask: false
    }
  }
}
