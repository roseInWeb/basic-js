const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type) {
    this.type = type;
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let keyStr = ''.padStart(str.length, key).toUpperCase();
    let res = '';
    str = str.toUpperCase();

    keyStr = keyStr.split('');
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        keyStr.splice(i, 0 , ' ');
      }
    }
    keyStr.length = str.length;
    keyStr = keyStr.join('');

    for (let i = 0; i < str.length; i++) {
      if (/^\p{L}$/u.test(str[i])) {
        let index = abc.indexOf(str[i]) + abc.indexOf(keyStr[i]);
        res += abc[index % 26];
      } else {
        res += str[i];
      }
    }

    res = this.type === false ? res.split('').reverse().join('') : res;

    return res;
  }
  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let keyStr = ''.padStart(str.length, key).toUpperCase();
    let res = '';
    str = str.toUpperCase();

    keyStr = keyStr.split('');
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        keyStr.splice(i, 0 , ' ');
      }
    }
    keyStr.length = str.length;
    keyStr = keyStr.join('');

    for (let i = 0; i < str.length; i++) {
      if (/^\p{L}$/u.test(str[i])) {
        let index = 0;
        if (abc.indexOf(str[i]) - abc.indexOf(keyStr[i]) < 0) {
          index =  26 + abc.indexOf(str[i]) - abc.indexOf(keyStr[i]);
        } else {
          index = abc.indexOf(str[i]) - abc.indexOf(keyStr[i]);
        }
        res += abc[index];
      } else {
        res += str[i];
      }
    }

    res = this.type === false ? res.split('').reverse().join('') : res;

    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
