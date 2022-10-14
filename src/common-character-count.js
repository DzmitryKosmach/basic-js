const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Array = s1.split("");
  let s2Array = s2.split("");
  let charsSet = new Set(s1Array.concat(s2Array));
  let countCommonCharacters = 0;
  charsSet.forEach((char) => {
    let filteredArrlengh1 = s1Array.filter((ch) => ch === char).length;
    let filteredArrlengh2 = s2Array.filter((ch) => ch === char).length;
    let inc =
      filteredArrlengh1 <= filteredArrlengh2
        ? filteredArrlengh1
        : filteredArrlengh2;
    countCommonCharacters += inc;
  });
  return countCommonCharacters;
}

console.log(getCommonCharacterCount("aabcc", "adcaa"));

module.exports = {
  getCommonCharacterCount,
};
