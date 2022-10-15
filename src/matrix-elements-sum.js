const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let zeroArray = Array(matrix[0].length).fill(1);  
  let sum = 0;
  matrix.forEach((value, index) => {
    let currentSum = value.filter((value, index) => zeroArray[index] !== 0).reduce((x, y) => x + y, 0);
    sum += currentSum;
    value.forEach((value, index) => { 
      if (value === 0) { 
        zeroArray[index] = 0;
      }
    })
  })
  return sum;  
}

module.exports = {
  getMatrixElementsSum
};
