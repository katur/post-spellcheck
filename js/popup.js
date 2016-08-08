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
      file: "js/execute-script.js",
      allFrames: true,
    });
  });
}
