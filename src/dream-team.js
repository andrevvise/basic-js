const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let encrypt = [];
    let name;
    if (!Array.isArray(members)) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      name = members[i].trim();
      encrypt.push(name[0].toUpperCase());
    }
  }
  return encrypt.sort().join('');
  
};
