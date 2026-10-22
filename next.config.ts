import type { NextConfig } from 'next'
import withMDX from '@next/mdx'

const config: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  compress: true,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['posthog-js'],
  },
}

const withMdx = withMDX({
  extension: /\.mdx?$/,
})

export default withMdx(config)
