jest.setTimeout(60000)
process.env.PORT = process.env.PORT || 5060

const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')

const url = path => `http://localhost:${process.env.PORT}${path}`
const get = path => request(url(path))

describe('module', () => {
  let nuxt

  afterEach(async () => {
    await nuxt.close()
  })

  test('default', async () => {
    nuxt = new Nuxt(require('./fixture/nuxt.config'))
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
    const html = await get('/')
    expect(html).toContain('Works!')
  })

  test('with ua', async () => {
    nuxt = new Nuxt(require('./fixture/with_ua_nuxt.config'))
    await new Builder(nuxt).build()
    await nuxt.listen(process.env.PORT)
    const html = await get('/')
    expect(html).toContain('Works!')
  })
})
