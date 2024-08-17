const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res: new Array(),

  getLength() {
    return this.res.length;
  },

  addLink(value) {
    if (typeof value !== 'string') {
      value = String(value).replace(/{([\s\S]+?)}/g, '{ }');
    }
    this.res.push(String(value));
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position < 0 || !position || position > this.res.length ) {
      this.res = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.res = [
      ...this.res.slice(0, position - 1),
      ...this.res.slice(position),
    ];
    return this;
  },
  reverseChain() {
    this.res = this.res.reverse();
    return this;
  },
  finishChain() {
    let result = this.res.map((el) => `( ${el} )`).join('~~');
    this.res = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
