module.exports = {
  extends: ['../index.js'],
  overrides: [
    {
      files: ['**/*.styled.{js,ts}'],
      customSyntax: 'postcss-styled'
    }
  ],
  rules: {
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'no-missing-end-of-source-newline': null,
    'no-empty-first-line': null,
    'no-empty-source': null
  }
}
