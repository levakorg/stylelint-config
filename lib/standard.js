module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-class-pattern': null,
    'declaration-no-important': true,
    'selector-no-qualifying-type': true,
    'declaration-colon-space-after': 'always',
    'font-weight-notation': 'numeric',
    'color-named': 'never'
  }
}
