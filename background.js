// Create the context menu item when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchWithPerplexity",
    title: "Search with Perplexity",
    contexts: ["selection"]
  });
});

// Handle the context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchWithPerplexity" && info.selectionText) {
    // Encode the selected text for the URL
    const searchQuery = encodeURIComponent(info.selectionText);
    // Open Perplexity search in a new tab
    chrome.tabs.create({
      url: `https://www.perplexity.ai/search?q=${searchQuery}`
    });
  }
}); 