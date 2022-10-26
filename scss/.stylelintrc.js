module.exports = {
  extends: ['../index.js'],
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'max-empty-lines': 0,
        'prettier/prettier': true
      }
    }
  ]
}
