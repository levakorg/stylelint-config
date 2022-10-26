module.exports = {
  extends: ['../index.js'],
  overrides: [
    {
      files: ['**/*.styled.{js,ts}'],
      customSyntax: 'postcss-jsx',
      rules: {
        'max-empty-lines': 1,
        'function-no-unknown': null,
        'value-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'no-missing-end-of-source-newline': null,
        'no-empty-first-line': null,
        'no-empty-source': null,
        'prettier/prettier': true,
      }
    }
  ]
}
