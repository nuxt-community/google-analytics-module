jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
process.env.PORT = process.env.PORT || 5060
process.env.NODE_ENV = 'production'

const { Nuxt, Builder } = require('nuxt')
const request = require('request-promise-native')

const url = path => `http://localhost:${process.env.PORT}${path}`
const get = path => request(url(path))

describe('VueAnalytics', () => {
  let nuxt

  afterEach(async () => {
    await nuxt.close()
  })

  test('default', async () => {
    nuxt = new Nuxt(require('./fixture/nuxt.config'))
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
    let html = await get('/')

    expect(html).toContain('Works!')
  })

  test('with ua', async () => {
    nuxt = new Nuxt(require('./fixture/with_ua_nuxt.config'))
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
    let html = await get('/')

    expect(html).toContain('Works!')
  })
})
