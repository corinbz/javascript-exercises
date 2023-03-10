const caesar = function (text, shiftNumber) {
  let unicodeList = [];
  result = "";
  for (i = 0; i < text.length; i++) {
    const unicodeChar = text.charCodeAt(i);
    let newPosition = 0;
    if (unicodeChar < 91 && unicodeChar > 64) {
      newPosition = (unicodeChar + (shiftNumber % 26)) % 90;
      if (shiftNumber >= 0)
        //check if shift is positive
        newPosition = newPosition < 65 ? newPosition + 64 : newPosition;
      if (shiftNumber < 0)
        // check if shift is negative
        newPosition = newPosition < 65 ? 90 - (64 - newPosition) : newPosition;
    } else if (96 < unicodeChar && unicodeChar < 123) {
      newPosition = (unicodeChar + (shiftNumber % 26)) % 122;
      if (shiftNumber >= 0)
        newPosition = newPosition < 97 ? newPosition + 96 : newPosition;
      if (shiftNumber < 0)
        newPosition = newPosition < 97 ? 122 - (96 - newPosition) : newPosition;
    } else newPosition = unicodeChar;
    console.log(
      `${String.fromCharCode(unicodeChar)} ==> ${String.fromCharCode(
        newPosition
      )}`
    );
    console.log(`${unicodeChar} ==> ${newPosition}`);
    unicodeList.push(newPosition);
  }
  for (i = 0; i < unicodeList.length; i++) {
    result += String.fromCharCode(unicodeList[i]);
  }
  // console.log(result);
  return result;
};

// Do not edit below this line
module.exports = caesar;
