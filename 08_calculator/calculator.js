const add = function(num1,num2) {
	return num1 + num2 ;
};

const subtract = function(num1,num2) {
	return num1 - num2 ;
};

const sum = function(numbers) {
  let totalSum = 0 ;
  for(let i = 0 ; i < numbers.length ; i++) {
    totalSum += numbers[i] ;
  }
	return totalSum ;
};

const multiply = function(numbers) {
  let totalMultiply = 1 ;
  for(let i = 0 ; i < numbers.length ; i++) {
    totalMultiply *= numbers[i] ;
  }
	return totalMultiply ;
};

const power = function(num1,num2) {
	return Math.pow(num1,num2) ;
};

const factorial = function(num) {
	if(num === 1 || num === 0 ){
    return 1;
  }
  else {
    return num * factorial(num - 1);
  }
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
