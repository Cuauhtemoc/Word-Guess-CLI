var Letter = require("./letter.js")

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
        return this.wordArray;
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