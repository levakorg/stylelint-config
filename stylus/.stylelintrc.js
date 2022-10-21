module.exports = {
  extends: ['../.stylelintrc.js'],
  plugins: ['stylelint-stylus'],
  overrides: [
    {
      files: ['**/*.{styl,stylus}'],
      customSyntax: 'postcss-styl'
    }
  ]
}
