import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#E37400'
  },
  buildModules: ['nuxt-ackee'],
  ackee: {
    server: 'https://ackee.nuxtjs.com',
    domainId: '79213d80-7ac2-47c6-ba6b-0025a7a0ee35',
    detailed: true
  }
})
