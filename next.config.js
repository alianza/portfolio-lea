const withPWA = require('next-pwa')
const withPreact = require('next-plugin-preact');
const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const prod = process.env.NODE_ENV === 'production'

module.exports = withPlugins([
  [withPWA, {
    pwa: {
      dest: 'public',
      disable: !prod,
      buildExcludes: [/middleware-manifest\.json$/]
    }
  }],
  [withPreact],
  [withBundleAnalyzer],
])
