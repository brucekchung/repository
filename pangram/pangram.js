module.exports = class Pangram {
  constructor(sentence) {
    this.sentence = sentence;
  }

  isPangram() {
    let toArr = this.sentence.toUpperCase().split('');
    let filteredArr = toArr.filter(letter => letter.match(/[A-Z]/));
    let obj = filteredArr.reduce((acc, letter) => {
      acc[letter] = letter;
      return acc; 
    }, {});
    return Object.keys(obj).length === 26;
  }
}