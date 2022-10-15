const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nStringArray = String(n).split('').map(v => Number(v));
  let sum = nStringArray.reduce((x, y) => x + y, 0);
  if (sum < 10) {
    return sum;
  } else { 
    let sum2 = getSumOfDigits(sum);
    if (sum2 < 10) {
      return sum2;
    }
  }
}

console.log(getSumOfDigits(35));

module.exports = {
  getSumOfDigits
};
