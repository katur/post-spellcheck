$(document).ready(function() {
  var button = $("#disable-spellcheck-button");

  button.on("click", function() {
    queryInfo = {
      currentWindow: true,
      active: true,
    }

    chrome.tabs.query(queryInfo, function (tabs) {
      $("body").css("background", "pink");
      // console.log(tabs[0]);
    });
  });
});
