const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  const array = Array.from(arr);

  for (let i = 0; i < arr.length; i++) {
    if (array[i] === '--discard-next') {
      array.splice(i, 2, false);
    }

    if (array[i] === '--discard-prev') {
      if (i > 0) {
        array.splice(i - 1, 1, false);
      }
      array.splice(i, 1, false);
    }

    if (array[i] === '--double-next') {
      array.splice(i, 1, array[i + 1]);
    }

    if (array[i] === '--double-prev') {
      array.splice(i, 1, array[i - 1]);
    }
  }
  return array.filter((e) => e);
}

module.exports = {
  transform
};
