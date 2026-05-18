function removeBlankTargets(root = document) {
    /* beautify ignore:start */
    root.querySelectorAll?.('a[target="_blank"]')
        .forEach((anchor) => {
            anchor.removeAttribute("target");
        });
    /* beautify ignore:end */
}

removeBlankTargets();

/* Check if document was updated (by a script or something) */
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                /* beautify ignore:start */
                if (node.matches?.('a[target="_blank"]')) {
                    node.removeAttribute("target");
                }
                /* beautify ignore:end */
                removeBlankTargets(node);
                console.log("Removed blank target from [" + node + "] [" + Object.keys(node) + "]");
            }
        }
    }
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});