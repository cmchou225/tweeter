$(document).ready(function(event) {
  $("[name=text]").on('input', function (event) {
    var maxChar = 140;
    var inputLength = maxChar - $(this).val().length;
    var counter = $(this).siblings('.counter');
    counter.text(inputLength);
    if(inputLength < 0) {
      counter.addClass('overLimit');
    } else {
      counter.removeClass('overLimit');
    }
  });
});