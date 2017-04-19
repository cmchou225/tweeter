/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function onReady() {

  Handlebars.registerHelper('fromNow', (time) => moment(time).fromNow());
  const tempText = $('#tweet-temp').text();
  const templateCompiled = Handlebars.compile(tempText);
  const $form = $('.container form');

  function renderTweets(data){
    $('.tweet-container').empty();
    $('.tweet-container').prepend(data.reverse().map(templateCompiled));
  }

  function loadTweets (){
    $.ajax({
      url: '/tweets',
      method: 'GET',
    }).then((data) => renderTweets(data));
  }

  $form.on('submit', function () {
    event.preventDefault();

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize()
      }).then(loadTweets());
    });

  loadTweets();
});