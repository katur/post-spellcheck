const $ = require("jquery");
const TEXT_INPUT_SELECTOR = "input[type=text], textarea, [contenteditable]";
const ADT_API_URL = "http://service.afterthedeadline.com/checkDocument";



window.PostSpellCheck = {
  init: function() {
    this.continuallyDisableSpellCheck();
    this.initializeInputListener();
  },

  continuallyDisableSpellCheck: function() {
    _this = this;

    setInterval(function() {
      _this.disableSpellCheck();
    }, 1000);
  },

  disableSpellCheck: function() {
    $(TEXT_INPUT_SELECTOR).attr("spellcheck", false);
  },

  initializeInputListener: function() {
    _this = this;

    $("body").on("input", TEXT_INPUT_SELECTOR, function(e) {
      var target = $(e.currentTarget);
      var destination = $("#to-populate");
      var value = _this.getValueFromElement(target);
      destination.text(value);
    });
  },

  spellCheck: function() {
    var val = this.getValueFromElement($("#to-populate"));

    $.ajax({
      type: 'POST',

      url: ADT_API_URL,

      data: {
        data: val,
      },

      success: function(data) {
        console.log(data);
      },

      error: function(e) {
        console.log('Error with ADT: ' + e);
      },
    })
  },

  getValueFromElement: function(el) {
    value = el.val();
    if (value) {
      return value;
    } else {
      return el.text();
    }
  },

  colorStuff: function() {
    $("body").css("background", "red");
    $("#to-populate").css("background", "yellow");
  },

  printStuff: function() {
    console.log("muxy");
    console.log("silly goose");
  },
}


window.PostSpellCheck.init();
