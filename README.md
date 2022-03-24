# element-operations
[![npm](https://img.shields.io/npm/v/@codebundlesbyvik/element-operations)](https://www.npmjs.com/package/@codebundlesbyvik/element-operations)

JavaScript helper functions for working with element objects.

<br>

## Installation

`npm install @codebundlesbyvik/element-operations`

<br>

## Included functions

### `createEl(tagName, attrs)`

Creates an Element and returns it.

#### Parameters

\* indicates required

 - \* `tagName` (`String`): Element's tag name.
 - `attrs` (`Object`): Object containing the Element's individual property - value pairs.

#### Usage

```javascript
import createEl from "@codebundlesbyvik/element-operations";

createEl("div", {
    class: "example-div",
    id: "example-div-1",
    ariaHidden: "true"
});
// > <div class="example-div" id="example-div-1" aria-hidden="true"></div>
```

<br>

## License

MIT © [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
