var inquirer = require("inquirer");
var words = ["Awkward", "Bagpipes", "Banjo", "Bungler", "Croquet", "Crypt", "Dwarves", "Fervid"]
var Word = require("./word.js")
var currentIndex = 0;
var currentWord;

function chooseWord(){
    currentWord = new Word(words[currentIndex]);
    currentWord.displayWord();
}

function promptPlayer(){
    var win;
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
            currentWord.checkGuess(answers.playerGuess);
            promptPlayer();
        })
    }
 
}
chooseWord();
promptPlayer();
