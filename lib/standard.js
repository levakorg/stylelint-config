module.exports = {
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['**/*.css'],
      rules: { 'prettier/prettier': true }
    }
  ],
  rules: {
    'selector-class-pattern': null,
    'declaration-no-important': true,
    'selector-no-qualifying-type': true,
    'declaration-colon-space-after': 'always',
    'font-weight-notation': 'numeric',
    'color-named': 'never'
  }
}
