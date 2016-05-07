debugger

var word = "happy".split("");
var numOfGuess = 1; //only get 10 changes to guess correctly
var userGuess;
var correctGuesses = [];
var incorrectGuess = [];
var i = 0; //counter

for(var i = 0; i <= numOfGuess; i++){
  //check to see if correctGuesses === word, user guess the word
    var correct = word.sort().toString().localeCompare(correctGuesses.sort().toString());
    if(correct === 0)
    break;
  //ask user for a letter
    userGuess = prompt("Enter a guess");

  //check letter entered by user with letters in variable happy
    for(var i = 0; i < word.length; i++){
  //if userGuess is in word, add letter to correctGuesses
      if(userGuess === word[i]){
        correctGuesses.push(userGuess);

      }
    }
}






























// console.log("Welcome to Shanda's Hangman Game");
// var gameSize = 10;
// var row = '';
// var word = "Happy".split("");
//
// for(var i = 0; i < gameSize; i++){
//   //var row = '';
//   for(var j = 0; j < gameSize; j++){
//     if(i === 0 && j === 0){
//         console.log('+ ---- +');
//     }
//     if(i === gameSize-1 && j === gameSize-1){
//         console.log('======');
//     }
//     else {
//       console.log("|      |");
//       console.log("|      o");
//       console.log("|      |");
//       console.log("|     /|\\");
//       console.log("|     / \\ ");
//     }
//
//   }
// }
//
// //console.log(row);
//
// // console.log("+ ---- +");
// // console.log("|      |");
// // console.log("|      o");
// // console.log("|      |");
// // console.log("|     /|\\");
// // console.log("|     / \\ ");
// // console.log("======");
