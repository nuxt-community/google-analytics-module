module.exports = {
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    [require('../../'), { ua: 'UA-XXX' }]
  ]
}
