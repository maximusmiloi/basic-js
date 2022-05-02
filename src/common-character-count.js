const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrS1 = s1.split('')
  let resltArr = [];
  s2.split('').forEach(char => {
      if(arrS1.indexOf(char) != -1) {
          resltArr.push(char);
          arrS1[arrS1.indexOf(char)] = null;
      }
      else { resltArr.push(null);}
  })
  return resltArr.filter( v => v != null).length;
}

module.exports = {
  getCommonCharacterCount
};
