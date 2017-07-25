var Bob = function() {};

Bob.prototype.hey = function(inputText) {
    if (inputText.toUpperCase() === inputText && /[A-Z]/.test(inputText)) {
        // He answers 'Whoa, chill out!'
        // if you yell at him.
        return "Whoa, chill out!";
    } else if (/\?\s*$/.test(inputText)) {
        // Bob answers 'Sure.'
        // if you ask him a question.
        return "Sure.";
    } else if (/^\s*$/.test(inputText)) {
        // He says 'Fine. Be that way!'
        // if you address him without actually saying
        // anything.
        return "Fine. Be that way!";
    } else {
        // He answers 'Whatever.'
        // to anything
        // else .
        return "Whatever.";
    }
}
module.exports = Bob;
