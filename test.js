'use strict';

const arr = [25, 23, 11, 47, 53, 17, 33];

function solution(arr, t) {
  let counter = 0;
  for (let x of arr) {
    if (x % 10 === t) {
      counter++;
    }
  }
  return counter;
}

console.log(solution(arr, 7));
