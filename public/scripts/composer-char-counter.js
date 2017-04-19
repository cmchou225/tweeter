$(document).ready(function(event) {
  $("[name=text]").on('input', function (event) {
    var maxChar = 140;
    var charRemaining = maxChar - $(this).val().length;
    var counter = $(this).siblings('.counter');
    var error = $(this).siblings('.error');
    counter.text(charRemaining);
    if(charRemaining < 0) {
      counter.addClass('overLimit');
      error.addClass('overLimit').text('Tweet too long!');
    } else {
      counter.removeClass('overLimit');
      error.removeClass('overLimit').text('');
    }
  });
});