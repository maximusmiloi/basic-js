const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
   if(arr instanceof Array === false) { throw new Error('\'arr\' parameter must be an instance of the Array!')}
   let newArr = arr;
   let b = [];
   let c= [];
   let g;
   newArr.forEach((v,i) => {
       if(v === '--discard-next') { g = i } 
       else { b.push(v) }
   })
   if(g !== undefined){
       b[g] = null;
   }
   console.log(b);
   b.forEach( (v,i) => {
       if( v === '--discard-prev' ) { c[i-1] = null } 
       else if( v === '--double-next' ) {c.push(b[i+1]) }
       else if( v === '--double-prev' ) { c.push(b[i-1]) }
       else { c.push(v) }
   })
   return c.filter( v => v != null);
}

module.exports = {
  transform
};
