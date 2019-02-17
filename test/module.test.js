jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')
const getPort = require('get-port')

let nuxt, port

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

describe('module', () => {
  afterEach(async () => {
    await nuxt.close()
  })

  test('default', async () => {
    nuxt = new Nuxt(require('./fixture/nuxt.config'))
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)
    const html = await get('/')
    expect(html).toContain('Works!')
  })

  test('with ua', async () => {
    nuxt = new Nuxt(require('./fixture/with_ua_nuxt.config'))
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)
    const html = await get('/')
    expect(html).toContain('Works!')
  })
})
