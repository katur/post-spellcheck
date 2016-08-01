$(document).ready(function() {
  initializeKeyListener();
});


TEXT_INPUT_SELECTOR = "input[type=text], textarea, [contenteditable]"


function initializeKeyListener() {
  $("body").on("input", TEXT_INPUT_SELECTOR, function(e) {
		target = $(e.currentTarget);
		underlay = target.prev();

		value = getValueFromTarget(target);
    underlay.text(value);
  });
}


function getValueFromTarget(target) {
  value = target.val();
  if (value) {
	  return value;
  } else {
    return target.text();
  }
}
