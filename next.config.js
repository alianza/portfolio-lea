const withPWA = require('next-pwa')

const prod = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !prod,
    buildExcludes: [/middleware-manifest\.json$/]
  }
})
