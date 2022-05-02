const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(options.repeatTimes === undefined){ options.repeatTimes = 1}
  if(options.separator === undefined){ options.separator = '+'}
  if(options.addition === undefined){ options.addition = ''}
  if(options.additionRepeatTimes === undefined){ options.additionRepeatTimes = 1}
  if(options.additionSeparator === undefined){ options.additionSeparator = '|'} 
  const additional = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  const additionalSliceLast = additional.slice(0, additional.length - options.additionSeparator.length )
  const strSliceLast = (str + additionalSliceLast + options.separator).repeat(options.repeatTimes);
  return strSliceLast.slice(0, strSliceLast.length - options.separator.length)
}

module.exports = {
  repeater
};
