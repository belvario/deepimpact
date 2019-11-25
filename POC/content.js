// content.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "fetch_site_info" ) {
      chrome.runtime.sendMessage({"message": "all_urls_fetched", "data": document.URL});
    }
  }
);
