const { NotImplementedError } = require("../extensions/index.js");

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
const X = "x";

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (i != arr.length - 1) {
          arr[i + 1] = X;
        }
        break;

      case "--discard-prev":
        if (i > 0) {
          resultArr[i - 1] = X;
        }
        break;

      case "--double-next":
        if (i != arr.length - 1) {
          let next = arr[i + 1];
          if (!Number(next).isNaN) {
            resultArr.push(next);
          }
        }
        break;

      case "--double-prev":
        if (i > 0) {
          let prev = arr[i - 1];
          if (!Number(prev).isNaN) {
            resultArr.push(prev);
          }
        }

        break;

      default:
        resultArr.push(arr[i]);
        break;
    }
  }

  return resultArr.filter((v) => v !== X);
}

console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])
);

module.exports = {
  transform,
};
