function findSecondInstagramImage() {
    const images = document.getElementsByTagName("img");
    let count = 0;
  
    for (let img of images) {
      if (img.src.includes("cdninstagram.com")) {
        count++;
        if (count === 2) {
          return img.src;
        }
      }
    }
  
    return null;
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "downloadImage") {
      const imageURL = findSecondInstagramImage();
      if (imageURL) {
        chrome.runtime.sendMessage({
          action: "downloadImage",
          imageUrl: imageURL,
        });
      } else {
        alert("No second cdninstagram.com image found on this page.");
      }
    }
  });
  