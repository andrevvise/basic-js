const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!Number(sampleActivity) || !isNaN(sampleActivity)) return false;
  if (sampleActivity <= 0 || sampleActivity >= 9000) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));

};
