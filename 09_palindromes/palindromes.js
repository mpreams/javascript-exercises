const palindromes = function (text) {
    let noSpaceText = text.toLowerCase().split(' ').join('');
    let arr = [];
    for (let i = 0; i < noSpaceText.length; i++) {
        if (noSpaceText[i].match(/[a-z]/i)) {
            arr.push(noSpaceText[i]);
        }
    }
    arrReversed = arr.slice().reverse();
    return arr.join('') === arrReversed.join('');
};

// Do not edit below this line
module.exports = palindromes;
