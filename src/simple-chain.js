const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    this.array.push(String(value));
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position)  && position < this.array.length && position >= 0) {
      this.array.splice(position - 1, 1);
      return this;
    }
    this.array = [];
    throw new Error();
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },

  finishChain() {
    const resultArray = this.array.join(' )~~( ');
    this.array = [];
    return `( ${resultArray} )`;
  }
};

module.exports = chainMaker;
