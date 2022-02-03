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
// > <div id="example-div-1" class="example-div" aria-hidden="true"></div>
```

<br>

### `getElCssValue(el, prop)`

Return a string containing the element's property value.

#### Parameters

\* indicates required

 - \* `el` ([`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element)): Target Element.
 - \* `prop` (`String`): Property to retrieve.

#### Usage

```javascript
import getElCssValue from "@codebundlesbyvik/element-operations";

const el = document.querySelector("#example-div-1");

getElCssValue(el, "class");
// > "example-div"

getElCssValue(el, "aria-hidden");
// > "true"
```

<br>

## License

MIT © [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
