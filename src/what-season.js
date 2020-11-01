const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //if (!date) throw new CustomError('Unable to determine the time of year!');
  if (!date) {
    return 'Unable to determine the time of year!';
  } else if(date.hasOwnProperty('toString')) {
      throw new Error;
    };
  //if (date.getMonth) throw new CustomError('Error');
  let newDate = new Date (date);
   
  const month = date.getMonth();
  let seasonName = '';

  switch (month) {
    case 11:
    case 0:
    case 1: seasonName = 'winter';
    break;
    case 2:
    case 3:
    case 4: seasonName = 'spring';
    break;
    case 5:
    case 6:
    case 7: seasonName = 'summer';
    break;
    case 8:
    case 9:
    case 10: seasonName = 'autumn';
    break;

  }

  return seasonName;

};
