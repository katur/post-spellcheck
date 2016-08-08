const TEXT_INPUT_SELECTOR = "input[type=text], textarea, [contenteditable]";


setInterval(function() {
  disableSpellCheck();
}, 1000);


function disableSpellCheck() {
  $(TEXT_INPUT_SELECTOR).attr("spellcheck", false);
}


function printStuff() {
  console.log("poopie poop poop");
  console.log("muxy");
}
