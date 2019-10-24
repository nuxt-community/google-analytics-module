module.exports = {
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  buildModules: [
    { handler: require('../../../') }
  ],
  googleAnalytics: {
    ua: 'UA-YYY'
  }
}
