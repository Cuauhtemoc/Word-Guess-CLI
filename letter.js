//this constructor will create a letter object when given a single string character.
//use this constructor to create letter objects and check if the user has guessed the corrected letter
function Letter (letter){
    
    this.underLyingChar = letter;
    this.isFound = false;
    this.displayLetter = function(){
        if (this.isFound)
        {
            return this.underLyingChar;
        }
        else 
           return ("_");
    }
    this.checkLetter = function(char){
        if (char === this.underLyingChar)
        {
            this.isFound = true;
            this.displayLetter();
        }
        else 
            this.displayLetter();
    }
}
module.exports = Letter;
 