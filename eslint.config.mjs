import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  type: 'app',
  rules: {
    'pnpm/yaml-enforce-settings': 'off',
  },
  ignores: [
    'reusables/**',
  ],
})
