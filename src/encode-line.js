const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  }
  let strArr = [...str];
  let curChar = strArr[0];
  let count = 0;
  let resStr = '';
  strArr.forEach(char => {
    if(curChar === char) {
      count++;
    }
    else {
      resStr += (count > 1 ? count : '') + curChar;
      count = 1;
      curChar = char;
    }
  })
  if (count > 0) {
    resStr += (count > 1 ? count : '') + curChar;
  }
  return resStr;
}

// encodeLine('aaaatttt')

module.exports = {
  encodeLine
};
