function openCurrentTabInSafari() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tab) => {
    if (tab.length > 0) {
      const currentURL = tab[0].url;
      chrome.tabs
        .create({ url: `x-safari-${currentURL}`, openerTabId: tab[0].id })
        .catch(console.log);
    }
  });
}

window.addEventListener('load', () => {
  openCurrentTabInSafari();

  document
    .getElementById('openCurrentTabSafari')
    .addEventListener('click', openCurrentTabInSafari);
});
