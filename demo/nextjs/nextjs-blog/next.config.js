const basePath = '/ssr'
const nextConfig = {
  env: {
    customKey: 'my-value',
    basePath,
  },
  basePath,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    //console.log(config)
    return config
  },
}

module.exports = nextConfig