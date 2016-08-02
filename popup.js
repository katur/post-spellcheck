CURRENT_TAB_QUERY_PARAMS = {
  currentWindow: true,
  active: true,
}


$(document).ready(function() {
  var button = $("#disable-spellcheck-button");

  button.on("click", function() {

    chrome.tabs.query(CURRENT_TAB_QUERY_PARAMS, function (tabs) {
      tab = tabs[0]; // Query returns a list, so extract the lone result
      $("body").css("background", "pink");
      console.log(tab);
    });
  });
});
