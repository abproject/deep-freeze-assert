# deep-freeze-assert
A Node.js module for listening to attempts of mutation objects and arrays.
## Installation 
```sh
npm install deep-freeze-assert --save
yarn add deep-freeze-assert
bower install deep-freeze-assert --save
```
## Usage
### Javascript
```javascript
const deepFreezeAssert = require('deep-freeze-assert');
const obj = { a: 1 };
const freezedObj = deepFreezeAssert(obj);
obj.a = 2; // throws an error 
```
### TypeScript
```typescript
import { deepFreezeAssert } from 'deepFreezeAssert';
const freezedObj = deepFreezeAssert(obj);
obj.a = 2; // throws an error 
```
### AMD
```javascript
define(function(require,exports,module){
  const freezedObj = deepFreezeAssert(obj);
  obj.a = 2; // throws an error 
});
```
## Methods
### deepFreezeAssert(target, [config])

Return either a deep [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) (if target is an **Object** or an **Array**) with listeners on [set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set) and [deleteProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/deleteProperty) traps, or itself (if target is a primitive or null).
In case of nesting, traps will be bound recursively.
##### target
Any value
###### Behavior
<table>
  <tr>
    <th>Target</th>
    <th>Freeze</th>
    <th>Mutation</th>
    <th>Throws</th>
  </tr>
  <tr>
    <td><code>let target = {a: 1}</code></td>
    <td rowspan="18"><code>let freezed = deepFreezeAssert(target)</code></td>
    <td><code>freezed.a = 2</code></td>
    <td><div style="color:#B22222;">Attempt to set value=2 to property='a'</div></td>
  </tr>
  <tr>
    <td><code>let target = {a: {b: 1}}</code></td>
    <td><code>freezed.a = 2</code></td>
    <td><div style="color:#B22222;">Attempt to set value=2 to property='b'</div></td>
  </tr>
  <tr>
    <td><code>let target = {a: 1}</code></td>
    <td><code>delete freezed.a</code></td>
    <td><div style="color:#B22222;">Attempt to delete property 'a'</div></td>
  </tr>
  <tr>
    <td><code>let target = {a: {b: 1}}</code></td>
    <td><code>delete freezed.a.b</code></td>
    <td><div style="color:#B22222;">Attempt to delete property 'b'</div></td>
  </tr>
  <tr>
    <td><code>let target = [1, 2, 3]</code></td>
    <td><code>freezed.push(4)</code></td>
    <td><div style="color:#B22222;">Attempt to set value=4 to property='3'</div></td>
  </tr>
  <tr>
    <td><code>let target = [[[1, 2, 3]]]</code></td>
    <td><code>freezed.push(4)</code></td>
    <td><div style="color:#B22222;">Attempt to set value=4 to property='3'</div></td>
  </tr>
  <tr>
    <td><code>let target = [[[{a: {b: {c: 1}}}]]]</code></td>
    <td><code>freezed[0][0][0].a.b.c = 2</code></td>
    <td><div style="color:#B22222;">Attempt to set value=2 to property='c'</div></td>
  </tr>
  <tr>
    <td><code>let target = [1, 2, 3]</code></td>
    <td><code>delete freezed[0]</code></td>
    <td><div style="color:#B22222;">Attempt to delete property '0'</div></td>
  </tr>
  <tr>
    <td><code>let target = [[[1, 2, 3]]]</code></td>
    <td><code>delete freezed[0][0][2]</code></td>
    <td><div style="color:#B22222;">Attempt to delete property '2'</div></td>
  </tr>
  <tr>
    <td><code>let target = [[[{a: {b: {c: 1}}}]]]</code></td>
    <td><code>delete freezed[0][0][0].a.b.c</code></td>
    <td><div style="color:#B22222;">Attempt to delete property 'c'</div></td>
  </tr>
  <tr>
    <td><code>let target = 'string'</code></td>
    <td><code>freezed = 'new string'</code></td>
    <td align="center">-</td>
  </tr>
  <tr>
    <td><code>let target = 1'</code></td>
    <td><code>freezed = 2</code></td>
    <td align="center">-</td>
  </tr>
  <tr>
    <td><code>let target = true'</code></td>
    <td><code>freezed = false</code></td>
    <td align="center">-</td>
  </tr>
  <tr>
    <td><code>let target = null</code></td>
    <td><code>freezed = {}</code></td>
    <td align="center">-</td>
  </tr>
  <tr>
    <td><code>let target = undefined</code></td>
    <td><code>freezed = {}</code></td>
    <td align="center">-</td>
  </tr>
  <tr>
    <td><code>let target = NaN</code></td>
    <td><code>freezed = {}</code></td>
    <td align="center">-</td>
  </tr>
  <tr>
    <td><code>let target = () => {}</code></td>
    <td><code>freezed = () => true</code></td>
    <td align="center">-</td>
  </tr>
</table>

##### config
Null or an Object with the next structure
| Property | Optional | Type | Default | Description |
|---|:---:|:---:|---|---|
|silent|`optional`|`boolean`|false|`false` - in case of mutation throws an error <br> `true` - in case of mutation writes warning to log|
|setFn|`optional`|`Function`<br>`(target: any, p: PropertyKey, value: any) => boolean`|`setThrow`|Function which will be called in case of [set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set) mutation, must return boolean|
|deletePropertyFn|`optional`|`Function`<br>`(target: any, p: PropertyKey) => boolean`|`deletePropertyThrow`|Function which will be called in case of [deleteProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/deleteProperty) mutation, must return boolean|

## Test 
```sh
npm run test
```
######or
```sh
yarn test
```
## LICENSE
MIT. See the LICENSE file for text.