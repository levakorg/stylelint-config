module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-order-config-standard',
    'stylelint-config-prettier'
  ],
  plugins: [
    'stylelint-stylus',
    'stylelint-less',
    'stylelint-scss',
    'stylelint-order',
    'stylelint-prettier'
  ],
  overrides: [
    {
      files: ['**/*.styl'],
      customSyntax: 'postcss-styl'
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less'
    },
    {
      files: ['**/*.{sass,scss}'],
      customSyntax: 'postcss-scss'
    }
  ],
  rules: {
    'selector-class-pattern': null,
    'prettier/prettier': true
  }
}
