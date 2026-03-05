import type { ConfigContext, ExpoConfig } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'minimal',
  slug: 'minimal',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './public/icon.png',
  scheme: 'minimal',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  splash: {
    image: './public/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: [
    '**/*',
  ],
  ios: {
    supportsTablet: true,
  },
  android: {
    edgeToEdgeEnabled: true,
    package: 'com.anonymous.minimal',
    adaptiveIcon: {
      foregroundImage: './public/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './public/favicon.png',
  },
  plugins: [
    'expo-router',
  ],
  experiments: {
    typedRoutes: true,
  },
})
