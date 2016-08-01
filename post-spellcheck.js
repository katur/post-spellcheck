$(document).ready(function() {
  disableSpellCheck();
  console.log('poop');
});


TEXT_INPUT_SELECTOR = "input[type=text], textarea, [contenteditable]"


function disableSpellCheck() {
  $(TEXT_INPUT_SELECTOR).attr("spellcheck", false);
}
