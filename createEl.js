import camelToKebab from "@codebundlesbyvik/string-operations";

// Create an Element
export default function createEl(tagName, attrs) {
    const el = document.createElement(tagName);

    if (attrs) {
        for (const [prop, val] of Object.entries(attrs)) {
            el.setAttribute(camelToKebab(prop), val);
        }
    }

    return el;
}
