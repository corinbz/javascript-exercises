const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  result = 0;
  if (array.length === 0) return result;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function (array) {
  result = 1;
  for (i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  result = 1;
  if (n === 0) return result;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
