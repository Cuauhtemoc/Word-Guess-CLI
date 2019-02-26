var Letter = require("./letter.js")

//This function will creat and array of Letter objects when given a string. 
// Use this fucniton to test if the user guessed the letter correctly
function Word(word){
    this.word = word.split("");
    this.underlyingWord = this.word.map(function(str){
        return newLetter = new Letter(str);
    })
    this.displayWord = function(){
       this.wordArray =  this.underlyingWord.map(function(letter){
            return letter.displayLetter();
        })
        console.log(this.wordArray.join(" ")); 
    }
    this.checkGuess = function(char){
        for (i = 0; i < this.underlyingWord.length; i++)
        {
            this.underlyingWord[i].checkLetter(char);
        }
        this.displayWord();
    }
}

module.exports = Word;