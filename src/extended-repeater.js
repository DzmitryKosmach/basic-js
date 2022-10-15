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
  let addRepeatTimes = (options.additionRepeatTimes !== undefined) ? options.additionRepeatTimes : 1;
  let additionArray = new Array(addRepeatTimes).fill(String(options.addition));
  let addSeparator = (options.additionSeparator !== undefined) ? options.additionSeparator : '|';
  let additionString = (additionArray.join(addSeparator) !== 'undefined') ? additionArray.join(addSeparator) : '';
  let mainSeparator = (options.separator !== undefined) ? options.separator : '+';
  let mainRepeatTimes = (options.repeatTimes !== undefined) ? options.repeatTimes : 1;
  let result = new Array(mainRepeatTimes).fill(String(str) + additionString).join(mainSeparator);
  return result;
}

console.log(repeater('la', { repeatTimes: 3, separator: 's' }));

module.exports = {
  repeater
};
