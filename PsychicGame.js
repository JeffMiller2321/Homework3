
    
    var alphabet = ["a","b","c","d","e","f"];
    var compIndex = Math.floor(Math. random() * alphabet.length);
    console.log("CompIndex" + compIndex);
    var compChoice = alphabet + [compIndex];
    console.log("Secret Answer: " + compChoice);

    document.onkeyup = function(event) {
        var letter = event.key.toLowerCase();
        console.log(letter);
        if(letter === compChoice){
                alert("You Win!");
             } else {
                 alert("You Lost!");
             }


}