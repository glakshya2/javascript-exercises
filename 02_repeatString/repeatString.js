const repeatString = function (text, number) {
  if (number < 0) {
    return "ERROR";
  }
  let ans = "";
  for (let i = 0; i < number; i++) {
    ans += text;
  }
  return ans;
};

// Do not edit below this line
module.exports = repeatString;
