const { NotImplementedError } = require('../extensions/index.js');

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
  let count = n.toString().length;
  let numsArr = [];
  let temp;
  for (let i = 0; i < count; i++) {
    temp = [...n.toString()];
    temp.splice(i, 1);
    numsArr.push(parseInt(temp.join('')));
  }
  return numsArr.reduce((prev, cur) => prev > cur ? prev : cur, Number.MIN_SAFE_INTEGER);
}

module.exports = {
  deleteDigit
};
