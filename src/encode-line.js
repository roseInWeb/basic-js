const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return str;

  return str.replace(/([a-z])\1*/g, (el)=>( el.length > 1 ? el.length + el[0]: el[0]));
}

module.exports = {
  encodeLine
};
