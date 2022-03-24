# element-operations
[![npm](https://img.shields.io/npm/v/@codebundlesbyvik/element-operations)](https://www.npmjs.com/package/@codebundlesbyvik/element-operations)
[![npm - downloads per week](https://img.shields.io/npm/dw/@codebundlesbyvik/element-operations)](https://www.npmjs.com/package/@codebundlesbyvik/element-operations)

JavaScript helper functions for working with element objects.

<br>

## Installation

``` shell
// Install package from npm
npm install @codebundlesbyvik/element-operations
```

<br>

``` javascript
import createEl from "@codebundlesbyvik/css-operations";
```

<br>

## Functions

### `createEl(tagName, attrs)`

Create an `Element` and return it.

#### Parameters

**\*** indicates required

 - **\*** `tagName` (`String`): `Element`'s tag name.
 - `attrs` (`Object`): Object containing the `Element`'s individual property - value pairs.

#### Usage

```javascript
createEl("div", {
    class: "example-div",
    id: "example-div-1",
    ariaHidden: "true"
})
// > <div class="example-div" id="example-div-1" aria-hidden="true"></div>
```

<br>

## License

MIT © [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
