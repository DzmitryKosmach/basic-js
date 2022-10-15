const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let copyArr = arr.slice();
  let sortedArray = arr.filter(v => v !== -1).sort((a, b) => a - b);
  copyArr.forEach((value, index) => {
    if (value === -1) {
      sortedArray.splice(index, 0, value);
    }
  })
  return sortedArray;
}

console.log(sortByHeight([4, 2, 9, 11, 2, 16]));

module.exports = {
  sortByHeight
};
