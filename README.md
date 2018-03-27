# deep-freeze-assert
A Node.js module that checks
## Installation 
```sh
npm install deep-freeze-assert --save
yarn add deep-freeze-assert
bower install deep-freeze-assert --save
```
## Usage
### Javascript
```javascript
var deepFreezeAssert = require('deep-freeze-assert');
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```
### TypeScript
```typescript
import { getPlural } from 'mypluralize';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('mypluralize');
});
```
## Test 
```sh
yarn test
```
or
```sh
npm run test
```