const sumAll = function (first, second) {
  if (
    first < 0 ||
    second < 0 ||
    typeof first != "number" ||
    typeof second != "number"
  ) {
    return "ERROR";
  }
  let sum = 0;
  if (first > second) {
    let temp = first;
    first = second;
    second = temp;
  }
  for (let i = first; i <= second; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
