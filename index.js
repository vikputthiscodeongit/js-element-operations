export default function createEl(tagName, attrs) {
    const el = document.createElement(tagName);

    if (attrs) {
        for (let [prop, val] of Object.entries(attrs)) {
            prop = prop.replace(/[A-Z0-9]/g, letter => `-${letter.toLowerCase()}`);

            el.setAttribute(prop, val);
        }
    }

    return el;
}
