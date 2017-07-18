var Isogram = function(str) {
    this.str = str.toLowerCase().replace(/\s/g, '');
}

Isogram.prototype.isIsogram = function() {
    if (!/(.).*\1/.test(this.str)) {
        return true;
    } else {
        return false;
    }
}

module.exports = Isogram;
