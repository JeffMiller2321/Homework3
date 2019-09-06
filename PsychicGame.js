var wins = 0
var losses = 0
var guessLeft = 3
var guessSoFar = []



var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compIndex = Math.floor(Math.random() * alphabet.length);
console.log("CompIndex" + compIndex);
var compChoice = alphabet + [compIndex];
console.log("Secret Answer: " + compChoice);

document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();
    console.log(letter);
    if (letter === compChoice) {
        wins++;
        guessLeft = 3;
        alert("You Win!");
        guessSoFar = []

    } else {
        alert("You Lost!");

     losses++
     guessLeft = 3
     guessSoFar = []
    }

}
