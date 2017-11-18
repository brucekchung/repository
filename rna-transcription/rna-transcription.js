function DnaTranscriber() {}

let translate = function(input) {
  if (input === 'G') return 'C';
  else if (input === 'C') return 'G';
  else if (input === 'T') return 'A';
  else if (input === 'A') return 'U';
  else throw new Error('Invalid input');
};

DnaTranscriber.prototype.toRna = function(nucleo) {
  let arr = nucleo.split('');
  return arr.map(function(letter) {
    return translate(letter);
  }).join('');
}


module.exports = DnaTranscriber;