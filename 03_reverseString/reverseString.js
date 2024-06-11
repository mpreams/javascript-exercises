const reverseString = function(string) {
    const forwardArray = string.split("");
    const reverseArray = forwardArray.reverse();
    let output = reverseArray.join('');
    return output;
};

// Do not edit below this line
module.exports = reverseString;
