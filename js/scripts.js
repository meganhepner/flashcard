$(document).ready(function() {
  $("button#javascript").click(function() {
    $("body").removeClass();
    $("body").addClass("javascript-definition");
  });

  $("button#arguement").click(function() {
    $("body").removeClass();
    $("body").addClass("arguement-definition");
  });
});