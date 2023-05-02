const removeFromArray = function () {
  for (let i = 1; i < arguments.length; i++) {
    index = arguments[0].indexOf(arguments[i]);
    if (index < 0) {
      continue;
    }
    arguments[0].splice(arguments[0].indexOf(arguments[i]), 1);
  }
  return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
