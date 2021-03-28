'use strict';

// 일반적인 형태 1
function factorial(num) {
    if (num > 1) return num * factorial(num - 1)
    else return num
}


// 일반적인 형태 2
function factorial(num) {
  if (num <= 1) return num
  return num * factorial(num - 1)
}

console.log(factorial(10));

function plus(num) {
  if (num <= 1) return num
  return num + plus(num - 1);
}

console.log(plus(10));

function func(n) {
  if (n === 1) return n
  if (n % 2 === 1) return (func((3 * n) + 1))
  else return (func(parseInt(n / 2)))
}

console.log(func(3));

