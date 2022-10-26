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
"stylelint": "stylelint {**/*,*}.{css,less,scss,sass,styl,stylus,styled.js,styled.ts}",
"stylelint:fix": "stylelint {**/*,*}.{css,less,scss,sass,styl,stylus,styled.js,styled.ts} --fix",
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

or use a total config

```
@levakorg/stylelint-config/total
```

**2. Config / Performance**

- [x] **[css](https://github.com/levakorg/stylelint-config/blob/master/.stylelintrc.js)**
- [x] **[less](https://github.com/levakorg/stylelint-config/blob/master/less/.stylelintrc.js)**
  - May not recover the first time
- [x] **[scss](https://github.com/levakorg/stylelint-config/blob/master/scss/.stylelintrc.js)**
  - May not recover the first time
- [x] **[sass](https://github.com/levakorg/stylelint-config/blob/master/sass/.stylelintrc.js)**
  - Disabled prettier config
- [x] **[stylus](https://github.com/levakorg/stylelint-config/blob/master/stylus/.stylelintrc.js)**
  - Disabled prettier config
- [x] **[styled-components](https://github.com/levakorg/stylelint-config/blob/master/styled-components/.stylelintrc.js)**
  - Requires `.styled.js / .styled.ts` extension
  - Does not declare ignored properties
- [x] **[total](https://github.com/levakorg/stylelint-config/blob/master/total/.stylelintrc.js)**
