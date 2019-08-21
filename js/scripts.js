//UI Logic

$(document).ready(function(){
  $('.translator').submit(function(event){
    event.preventDefault();
    var userInput = $('#userInput').val();
    var wordArray = userInput.split(" ");
    var vowels = ["a", "e", "i", "o", "u"];
    var endResult = pigLatin(userInput);
    console.log(wordArray);
//Business Logic

    function pigLatin(userInput) {
    if (vowels.includes(userInput.charAt(0))) {
      console.log(userInput.concat('yay'));
    }  else {
      var indexOfFirstVowel
      var frontCons
      var result
      for (var i = 0; i < userInput.length; i++) {
        if (userInput[0] === "q" && userInput[1] ==="u") {
          frontCons = userInput.slice(0, 2);
          result = userInput.slice(2, userInput.length);
          console.log(result.concat(frontCons + "ay"));
        }
        else if (userInput[1] === "q" && userInput[2] ==="u") {
          frontCons = userInput.slice(0, 3);
          result = userInput.slice(3, userInput.length);
          console.log(result.concat(frontCons + "ay"));

        }
        else if (vowels.includes(userInput[i])) {
          indexOfFirstVowel = i;
          frontCons = userInput.slice(0, i);
          result = userInput.slice(i, userInput.length);
          console.log(result.concat(frontCons + "ay"));
          break;
        }
      }
    }
  }
  });
});
