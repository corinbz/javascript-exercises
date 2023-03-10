const palindromes = function (text) {
  let stripped_text = text.replace(/[^\w]/g, "").toLowerCase();
  if (stripped_text === stripped_text.split("").reverse().join("")) {
    return true;
  }
  console.log(stripped_text);
  return false;
};

// Do not edit below this line
module.exports = palindromes;
