var Pangram = function(inputText) {
    this.inputText = inputText;
    this.fixedLetters = inputText.trim().toLowerCase().replace(/[^a-zA-Z]/g, "");
    this.letterSet = new Set(this.fixedLetters);
};

Pangram.prototype.isPangram = function() {
    return this.letterSet.size === 26;
};

module.exports = Pangram;
