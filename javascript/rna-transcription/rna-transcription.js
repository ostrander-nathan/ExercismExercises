var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
    var dnaToRna = hashTable("GCTA".split(''), "CGAU".split(''));
    return dna.split('').map(function(x) {
        return dnaToRna[x]
    }).join('');
};

function hashTable(keys, values) {
    var hash = {};
    keys.forEach(function(key, index) { hash[key] = values[index] });
    return hash;
}
module.exports = DnaTranscriber;
