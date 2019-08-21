

$(document).ready(function(){
  $('.translator').submit(function(event){
    event.preventDefault();
    var userInput = $('#userInput').val();
    console.log(userInput);
    var vowels = ["a", "e", "i", "o", "u"];

    if (vowels.includes(userInput.charAt(0))) {
      console.log(userInput.concat('yay'));
    }  else {
      var indexOfFirstVowel
      var frontCons
      var result
      for (var i = 0; i < userInput.length; i++) {
        if (vowels.includes(userInput[i])) {
          indexOfFirstVowel = i;
          frontCons = userInput.slice(0, i);
          result = userInput.slice(i, userInput.length)
          console.log(result.concat(frontCons + "yay"));
        }
      }

    }



  });
});
