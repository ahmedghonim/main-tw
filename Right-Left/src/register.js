$(document).ready(function() {
  const sign_in_btn = $("#sign-in-btn");
  const sign_up_btn = $("#sign-up-btn");
  const container = $(".container");

  sign_up_btn.on("click", function() {
    container.addClass("sign-up-mode");
  });

  sign_in_btn.on("click", function() {
    container.removeClass("sign-up-mode");
  });
});


$(window).on("DOMContentLoaded", function(event) {
  // Get the anchor tag element
  var anchorTag = $("#anchLink");

  // Attach a click event listener
  anchorTag.on("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the button element
    var button = window.opener.$("#sign-up-btn");

    // Trigger the button click event
    button.click();
  });
});
