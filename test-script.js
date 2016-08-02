$("body").css("background", "red");
$("#to-populate").css("background", "yellow");
initializeInputListener();


function initializeInputListener() {
  $("body").on("input", TEXT_INPUT_SELECTOR, function(e) {
		target = $(e.currentTarget);
    destination = $("#to-populate");
		value = getValueFromTarget(target);
    destination.text(value);
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
