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
  let nArr = (''+n).split('');
  let nArrArr = [];
  for(let i = 0; i < nArr.length; i++ ){  
     nArrArr.push(nArr.map(( v, ind) => ind === i ? v = null : v)) 
  }
  let newArr = nArrArr.map( v => v.filter( a => a != null)).map( v => +v.join(''));
  return Math.max(...newArr);
}

module.exports = {
  deleteDigit
};
