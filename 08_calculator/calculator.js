const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(nums) {
  return nums.reduce((total, a) => total+a, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, a) => total*a, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  let sum = 1;
  for (let i = 2; i <= a; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
