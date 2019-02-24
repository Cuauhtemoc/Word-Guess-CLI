var inquirer = require("inquirer");
var Word = require("./word.js")

var words = ["Awkward", "Bagpipes", "Banjo", "Bungler", "Croquet", "Crypt", "Dwarves", "Fervid"]
var currentIndex = 0;
var currentWord;
var remainingGuesses = 20;

function chooseWord(){
    remainingGuesses = 20;
    currentWord = new Word(words[currentIndex]);
    currentWord.displayWord();
}

function promptPlayer(){
    var win;
    console.log("Remaining Guesses: " + remainingGuesses);
    for (i = 0; i < currentWord.underlyingWord.length; i++)
    {
        if (currentWord.underlyingWord[i].isFound === false)
        {
            win = false;
        }
        else 
            win = true;
    }
    if (win){
        inquirer.prompt([
            {
                type: "list",
                message: "Would you like to play again?",
                choices: ["Yes", "No"],
                name: "playAgain"
            }
        ]).then(function(answers){
            if (answers.playAgain === "Yes")
            {
                currentIndex++;
                chooseWord();
                promptPlayer();
            }
            else 
                console.log("Thanks for playing")
        })
       
    }
    else if (!win)
    {
        inquirer.prompt([
        {
            type: "input",
            message: "Pick a letter" ,
            name: "playerGuess",
            }
        ]).then(function(answers){
            remainingGuesses--;
            if (remainingGuesses === 0 )
            {
                console.log("You are out of guesses, gameover")
            }
            else if (remainingGuesses > 0)
            {
                currentWord.checkGuess(answers.playerGuess);
                promptPlayer();
            }
        })
    }
 
}
chooseWord();
promptPlayer();
