module.exports = {
  extends: ['../index.js'],
  plugins: ['stylelint-stylus'],
  overrides: [
    {
      files: ['**/*.{styl,stylus}'],
      customSyntax: 'postcss-styl',
      rules: {
        'max-empty-lines': 0,
        'prettier/prettier': null
      }
    }
  ]
}
