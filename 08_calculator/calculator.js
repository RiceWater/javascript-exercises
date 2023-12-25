const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(a => { sum += a; });
  return sum;
};

const multiply = function(arr) {
  let prod = 1;
  arr.forEach(a => { prod *= a; });
  return prod;
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(num) {
	let prod = 1;
  for (let i = 1; i <= num; i++){
    prod *= i;
  }
  return prod;
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
