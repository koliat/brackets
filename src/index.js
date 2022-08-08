module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = [];
  bracketsConfig.forEach((item, index) => {
    openBrackets[index] = item[0];
    closeBrackets[index] = item[1];
  });
  let check = [];
  for (let i = 0; i < str.length; i++) {
    if (
      closeBrackets.indexOf(str[i]) !== -1 &&
      check[check.length - 1] === openBrackets[closeBrackets.indexOf(str[i])]
    ) {
      check.pop(closeBrackets[closeBrackets.indexOf(str[i])]);
    } else if (openBrackets.indexOf(str[i]) !== -1) {
      check.push(openBrackets[openBrackets.indexOf(str[i])]);
    } else {
      return false;
    }
  }
  return check.length === 0;
};
