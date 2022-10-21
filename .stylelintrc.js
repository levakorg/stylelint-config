module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-order-config-standard',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'selector-class-pattern': null,
    'prettier/prettier': true
  }
}
