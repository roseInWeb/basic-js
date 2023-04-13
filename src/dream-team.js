const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(a) {
  let arr = [];
  if (a == null) {
    return 0;
  }
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] == 'string') {
      arr.push(a[i].trim())
    }
  }
  arr.sort();
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    res += arr[i][0];
  }
  res = res.toUpperCase();
  res = res.split('').sort().join('');
  return res;
}

module.exports = {
  createDreamTeam
};
