// Get an Element property's value
export default function getElCssValue(el, prop) {
    const elStyles = window.getComputedStyle(el);

    return elStyles.getPropertyValue(prop);
}
