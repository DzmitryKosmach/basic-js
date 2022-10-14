const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split("");
  let maxNumberWithoutDigit = 0;
  arr.forEach((_, index) => {
    let curentNumberWithoutDigit = Number(
      arr.filter((_, index2) => index != index2).join("")
    );
    if (curentNumberWithoutDigit > maxNumberWithoutDigit) {
      maxNumberWithoutDigit = curentNumberWithoutDigit;
    }
  });
  return maxNumberWithoutDigit;
}

console.log(deleteDigit(152));

module.exports = {
  deleteDigit,
};
