const removeFromArray = function(array,element) {
    let args = Array.from(arguments);
    args = args.slice(1)
    // console.log(args);
    return array.filter((el) => !(args.includes(el)));
};

// Do not edit below this line
module.exports = removeFromArray;
