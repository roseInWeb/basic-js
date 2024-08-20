const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr1 = String(n).split('');
  let arr = [];

  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1.reduce((a, b, j) => {
      if (i !== j) {
        return a + b;
      }
      return a;
    }, 0));
  }

  arr = arr.map(el => +el);

  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
