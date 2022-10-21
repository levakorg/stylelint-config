module.exports = {
  extends: ['../.stylelintrc.js'],
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ]
}
