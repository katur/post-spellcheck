$(document).ready(function() {
  disableSpellCheck();
});


TEXT_INPUT_SELECTOR = "input[type=text], textarea, [contenteditable]"


function disableSpellCheck() {
  $(TEXT_INPUT_SELECTOR).attr("spellcheck", false);
}
