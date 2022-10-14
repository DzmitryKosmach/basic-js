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
  let lineMap = new Map();
  let array = str.split('');
  let charBefore;
  array.forEach(char => {
    let value = lineMap.get(char);
    if (value !== undefined && charBefore == char) {
      lineMap.set(char, value + 1);
    } else if  (value !== undefined && charBefore != char){ 
      lineMap.set(char + 2, 1);
    } else { 
      lineMap.set(char, 1);
    }
    charBefore = char;
  });
  let encoderLine = '';
  lineMap.forEach((value, key) => { 
    if (value === 1) { 
      encoderLine += key[0];
    } else {
      encoderLine += value + key[0];
    }
  })
  return encoderLine;
}

console.log(encodeLine('abbcca'));

module.exports = {
  encodeLine
};
