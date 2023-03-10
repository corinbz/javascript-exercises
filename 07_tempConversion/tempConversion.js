const convertToCelsius = function(Fa) {
  return Math.round(((Fa - 32) * 5/9) *10) / 10;
};

const convertToFahrenheit = function(Ce) {
  return Math.round((Ce * 1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
