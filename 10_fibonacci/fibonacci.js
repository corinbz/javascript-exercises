const fibonacci = function (n) {
  let result = [1];
  if (n < 0) return "OOPS";
  if (n <= 2) return result.slice(-1)[0];
  for (i = 0; i < n - 1; i++) {
    result = result.slice(-2);
    let sum = result.reduce(
      (partialSum, last_element) => partialSum + last_element,
      0
    );
    result.push(sum);
  }
  return result.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
