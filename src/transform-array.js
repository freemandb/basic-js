const { NotImplementedError } = require('../extensions/index.js');

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

function transform(arr) {
  const comandsArr = ['--double-next', '--double-prev', '--discard-prev', '--discard-next']

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let resArr = [];
  let lastDeletedInd = -1;
  for (let ind = 0; ind < arr.length; ind++) {
    let el = arr[ind];
    if (comandsArr.indexOf(arr[ind] ) == -1) {
      resArr.push(arr[ind]);
    } else {
      if (el === '--double-next') {
        if (ind < arr.length - 1 && comandsArr.indexOf(arr[ind + 1] == -1)) {
          resArr.push(arr[ind + 1]);
        }
      } 
      if (el === '--double-prev') {
        if (ind > 0 && comandsArr.indexOf(arr[ind - 1] == -1) && lastDeletedInd != ind - 1) {
          resArr.push(arr[ind - 1]);
        }
        
      }
      if (el === '--discard-prev') {
        if (ind > 0 && comandsArr.indexOf(arr[ind - 1] == -1) && lastDeletedInd != ind - 1) {
          resArr.pop();
        }
      }
      if (el === '--discard-next') {
        if (ind < arr.length - 1 && comandsArr.indexOf(arr[ind - 1] == -1)) {
          lastDeletedInd = ++ind;
        }
        
      }
    }
    
  }
  return resArr;
}

transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])

module.exports = {
  transform
};
