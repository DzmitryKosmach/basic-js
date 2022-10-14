const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length ===0) {
    return [];
  }
  let renamedFilesArray = new Array(names[0]);  
  
  for (let i = 1; i < names.length; i++) { 
    let foundName = renamedFilesArray.find(n => n == names[i]);
    if (foundName !== undefined) {
      let foundName1 = renamedFilesArray.find(n => n == names[i]+'(1)');
      if (foundName1 === undefined) {
        renamedFilesArray[i] = (foundName + '(1)');
      } else { 
        renamedFilesArray[i] = (foundName + '(2)');
      }
      
    } else { 
      renamedFilesArray[i] = names[i];
    }
  }
  return renamedFilesArray;
  
}

console.log(renameFiles([]));

module.exports = {
  renameFiles
};
