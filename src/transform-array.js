const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr))  throw new error();
  resultArr = arr.slice();
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[0] === "--discard-prev" || resultArr[0] === "--double-prev") delete resultArr[0];
    if (resultArr[resultArr.length-1] === "--discard-next" || resultArr[resultArr.length-1] === "--double-next") delete resultArr[resultArr.length -1];
    if (resultArr[i] ==="--discard-next" & resultArr[i] != resultArr[resultArr.length - 1] ){
      delete resultArr[i];
      delete resultArr[i + 1];
    }
    if (resultArr[i] ==="--double-next" & resultArr[i] != resultArr[resultArr.length - 1] ){
      resultArr[i] = resultArr[i + 1];
  }
    if (resultArr[i] ==="--discard-prev" & resultArr[i] !=resultArr[0] ){
      delete resultArr[i];
      delete resultArr[i - 1];
    }
    if (resultArr[i] ==="--double-prev" & resultArr[i] !=resultArr[0] ){
      resultArr[i] = resultArr[i - 1];
    }
};
 return resultArr.filter(function (e) {
        return e !== undefined;
 }
  );
}
