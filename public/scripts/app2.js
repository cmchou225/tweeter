/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function onReady() {
  var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "<script>alert('uh oh!');</script>",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function createTweetElement (data){
    var $avatar = $('<img/>').addClass('profile-pic').attr('src', data.user.avatars.small);
    var $name = $('<h2/>').addClass('profile-name').text(data.user.name);
    var $handle = $('<p/>').addClass('handle').text(data.user.handle);
    var $header = $('<header/>').append($avatar, $name, $handle);
    var $content = $('<p/>').text(data.content.text);
    var date = moment(data.created_at).fromNow();
    var $tweetDate = $('<p/>').addClass('tweet-date').text(date);
    var $heart = $('<i/>').addClass('fa fa-heart').attr('aria-hidden','true');
    var $flag = $('<i/>').addClass('fa fa-flag').attr('aria-hidden','true');
    var $retweet= $('<i/>').addClass('fa fa-retweet').attr('aria-hidden','true');
    var $icons = $('<div/>').addClass('icons').append($heart, $flag, $retweet);
    var $footer =$('<footer/>').addClass('clearfix').append($tweetDate, $icons);
    var $article = $('<article/>').addClass('tweet').append($header, $content, $footer);
    return $article;
  }

  $(".tweet-container").append(data.map(createTweetElement));

})