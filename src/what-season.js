const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if(arguments.length === 0) { return 'Unable to determine the time of year!'};
  console.log(date.constructor.name);
  if(typeof(date.valueOf()) != 'number'){ throw new Error('Invalid date'); }
    if(typeof(date) === 'number'){ throw new Error('Invalid date'); }
  let a = arguments[0]+'';
  let b = a.slice(4,7);
  if(b === 'Jan' || b === 'Feb' || b === 'Dec'){
    return 'winter';
  }
  if (b === 'Mar' || b === 'Apr' || b === 'May'){
    return 'spring';
  }
  if (b === 'Jun' || b === 'Jul' || b === 'Aug'){
    return 'summer';
  }
  if (b === 'Sep' || b === 'Oct' || b === 'Nov'){
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
