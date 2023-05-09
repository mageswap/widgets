const isDevelopment =
  process.env.NODE_ENV === 'test' || // jest
  process.env.NODE_ENV === 'cosmos' // cosmos

module.exports = {
  compact: false,
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react'
    ],
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    "@babel/plugin-syntax-flow",
    'macros',
    [
      'module-resolver',
      {
        root: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
}
