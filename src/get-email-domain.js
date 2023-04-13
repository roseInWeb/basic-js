const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('').reverse();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    if (arr[i + 1] == '@') {
      break;
    }
  }
  return res.reverse().join('');
}

module.exports = {
  getEmailDomain
};
