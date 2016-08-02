TEXT_INPUT_SELECTOR = "input[type=text], textarea, [contenteditable]"


$(document).ready(function() {
  var button = $("#disable-spellcheck-button");

  button.on("click", function() {
    /*
    // Here is how you can get the current tab.
    // Avoid chrome.tabs.getCurrent and chrome.tabs.getSelected because
    // they are deprecated or soon-to-be.

    const CURRENT_TAB_QUERY_PARAMS = {
      currentWindow: true,
      active: true,
    }

    chrome.tabs.query(CURRENT_TAB_QUERY_PARAMS, function (tabs) {
      tab = tabs[0]; // Query returns a list, so extract the lone result
    });
    */

    // Defaults to active tab of current window, so no need for above query
    chrome.tabs.executeScript({
      file: "jquery.js",
      allFrames: true,
    }, function() {
      chrome.tabs.executeScript({
        file: "test-script.js",
        allFrames: true,
      });
    }),

    // affects this popup
    $("body").css("background", "orange");
  });
});
