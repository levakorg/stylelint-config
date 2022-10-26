module.exports = {
  extends: ['../index.js'],
  plugins: ['stylelint-less'],
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'max-empty-lines': 0,
        'prettier/prettier': true
      }
    }
  ]
}
