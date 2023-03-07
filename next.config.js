const prod = process.env.NODE_ENV === 'production';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !prod,
  // buildExcludes: [/middleware-manifest\.json$/]
});

const nextConfig = {

};


module.exports = withBundleAnalyzer(
  withPWA({
    ...nextConfig,
  })
);
