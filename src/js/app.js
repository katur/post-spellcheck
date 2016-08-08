const $ = require("jquery");
const TEXT_INPUT_SELECTOR = "input[type=text], textarea, [contenteditable]";


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
      target = $(e.currentTarget);
      destination = $("#to-populate");
      value = _this.getValueFromTarget(target);
      destination.text(value);
    });
  },

  getValueFromTarget: function(target) {
    value = target.val();
    if (value) {
      return value;
    } else {
      return target.text();
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
