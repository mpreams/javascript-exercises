const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    let array = [1, 1];
    for (let i = 2; i < n; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
