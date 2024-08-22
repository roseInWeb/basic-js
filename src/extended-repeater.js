const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  let repeat = (options.repeatTimes && options.repeatTimes !== 0) ? options.repeatTimes : 1;
  let addRepeat = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;

  for (let r = 0; r < repeat; r++) {
    let count = addRepeat;

    res += str;

    for (let c = 0; c < count; c++) {
      res += (options.addition !== undefined) ? String(options.addition) : '';
      if (c !== count - 1) res += (options.additionSeparator && options.additionSeparator !== undefined) ? options.additionSeparator : '|';
    }

    if (r !== repeat - 1) res += (options.separator && options.separator !== undefined) ? options.separator : '+';
  }

  return res;
}

module.exports = {
  repeater
};
