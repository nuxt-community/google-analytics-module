const { setup, loadConfig, get, url } = require('@nuxtjs/module-test-utils')

describe('dev', () => {
  let nuxt, addTemplate

  beforeAll(async () => {
    const beforeNuxtReady = (nuxt) => {
      addTemplate = nuxt.moduleContainer.addTemplate = jest.fn(
        nuxt.moduleContainer.addTemplate
      )
    }
    ({ nuxt } = (await setup(loadConfig(__dirname, 'dev'), { waitFor: 2000, beforeNuxtReady })))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })

  test('$ga should be defined', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$ga).toBeDefined()
  })

  test('option id', () => {
    expect(addTemplate).toBeDefined()
    const call = addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    expect(call).toBeDefined()
    const options = call[0].options
    expect(options.id).toBe('UA-XXX')
  })
})
