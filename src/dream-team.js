const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  console.log(typeof members);
  if (!Array.isArray(members)) {
    return false;
  }
  let res = [];
  let tempName;
  members.forEach(element => {
    if (typeof element === 'string') {
      res.push(element.trim().charAt(0).toUpperCase());
    }
  })
  res.sort();
  return res.join('');
}
// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']));

module.exports = {
  createDreamTeam
};
