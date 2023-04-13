const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]' ||
  Date.parse(date) == Date.parse(new Date())) {
    throw new Error('Invalid date!');
  }

  let num = date.getMonth();
  if (num == 11 || num == 0 || num == 1) {
    return 'winter';
  } else if (num == 2 || num == 3 || num == 4) {
    return 'spring';
  } else if (num == 5 || num == 6 || num == 7) {
    return 'summer';
  } else if (num == 8 || num == 9 || num == 10) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
