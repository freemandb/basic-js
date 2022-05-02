const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    if (Array.isArray(arr)) {
      count++;
    }
    let counts = [count]
    for (let el of arr) {
      if (Array.isArray(el)) {
        counts.push(counts[0] + this.calculateDepth(el))
      }
    }
    let maxCount = 0;
    for (let c of counts) {
      if (c > maxCount) {
        maxCount = c;
      }
    }
    return maxCount;
  }
}

let dc = new DepthCalculator();

// console.log(dc.calculateDepth([1, 2, 3, [4, 5], 3, [2,[1]]]));

module.exports = {
  DepthCalculator
};
