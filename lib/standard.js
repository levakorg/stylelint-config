module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-no-id': true,
    'selector-no-attribute': true,
    'selector-class-pattern': null,
    'declaration-no-important': true,
    'selector-no-qualifying-type': true,
    'declaration-colon-space-after': 'always',
    'function-url-data-uris': 'never',
    'font-weight-notation': 'numeric',
    'color-named': 'never'
  }
}
