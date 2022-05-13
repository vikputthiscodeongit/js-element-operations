export default function createEl(tagName, attrs, skipNull = true) {
    const el = document.createElement(tagName);

    if (attrs) {
        for (let [prop, val] of Object.entries(attrs)) {
            if (val === null) {
                if (skipNull) {
                    continue;
                }

                val = "";
            }

            // ARIAHIDDEN matcht bijv. ook.
            prop = prop.replace(/[A-Z0-9]/g, letter => `-${letter.toLowerCase()}`);

            el.setAttribute(prop, val);
        }
    }

    return el;
}
