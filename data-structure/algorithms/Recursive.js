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