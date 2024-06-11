const sumAll = function(low, high) {
    let sum = 0;
    if (low > high) {
        let n = low;
        low = high;
        high = n;
    }
    if (low < 0 || high < 0 || typeof low != 'number' || typeof high != 'number') {
        return "ERROR";
    }
    for (let i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
