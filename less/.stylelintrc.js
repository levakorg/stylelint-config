module.exports = {
  extends: ['../.stylelintrc.js'],
  plugins: ['stylelint-less'],
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less'
    }
  ]
}
