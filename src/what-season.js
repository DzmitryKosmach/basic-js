const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  try {
    if (date === undefined) {
      return 'Unable to determine the time of year!';
    }
    if (!date instanceof Date && isNaN(date)) { 
      throw Error();
    }
    if (date.valueOf() == NaN) { 
      throw Error();
    }
    let month = date.getMonth();
    let seasonsMap = new Map();
    seasonsMap.set(11, 'winter').set(0, 'winter').set(1, 'winter');
    seasonsMap.set(2, 'spring').set(3, 'spring').set(4, 'spring');
    seasonsMap.set(5, 'summer').set(6, 'summer').set(7, 'summer');
    seasonsMap.set(8, 'autumn').set(9, 'autumn').set(10, 'autumn');
    return seasonsMap.get(month);
  } catch (error) {
    throw Error('Invalid date!');
  }  
}

console.log(getSeason(new Date("lllk")));

module.exports = {
  getSeason
};
