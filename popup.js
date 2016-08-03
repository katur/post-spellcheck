TEXT_INPUT_SELECTOR = "input[type=text], textarea, [contenteditable]"


$(document).ready(function() {
  activateButton();
});


function activateButton() {
  var button = $("#disable-spellcheck-button");

  button.on("click", function() {
    // Color this popup
    $("body").css("background", "orange");

    // Defaults to active tab of current window
    chrome.tabs.executeScript({
      file: "jquery.js",
      allFrames: true,
    }, function() {
      chrome.tabs.executeScript({
        file: "test-script.js",
        allFrames: true,
      });
    });
  });
}
