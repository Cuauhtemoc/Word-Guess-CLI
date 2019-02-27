//modules required to run the game
var inquirer = require("inquirer");
var Word = require("./word.js")

//variables to keep track of the current word and game state
var words = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid"]
var currentIndex = 0;
var currentWord;
var remainingGuesses = 20;


//choose a new string from an array and contruct a Word object
function chooseWord(){
    remainingGuesses = 20;
    currentWord = new Word(words[currentIndex]);
    currentWord.displayWord();
}


//prompt the player to guess a letter, check if that letter is in the word, if that letter is in the word reveal it, 
//subtarct from remaining guesses.  recursively call this funciton until the word is solved or the player runs out of guesses
function promptPlayer(){
    var win;
    console.log("Remaining Guesses: " + remainingGuesses);
    for (i = 0; i < currentWord.underlyingWord.length; i++)
    {
        if (currentWord.underlyingWord[i].isFound === false)
        {
            win = false;
            break
        }
        else 
            win = true
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
 