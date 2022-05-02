const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  addLink(value) {
    if (value === undefined) {
      this.chain.push('');
    }
    else if (value === null) {
      this.chain.push('null');
    }
    else {
      this.chain.push(value.toString());
    }
    return this;
  },
  getLength() {
    return this.chain.length;
  },
  
  removeLink(position) {
    if (isNaN(position) || !Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
      return;
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishStr = '';
    for (let i = 0; i < this.chain.length; i++) {
      finishStr += `( ${this.chain[i]} )` + (i < this.chain.length - 1 ? '~~' : '');
    }
    this.chain = [];
    return finishStr;
  }
};

// chainMaker.addLink('11').addLink('11')

// console.log(chainMaker.addLink(null));

module.exports = {
  chainMaker
};
