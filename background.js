chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "downloadImage") {
      chrome.downloads.download({
        url: request.imageUrl,
        conflictAction: "uniquify",
        saveAs: true,
      });
    }
  });
  