jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')
const getPort = require('get-port')

const config = require('./fixture/nuxt.config')
config.dev = false

let nuxt, port, addTemplate

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

const setupNuxt = async (config) => {
  const nuxt = new Nuxt(config)

  // Spy addTemplate
  addTemplate = nuxt.moduleContainer.addTemplate = jest.fn(
    nuxt.moduleContainer.addTemplate
  )

  await new Builder(nuxt).build()
  port = await getPort()
  await nuxt.listen(port)

  return nuxt
}

describe('module', () => {
  afterEach(async () => {
    if (nuxt) {
      await nuxt.close()
    }
  })

  test('plugin works', async () => {
    nuxt = await setupNuxt(config)

    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$ga).toBeDefined()

    const html = await get('/')
    expect(html).toContain('Works!')
  })

  test('dev mode', async () => {
    nuxt = await setupNuxt({ ...config, ...{ dev: true } })

    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$ga).toBeDefined()

    const html = await get('/')
    expect(html).toContain('Works!')
  })

  test('option ua converted to id', async () => {
    nuxt = await setupNuxt({
      ...config,
      googleAnalytics: {
        ua: 'UA-YYY'
      }
    })

    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$ga).toBeDefined()

    expect(addTemplate).toBeDefined()
    const call = addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.id).toBe('UA-YYY')
  })

  test('disabled sendHitTask', async () => {
    nuxt = await setupNuxt({
      ...config,
      ...{
        dev: true,
        googleAnalytics: {
          id: 'UA-XXX',
          debug: {
            sendHitTask: false
          }
        }
      }
    })

    expect(addTemplate).toBeDefined()
    const call = addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.debug.sendHitTask).toBe(false)
  })

  test('disabled', async () => {
    nuxt = await setupNuxt({
      ...config,
      ...{
        dev: true,
        googleAnalytics: {
          dev: false
        }
      }
    })

    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$ga).toBeUndefined()

    expect(addTemplate).toBeDefined()
    const call = addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    expect(call).toBeUndefined()
  })
})
