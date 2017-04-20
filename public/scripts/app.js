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
    $('.tweet-container').empty()
                         .append(data.reverse().map(templateCompiled));
  }

  function loadTweets (){
    $.ajax({
      url: '/tweets',
      method: 'GET',
    }).then((data) => renderTweets(data));
  }

  $form.on('submit', function () {
    event.preventDefault();
    const inputLength = $(this).find('textarea').val().length;
    console.log(inputLength);
    if(inputLength > 0 && inputLength <= 140){
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $(this).serialize()
      }).then(loadTweets);
      $(this).find('textarea').val('');
      $(this).find('.counter').text('140');
    } else if(inputLength === 0){
      $(this).find('.error').text(`Sorry! Can't submit empty tweets.`);
      setTimeout(() => $(this).find('.error').text(''), 1500);
    }

    });

  $('.compose').on('click', () => {
    $('.new-tweet').slideToggle('slow').find('textarea').focus();
  });

  loadTweets();
});