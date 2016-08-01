$(document).ready(function() {
  doStuff();
});

function doStuff() {
  var underlay = $("#underlay");
  var input = $("#masked-input");

  input.on("keyup", function() {
    console.log("typing");
  });
}
