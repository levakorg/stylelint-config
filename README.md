# @levakorg/stylelint-config

Stylelint config levakorg org's

### Setup

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

```JSON
{
  "stylelint": {
    "extends": ["@levakorg/stylelint-config"]
  }
}
```

.stylelintrc | .stylelintrc.json

```JSON
{
  "extends": ["@levakorg/stylelint-config"]
}
```

.stylelintrc.js

```JS
module.exports = {
  extends: ['@levakorg/stylelint-config']
}
```

**3. Add scripts**

```
"stylelint": "stylelint {**/*,*}.{css,less,scss,sass,styl,stylus}",
"stylelint:fix": "stylelint {**/*,*}.{css,less,scss,sass,styl,stylus} --fix",
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

### About

**1. Used dependencies**

- [postcss-less](https://www.npmjs.com/package/postcss-less)
- [postcss-sass](https://www.npmjs.com/package/postcss-sass)
- [postcss-scss](https://www.npmjs.com/package/postcss-scss)
- [postcss-styl](https://www.npmjs.com/package/postcss-styl)
- [stylelint](https://www.npmjs.com/package/stylelint)
- [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-prettier)
- [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard)
- [stylelint-less](https://www.npmjs.com/package/stylelint-less)
- [stylelint-order](https://www.npmjs.com/package/stylelint-order)
- [stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier)
- [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)
- [stylelint-stylus](https://www.npmjs.com/package/stylelint-stylus)


### Notes

**1. Using preprocessors**

```
@levakorg/stylelint-config/less
```

```
@levakorg/stylelint-config/scss
```

```
@levakorg/stylelint-config/sass
```

```
@levakorg/stylelint-config/stylus
```

```
@levakorg/stylelint-config/styled-components
```

**2. Config / Performance**
- [x] **[css](https://github.com/levakorg/stylelint-config/blob/master/.stylelintrc.js)**
- [x] **[less](https://github.com/levakorg/stylelint-config/blob/master/less/.stylelintrc.js)**
- [x] **[scss](https://github.com/levakorg/stylelint-config/blob/master/scss/.stylelintrc.js)**
- [ ] **[sass](https://github.com/levakorg/stylelint-config/blob/master/sass/.stylelintrc.js)**
  - Problems understanding `syntax`
- [ ] **[stylus](https://github.com/levakorg/stylelint-config/blob/master/stylus/.stylelintrc.js)**
  - Problems understanding `syntax`
- [ ] **[styled-components](https://github.com/levakorg/stylelint-config/blob/master/styled-components/.stylelintrc.js)**
  - Problems understanding `syntax`
  - Ignore `.js/.ts files` without styled-components
