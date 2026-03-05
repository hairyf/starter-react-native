const { getDefaultConfig } = require('expo/metro-config')
const { withUniwindConfig } = require('uniwind/metro')

let config = getDefaultConfig(__dirname)

config = withUniwindConfig(config, {
  // relative path to your global.css file (from previous step)
  cssEntryFile: './reusables/theme.css',
  // (optional) path where we gonna auto-generate typings
  // defaults to project's root
  dtsFile: './types/uniwind-types.d.ts',
})

// Add COEP and COOP headers to support SharedArrayBuffer
config.server.enhanceMiddleware = (middleware) => {
  return (req, res, next) => {
    res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless')
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
    middleware(req, res, next)
  }
}

// Add sql asset support
config.resolver.sourceExts.push('sql')

// Add wasm asset support
config.resolver.assetExts.push('wasm')

module.exports = config
