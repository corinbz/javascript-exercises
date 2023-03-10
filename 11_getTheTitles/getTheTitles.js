const getTheTitles = function (books) {
  result = [];
  books.forEach((element) => {
    result.push(element["title"]);
  });
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
