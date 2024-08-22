const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};

  for (let i = 0; i < domains.length; i++) {
    const revDom = domains[i].split('.').reverse();
    let count = '';

    for (let j = 0; j < revDom.length; j++) {
      count += `.${revDom[j]}`;
      
      res[count] ? res[count]++ : res[count] = 1;
    }
  }

  return res;
}

module.exports = {
  getDNSStats
};
