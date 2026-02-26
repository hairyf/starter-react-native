import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  type: 'app',
  ignores: [
    'reusables/**',
  ],
})
