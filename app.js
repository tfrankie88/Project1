'use strict';

$(document).ready(function(){

// creat array for populated game board
var $wordZ = [
  'doctype',
  'css',
  'array',
  'html',
  'server',
  'jquery',
  'github',
  'object',
  'method',
  'flexbox',
  'class'
];
// on load, game board creates li items
  var $randoNum = Math.floor(Math.random()*($wordZ.length));
  var $wordSelect = $wordZ[$randoNum];
  var $splitWord = $wordSelect.split('');

// As explained by Bobby; after splitting array item word, it is reassigned to a li item and the letter is hidden but the data is kept
  $splitWord.forEach(function(letter) {
    var $li = $(`<li class = "not-found" data-letter = ${letter}> </li>`);
    $('.word').append($li);
    // console.log(letter);
  });

  for (var i = 0; i < $splitWord.length; i++) {
    // $('.word')[i].text($('.word')[i].data());
      console.log($('.word li').eq(i)[0].attributes[1].value);
  };


  // console.log($('.word');
});
