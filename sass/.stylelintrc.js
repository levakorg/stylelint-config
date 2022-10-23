module.exports = {
  extends: ['../index.js'],
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['**/*.sass'],
      customSyntax: 'postcss-sass'
    }
  ]
}
