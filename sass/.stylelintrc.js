module.exports = {
  extends: ['../.stylelintrc.js', 'stylelint-config-sass-guidelines'],
  overrides: [
    {
      files: ['**/*.sass'],
      customSyntax: 'postcss-sass'
    }
  ]
}
