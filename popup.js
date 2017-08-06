chrome.runtime.sendMessage({greeting: "opened"}, function(response) {
  console.log(response.message);
});
