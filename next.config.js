const withPWA = require('next-pwa')

const nextConfig = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const prod = process.env.NODE_ENV === 'production'

module.exports = withBundleAnalyzer(withPWA({
  pwa: {
    dest: 'public',
    disable: !prod,
    buildExcludes: [/middleware-manifest\.json$/]
  },
    ...nextConfig
}))
