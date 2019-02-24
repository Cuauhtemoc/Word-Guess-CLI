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
 