const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
              'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
              'u', 'v', 'w', 'x', 'y', 'z'];

class Cipher {

  constructor() {
    this.key = 'thisisakey';
  }

  encode(encoder) {
    let index = letters.indexOf(encoder.charAt(0));
    let keyArray = this.key.split('').map((letter) => letters.indexOf(letter));
    let shiftedArr = keyArray.map((n) => n + index);
    let shiftedWord = [];
    for (let i = 0; i < shiftedArr.length; i++) {
      shiftedWord.push(letters[shiftedArr[i]]);
    }
    return shiftedWord.join('');
  }

  decode(inputKey) {
    let firstLtr = this.key.charAt(0);
    let firstInput = inputKey.charAt(0);
    let indexShift = letters.indexOf(firstInput) - letters.indexOf(firstLtr);
    let cipherKey = [];
    for (let i = 0; i < this.key.length; i++) {
      cipherKey.push(letters[indexShift]);
    }
    return cipherKey.join('');
  }
}

module.exports = Cipher;