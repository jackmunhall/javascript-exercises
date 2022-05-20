const { sum } = require("../08_calculator/calculator");

const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    if (num == 1) return 1;
    num = Number(num);
    let first = 0;
    let second = 1;
    let sum = 0;
    for (i = 1; i < num; i++) {
        sum = first + second;
        first = second;
        second = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
