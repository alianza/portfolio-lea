import { withImageProxy } from '@blazity/next-image-proxy'

// https://github.com/Blazity/next-image-proxy

export default withImageProxy({ whitelistedPatterns: [/^https?:\/\/(.*).medium.com/] })
