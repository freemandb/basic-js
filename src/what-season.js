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
function getSeason(date = null) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    console.log('Invalid date! [object Date]');
    throw new Error('Invalid date!');
  }
  try {
    let msec = date.getTime();
    let checkDate = new Date(msec);
    if (checkDate.toString() !== date.toString()) {
      console.log('Invalid date! '+checkDate.toString());
      throw new Error('Invalid date!');
    }
  }
  catch (e) {
    throw new Error('Invalid date!');
  }
  
  console.log('date month ' + date.getMonth());
  
  let month = date.getMonth();
  if ([11, 0, 1].indexOf(month) > -1) {
    console.log('winter');
    return 'winter';
  }
  if ([2, 3, 4].indexOf(month) > -1) {
    console.log('spring');
    return 'spring';
  }
  if ([5, 6, 7].indexOf(month) > -1) {
    console.log('summer');
    return 'summer';
  }
  else {
    console.log('fall');
    return 'fall'
  }
  // remove line with error and write your code here
}



module.exports = {
  getSeason
};
