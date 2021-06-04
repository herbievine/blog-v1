const { i18n } = require('./next-i18next.config')

module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['localhost', 'api.herbievine.com'],
  },
  i18n,
}
