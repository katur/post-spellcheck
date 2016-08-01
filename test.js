$(document).ready(function() {
  doStuff();
});

function doStuff() {
  var underlay = $("#underlay");
  var input = $("#masked-input");

  // This works
  underlay.css("background", "green");

  // This does not
  underlay.on("click", function() {
    console.log("clicking");
  });

  /*
  input.on("click", function() {
    console.log("keying");
  });
  */
}
