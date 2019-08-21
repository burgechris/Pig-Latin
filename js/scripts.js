var translator = function(phraseArray) {
  if ()
}


$(document).ready(function(){
  $('.translator').submit(function(event){
  event.preventDefault();
  var phrase = $('input#sentence').val();
  var phraseArray = phrase.split('');
  console.log(phraseArray);

  });
});
