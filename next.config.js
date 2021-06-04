const { i18n } = require('./next-i18next.config')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  webpack(config, options) {
    const { dev, isServer } = options

    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    return config
  },
  future: {
    webpack5: true,
  },
  images: {
    domains: ['localhost', 'api.herbievine.com'],
  },
  i18n,
}
