const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resultString ="";
  let additionStr ="";
  let preResultString ="";
   if (toString(options.addition)) {
     if (options.additionRepeatTimes) {
       for (let i = 1; i <= options.additionRepeatTimes; i++) {
         if(options.additionSeparator) {
           if (i !== options.additionRepeatTimes) {
           additionStr += options.addition + options.additionSeparator;
           } else additionStr += options.addition;
         } else if (i !== options.additionRepeatTimes)  {
         additionStr += options.addition + "|";
         } else additionStr += options.addition;
       }
     } else if (options.addition) additionStr = options.addition;
   } 

    preResultString = str + additionStr;
    
   if (options.repeatTimes) {
     for (let i = 1; i <= options.repeatTimes; i++) {
        if (options.separator) {
          if (i !== options.repeatTimes) {
          resultString += preResultString + options.separator;
          } else resultString += preResultString;
        } else if (i !== options.repeatTimes) {
               resultString += preResultString + "+";
        } else resultString += preResultString;
     }
   } else return preResultString;
  return resultString;
};
  