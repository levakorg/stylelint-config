module.exports = {
  extends: ['../index.js'],
  plugins: ['stylelint-less'],
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less'
    }
  ]
}
