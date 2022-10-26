module.exports = {
  extends: ['../index.js'],
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['**/*.sass'],
      customSyntax: 'postcss-sass',
      rules: {
        'max-empty-lines': 0,
        'prettier/prettier': null
      }
    }
  ]
}
