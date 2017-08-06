console.log("A")

// command
OpenPanel = function() {
  console.log("B")
  setTimeout(function() {
    chrome.windows.create({
        url: "panel.html",
        width: 800,
        height: 600,
        type: "panel",
        focused: !0
    })
  })
}

// browser action が押されたときに実行
// Note: This event will not fire if the browser action has a popup.
chrome.browserAction.onClicked.addListener(function(){
  console.log("button clicked")
})

// recieve message
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "opened") "ok";
    sendResponse({message: "goodbye"});
  }
);

// browser action context menu
chrome.contextMenus.create({
  "title": "パネルを開く",
  "contexts": ["browser_action"],
  "onclick": OpenPanel
});
