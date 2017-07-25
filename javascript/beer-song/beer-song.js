var BeerSong = function(verseSong) {};

BeerSong.prototype.verse = function(verseNum) {
    var notIdenticalLines = {
        0: 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n',
        1: '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n',
        2: '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
    };
    var regularVerse = verseNum + " bottles of beer on the wall, " + verseNum +
        " bottles of beer.\nTake one down and pass it around, " + (verseNum - 1) +
        " bottles of beer on the wall.\n";

    if (notIdenticalLines[verseNum] === undefined) {
        return regularVerse;
    } else {
        return notIdenticalLines[verseNum];
    }
};

BeerSong.prototype.sing = function(singStart, singStop) {
    var multipleVerses = [];
    singStop = 0;
    for (var i = singStart; i >= singStop; i--) {
        multipleVerses.push(this.verse(i));
    };
    return multipleVerses.join("\n");
};
module.exports = BeerSong;
