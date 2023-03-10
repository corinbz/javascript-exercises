const reverseString = function(string) {
    result = "";
    for (i=string.length -1; i > -1 ; i--){
        result += string[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
