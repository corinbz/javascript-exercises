const findTheOldest = function (array) {
  let oldestnow = 0;
  let result = "";
  for (i = 0; i < array.length; i++) {
    if (array[i].yearOfDeath) {
      let currentAge = array[i].yearOfDeath - array[i].yearOfBirth;
      if (currentAge > oldestnow) {
        oldestnow = currentAge;
        result = array[i];
      }
    } else {
      let currentDate = new Date("2023-03-07");
      let currentAge = currentDate.getFullYear() - array[i].yearOfBirth;
      if (currentAge > oldestnow) {
        oldestnow = currentAge;
        result = array[i];
      }
    }
  }
  return result;
};

// Do not edit below this line
module.exports = findTheOldest;
