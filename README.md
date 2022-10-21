# @levakorg/stylelint-config

Default stylelint config **levakorg** company

## Setup

**1. Installation**

```
npm install --save-dev stylelint @levakorg/stylelint-config
```

or

```
yarn add --dev stylelint @levakorg/stylelint-config
```

**2. Configuration**

package.json

```
{
  "stylelint": {
    "extends": ["@levakorg/stylelint-config"]
  }
}
```

.stylelintrc | .stylelintrc.json

```
{
  "extends": ["@levakorg/stylelint-config"]
}
```

.stylelintrc.js

```
module.exports = {
  extends: [require('@levakorg/stylelint-config')]
}
```

**3. Add scripts to local `package.json`**

```
"stylelint": "stylelint {**/*,*}.{css,styl,less,scss,sass}"
"stylelint:fix": "stylelint {**/*,*}.{css,styl,less,scss,sass} --fix"
```

**4. Using scripts**

```
npm run stylelint
```

```
npm run stylelint:fix
```

or

```
yarn stylelint
```

```
yarn stylelint:fix
```

## About

**1. Used dependencies**

- [postcss-less](https://www.npmjs.com/package/postcss-less)
- [postcss-scss](https://www.npmjs.com/package/postcss-scss)
- [postcss-styl](https://www.npmjs.com/package/postcss-styl)
- [stylelint](https://www.npmjs.com/package/stylelint)
- [stylelint-config-css-modules](https://www.npmjs.com/package/stylelint-config-css-modules)
- [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-prettier)
- [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard)
- [stylelint-less](https://www.npmjs.com/package/stylelint-less)
- [stylelint-order](https://www.npmjs.com/package/stylelint-order)
- [stylelint-order-config-standard](https://www.npmjs.com/package/stylelint-order-config-standard)
- [stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier)
- [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)
- [stylelint-stylus](https://www.npmjs.com/package/stylelint-stylus)

## [Config](https://github.com/levakorg/stylelint-config/blob/master/.stylelint.js)
