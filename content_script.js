function removeBlankTargets(root = document) {
  root.querySelectorAll?.('a[target="_blank"]').forEach((anchor) => {
    anchor.removeAttribute("target");
  });
}

removeBlankTargets();

/* Check if document was updated (by a script or something) */
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.matches?.('a[target="_blank"]')) {
          node.removeAttribute("target");
        }
        removeBlankTargets(node);
      }
    }
  }
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});