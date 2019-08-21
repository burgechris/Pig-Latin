var vowels = ["a", "e", "i", "o", "u"];
var con = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l",
"z", "x", "c", "v", "b", "n", "m"];
var translator = function(characterArray) {
  for (var i = 0; i < characterArray.length; i++) {
    if ((vowels.includes(characterArray[i])) || con.includes(characterArray[i])) {
      console.log("Please enter a real word.")
    }
      else if (i === 0 && i === vowels) {
      console.log(characterArray + "yay");
    }


  }
}


$(document).ready(function(){
  $('.translator').submit(function(event){
  event.preventDefault();
  var word = $('input#sentence').val();
  var characterArray = word.split('');
  var wordArray = word.split(" ");
  console.log(characterArray);
  console.log(wordArray);
  var result = translator(wordArray);
  });
});
